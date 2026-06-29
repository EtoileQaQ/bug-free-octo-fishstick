import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  console.log('Contact form submission:', body)
  // TODO: brancher un service email (Resend, Nodemailer, etc.)
  return NextResponse.json({ success: true })
}
