import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { userId, service, phone, amount, plan_id, disco_id, smartcard } = body
    
    const API_TOKEN = process.env.VTU_API_TOKEN
    
    // 1. CHECK REAL WALLET FROM DB
    const user = await prisma.user.findUnique({ where: { id: userId } })
    if (!user) return NextResponse.json({ status: "error", message: "User not found" })
    
    if (user.wallet < amount) {
      return NextResponse.json({ status: "error", message: "Insufficient Balance. Your balance: ₦" + user.wallet })
    }

    // 2. DEDUCT MONEY FIRST
    await prisma.user.update({
      where: { id: userId },
      data: { wallet: user.wallet - amount }
    })

    // 3. CALL VTUKONNECT
    const url = "https://vtukonnect.com/api/v1"
    const payload = { token: API_TOKEN, service, phone, amount, plan_id, disco_id, smartcard }

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })
    const data = await res.json()

    // 4. SAVE ORDER + REFUND IF FAILED
    if (data.status === "success") {
      await prisma.order.create({
        data: { userId, type: service, network: plan_id, phone, amount, status: "success", ref: `VTU_${Date.now()}` }
      })
      return NextResponse.json({ status: "success", message: "Order Successful", newBalance: user.wallet - amount })
    } else {
      // REFUND
      await prisma.user.update({
        where: { id: userId },
        data: { wallet: user.wallet } // return money
      })
      await prisma.order.create({
        data: { userId, type: service, network: plan_id, phone, amount, status: "failed", ref: `VTU_${Date.now()}` }
      })
      return NextResponse.json({ status: "error", message: data.message })
    }

  } catch (error) {
    return NextResponse.json({ status: "error", message: "Server Error" })
  }
  }
