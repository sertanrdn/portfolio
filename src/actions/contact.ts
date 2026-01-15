'use server'

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: {
    name: string;
    email: string;
    message: string;
}) {
    try {
        const { name, email, message } = formData;

        await resend.emails.send({
            from: `Portfolio Contact <${process.env.RESEND_FROM_EMAIL}>`,
            to: process.env.CONTACT_RECEIVER_EMAIL!,
            subject: `Portfolio Contact — ${name}`,
            replyTo: email,
            html: `
                <div style="font-family: Arial, sans-serif; background:#f9fafb; padding:24px;">
                    <div style="max-width:600px; margin:auto; background:white; border-radius:8px; padding:24px;">
                        <h2 style="margin-top:0;">📩 New Contact Message</h2>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <hr style="margin:24px 0;" />
                        <p style="white-space:pre-line;">${message}</p>
                        <hr style="margin:24px 0;" />
                        <p style="font-size:12px; color:#6b7280;">
                            Sent from your portfolio contact form.
                        </p>
                    </div>
                </div>
            `,
        });

        return { success: true };
    } catch (error) {
        console.error("Contact email error:", error);
        return { success: false };
    }
}