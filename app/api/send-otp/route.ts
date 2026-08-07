import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  const { email, otp } = await request.json()

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS, // This is your 16-digit App Password
    },
  })

  try {
    await transporter.sendMail({
      from: `"EXLOWG" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'Your EXLOWG Login Code',
      html: `
        <div style="font-family: Arial; padding: 20px;">
          <h2 style="color: #6366f1;">EXLOWG Verification</h2>
          <p>Your login code is:</p>
          <h1 style="font-size: 32px; letter-spacing: 5px; color: #1e293b;">${otp}</h1>
          <p>This code expires in 5 minutes.</p>
        </div>
      `,
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false, error: error })
  }
        }
