import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.warn("RESEND_API_KEY is not configured.");
      return NextResponse.json(
        {
          success: false,
          error:
            "Resend API key is not configured. Please add RESEND_API_KEY to your .env.local file or Vercel environment variables.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "saurabhpatel6935@gmail.com";

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [receiverEmail],
      replyTo: email,
      subject: subject ? `[Portfolio] ${subject} - from ${name}` : `New message from ${name}`,
      text: `From: ${name}\nEmail: ${email}\nSubject: ${subject || "N/A"}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #0f172a; color: #f8fafc; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1);">
          <div style="margin-bottom: 20px; border-bottom: 1px solid rgba(255, 255, 255, 0.1); padding-bottom: 16px;">
            <h2 style="color: #818cf8; margin: 0 0 6px 0; font-size: 20px;">New Portfolio Contact Inquiry</h2>
            <p style="color: #94a3b8; margin: 0; font-size: 13px;">Received via Saurabh Bhai Patel's Portfolio</p>
          </div>
          
          <div style="margin-bottom: 16px;">
            <p style="margin: 4px 0; font-size: 14px;"><strong style="color: #c7d2fe;">Sender Name:</strong> ${name}</p>
            <p style="margin: 4px 0; font-size: 14px;"><strong style="color: #c7d2fe;">Sender Email:</strong> <a href="mailto:${email}" style="color: #38bdf8;">${email}</a></p>
            <p style="margin: 4px 0; font-size: 14px;"><strong style="color: #c7d2fe;">Subject:</strong> ${subject || "General Inquiry"}</p>
          </div>

          <div style="margin-top: 20px; background-color: rgba(255, 255, 255, 0.04); padding: 18px; border-radius: 8px; border-left: 3px solid #6366f1;">
            <h4 style="margin: 0 0 10px 0; color: #a5b4fc; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Message:</h4>
            <p style="white-space: pre-wrap; margin: 0; font-size: 14px; line-height: 1.6; color: #e2e8f0;">${message}</p>
          </div>

          <div style="margin-top: 24px; padding-top: 14px; border-top: 1px solid rgba(255, 255, 255, 0.08); font-size: 11px; color: #64748b; text-align: center;">
            Click 'Reply' in your email client to respond directly to ${email}.
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error: any) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Internal server error." },
      { status: 500 }
    );
  }
}
