// app/api/verify-captcha/route.js
import { NextResponse } from "next/server"

export async function POST(request) {
  const { token } = await request.json()

  const secretKey = process.env.HCAPTCHA_SECRET

  try {
    const verifyUrl = `https://hcaptcha.com/siteverify?secret=${secretKey}&response=${token}`

    const response = await fetch(verifyUrl, {
      method: "POST"
    })

    const data = await response.json()

    if (data.success) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ success: false, error: "Verification failed" })
    }
  } catch (error) {
    console.error("Error during verification:", error)
    return NextResponse.json({ success: false, error: "Internal Server Error" })
  }
}
