import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations/contact";

// Simple in-memory rate limiting map for edge/serverless requests
const rateLimitMap = new Map<string, { count: number; expiresAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 5; // max 5 submissions per minute per IP

  const record = rateLimitMap.get(ip);
  if (!record || now > record.expiresAt) {
    rateLimitMap.set(ip, { count: 1, expiresAt: now + windowMs });
    return false;
  }

  if (record.count >= maxRequests) {
    return true;
  }

  record.count += 1;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown-ip";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a minute before submitting another enquiry." },
        { status: 429 }
      );
    }

    const body = await req.json();

    // Honeypot spam protection
    if (body.website_honeypot && body.website_honeypot.trim() !== "") {
      // Silently accept bots to waste their time without sending email
      return NextResponse.json({ success: true, message: "Enquiry submitted successfully." });
    }

    // Validate with Zod
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      const issues = validationResult.error.format();
      return NextResponse.json(
        { error: "Invalid form data. Please check all required fields.", details: issues },
        { status: 400 }
      );
    }

    const data = validationResult.data;
    const recipientEmail = process.env.CONTACT_EMAIL || "medibowlinternational@gmail.com";
    const apiKey = process.env.RESEND_API_KEY;

    // Build plain text and HTML email content
    const emailSubject = `[MEDIBOWL RFQ] New ${data.businessType} Enquiry from ${data.companyName} (${data.country})`;
    
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; border: 1px solid #E2E8F0; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #032666; padding: 24px; color: #FFFFFF;">
          <h2 style="margin: 0 0 6px 0; color: #FFFFFF; font-size: 20px;">MEDIBOWL INTERNATIONAL PRIVATE LIMITED</h2>
          <p style="margin: 0; color: #D4AF37; font-size: 13px; font-weight: bold; letter-spacing: 1px;">NEW COMMERCIAL RFQ & ENQUIRY</p>
        </div>
        <div style="padding: 24px; background-color: #FFFFFF;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #172B4D;">
            <tr style="border-bottom: 1px solid #EDF2F7;">
              <td style="padding: 10px 0; font-weight: bold; width: 35%;">Full Name:</td>
              <td style="padding: 10px 0;">${data.fullName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #EDF2F7;">
              <td style="padding: 10px 0; font-weight: bold;">Company Name:</td>
              <td style="padding: 10px 0;">${data.companyName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #EDF2F7;">
              <td style="padding: 10px 0; font-weight: bold;">Country / Market:</td>
              <td style="padding: 10px 0;">${data.country}</td>
            </tr>
            <tr style="border-bottom: 1px solid #EDF2F7;">
              <td style="padding: 10px 0; font-weight: bold;">Business Email:</td>
              <td style="padding: 10px 0;"><a href="mailto:${data.email}">${data.email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #EDF2F7;">
              <td style="padding: 10px 0; font-weight: bold;">Contact / WhatsApp:</td>
              <td style="padding: 10px 0;">${data.phone}</td>
            </tr>
            <tr style="border-bottom: 1px solid #EDF2F7;">
              <td style="padding: 10px 0; font-weight: bold;">Business Type:</td>
              <td style="padding: 10px 0;"><span style="background: #043784; color: #FFFFFF; padding: 2px 8px; border-radius: 4px; font-size: 12px;">${data.businessType}</span></td>
            </tr>
            <tr style="border-bottom: 1px solid #EDF2F7;">
              <td style="padding: 10px 0; font-weight: bold;">Product Category:</td>
              <td style="padding: 10px 0;"><strong>${data.productCategory}</strong></td>
            </tr>
            <tr style="border-bottom: 1px solid #EDF2F7;">
              <td style="padding: 10px 0; font-weight: bold;">Estimated Quantity / Volume:</td>
              <td style="padding: 10px 0;">${data.quantity}</td>
            </tr>
            <tr style="border-bottom: 1px solid #EDF2F7;">
              <td style="padding: 10px 0; font-weight: bold; vertical-align: top;">Requirements:</td>
              <td style="padding: 10px 0; white-space: pre-wrap;">${data.requirements}</td>
            </tr>
            ${
              data.message
                ? `
            <tr>
              <td style="padding: 10px 0; font-weight: bold; vertical-align: top;">Additional Message:</td>
              <td style="padding: 10px 0; white-space: pre-wrap;">${data.message}</td>
            </tr>`
                : ""
            }
          </table>
        </div>
        <div style="background-color: #F7F9FA; padding: 16px 24px; border-top: 1px solid #E2E8F0; font-size: 12px; color: #5E6C84;">
          Submitted via www.medibowlinternational.com • IP: ${ip} • ${new Date().toISOString()}
        </div>
      </div>
    `;

    // Production Resend delivery if key is configured
    if (apiKey && apiKey !== "your_resend_api_key_here" && !apiKey.startsWith("re_123456789")) {
      const resend = new Resend(apiKey);
      const { data: resendData, error: resendError } = await resend.emails.send({
        from: "Medibowl RFQ Portal <enquiries@medibowlinternational.com>",
        to: [recipientEmail],
        replyTo: data.email,
        subject: emailSubject,
        html: emailHtml,
      });

      if (resendError) {
        console.error("Resend API delivery error:", resendError);
        return NextResponse.json(
          { error: "Failed to dispatch email notification. Please contact us directly at medibowlinternational@gmail.com." },
          { status: 502 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Thank you! Your quotation request has been received. Our team will review your specifications and contact you shortly.",
        messageId: resendData?.id
      });
    }

    // Development / unconfigured fallback: log safely and confirm submission
    console.log("[DEV MODE - RESEND_API_KEY unconfigured] Simulated Email Delivery:", {
      to: recipientEmail,
      subject: emailSubject,
      from: data.email,
      businessType: data.businessType,
      category: data.productCategory
    });

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been successfully logged. Our procurement team will review your requirements and respond within 24 hours.",
      mode: "development_simulated"
    });
  } catch (error: unknown) {
    console.error("Unexpected error in /api/contact:", error);
    return NextResponse.json(
      { error: "An unexpected server error occurred while processing your request. Please try again or reach us via WhatsApp." },
      { status: 500 }
    );
  }
}

