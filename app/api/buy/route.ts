import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { service, phone, amount, plan_id, disco_id, smartcard, userId } = body
    
    const API_TOKEN = process.env.VTU_API_TOKEN
    
    // 1. CHECK WALLET
    const userBalance = 5000; // fetch from DB later
    if (userBalance < amount) {
      return NextResponse.json({ status: "error", message: "Insufficient Balance" })
    }

    // 2. CALL VTUKONNECT
    const url = "https://vtukonnect.com/api/v1"
    const payload = {
      token: API_TOKEN,
      service: service, 
      phone: phone,
      amount: amount,
      plan_id: plan_id,
      disco_id: disco_id,
      smartcard: smartcard
    }

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })

    const data = await res.json()

    // 3. CHECK RESULT
    if (data.status === "success") {
      // Deduct from wallet + Save order
      return NextResponse.json({ status: "success", message: "Order Successful", data })
    } else {
      // Refund user
      return NextResponse.json({ status: "error", message: data.message })
    }

  } catch (error) {
    return NextResponse.json({ status: "error", message: "Server Error" })
  }
      }
