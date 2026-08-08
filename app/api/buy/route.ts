import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { service, phone, amount, plan_id, disco_id, smartcard } = body

    const API_TOKEN = process.env.VTU_API_TOKEN

    // VTUKONNECT endpoint - confirm from their docs
    const url = "https://vtukonnect.com/api/v1"

    const payload = {
      token: API_TOKEN,
      service: service, // "airtime", "data", "cable", "electricity"
      phone: phone,
      amount: amount,
      plan_id: plan_id, // for cable/data
      disco_id: disco_id, // for electricity
      smartcard: smartcard // for cable
    }

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })

    const data = await res.json()
    return NextResponse.json(data)

  } catch (error) {
    return NextResponse.json({ status: "error", message: "Server error" })
  }
      }
