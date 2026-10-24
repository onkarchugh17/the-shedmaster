import { NextResponse } from "next/server";

interface ContactRequestBody {
  name: string;
  phone: string;
  email: string;
  service: string;
  location?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactRequestBody = await request.json();

    // Basic server-side validation
    if (!body.name || typeof body.name !== "string" || body.name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    if (!body.phone || typeof body.phone !== "string" || body.phone.trim().length < 10) {
      return NextResponse.json(
        { error: "Please provide a valid 10-digit phone number." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!body.email || !emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!body.service || typeof body.service !== "string") {
      return NextResponse.json(
        { error: "Please select a service." },
        { status: 400 }
      );
    }

    // In a production environment with email SMTP or CRM webhook (e.g., SendGrid, Resend, Nodemailer),
    // you would dispatch an email notification here using server environment variables.
    // For now, log sanitized payload securely.
    const sanitizedSubmission = {
      name: body.name.trim(),
      phone: body.phone.trim(),
      email: body.email.trim().toLowerCase(),
      service: body.service,
      location: body.location ? body.location.trim() : "Not specified",
      message: body.message ? body.message.trim() : "No additional details",
      submittedAt: new Date().toISOString(),
    };

    console.log("[New Lead Received - The Shed Master]:", sanitizedSubmission);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for contacting The Shed Master! Owner Kaushal and our engineering team will get in touch with you shortly.",
        data: {
          leadId: `TSM-${Date.now().toString().slice(-6)}`,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while submitting your enquiry. Please call us directly at 9211050139." },
      { status: 500 }
    );
  }
}
