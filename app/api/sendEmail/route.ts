import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    const data = await req.json();

    if (!data) {
      return NextResponse.json(
        { message: "No data provided" },
        { status: 400 }
      );
    }

    const { firstName, lastName, email, phone, message } = data.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const currentYear = new Date().getFullYear();

    try {
      await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_TO,
        subject: `Contact form submission from ${firstName} ${lastName}`,
        text: message,
        html: `
        <div style="max-width:600px; margin: 0 auto; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; border:1px solid #e0e0e0; border-radius:8px; overflow:hidden;">
          <!-- Header -->
          <div style="background-color:#003366; padding:20px; text-align:center;">
            <h1 style="color:#fff; margin:0; font-size:24px;">Addis Path Trailer Rentals</h1>
          </div>
          <!-- Body -->
          <div style="padding:20px; background-color:#fff;">
            <h2 style="color:#003366; font-size:20px; margin-top:0;">New Contact Form Submission</h2>
            <p style="font-size:16px; color:#555;">You have received a new contact form submission. Details are provided below:</p>
            <table style="width:100%; border-collapse:collapse; margin-top:20px;">
              <tr>
                <td style="padding:8px; border:1px solid #e0e0e0; background-color:#f9f9f9; width:30%;"><strong>Name</strong></td>
                <td style="padding:8px; border:1px solid #e0e0e0;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding:8px; border:1px solid #e0e0e0; background-color:#f9f9f9;"><strong>Email</strong></td>
                <td style="padding:8px; border:1px solid #e0e0e0;">${email}</td>
              </tr>
              <tr>
                <td style="padding:8px; border:1px solid #e0e0e0; background-color:#f9f9f9;"><strong>Phone</strong></td>
                <td style="padding:8px; border:1px solid #e0e0e0;">${phone}</td>
              </tr>
              <tr>
                <td style="padding:8px; border:1px solid #e0e0e0; background-color:#f9f9f9;"><strong>Message</strong></td>
                <td style="padding:8px; border:1px solid #e0e0e0;">${message}</td>
              </tr>
            </table>
            <p style="margin-top:20px; font-size:14px; color:#777;">
              This email was sent automatically from the Addis Path Trailer Rentals website contact form.
            </p>
          </div>
          <!-- Footer -->
          <div style="background-color:#f0f0f0; padding:10px; text-align:center; font-size:12px; color:#777;">
            <p style="margin:0;">© ${currentYear} Addis Path Trailer Rentals. All rights reserved.</p>
          </div>
        </div>
      `,
      });

      return NextResponse.json({ message: "Email sent" }, { status: 200 });
    } catch (error) {
      return NextResponse.json(
        { message: "Error sending email" },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json(
      { message: "Method not allowed" },
      { status: 405 }
    );
  }
}
