import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/send-email";

export async function POST(request: NextRequest) {
  try {
    const { email, name, message } = await request.json();
    await sendEmail({ email, name, message });
    return NextResponse.json({ message: "Email sent" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
