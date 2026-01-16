'use server'

import { Resend } from "resend";

// Required environment variables:
// - RESEND_API_KEY: API key used to authenticate with Resend.
// - RESEND_FROM_EMAIL: The verified sender email address used in the "from" field.
// - CONTACT_RECEIVER_EMAIL: The email address that will receive contact form submissions.

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(input: string) {
    return input
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export async function sendContactEmail(formData: {
    name: string;
    email: string;
    message: string;
}) {
    try {
        const name = formData.name.trim();
        const email = formData.email.trim();
        const message = formData.message.trim();

        if (!name || !email || !message) {
            return { success: false };
        }

        if (name.length > 100 || message.length > 2000) {
            return { success: false };
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email) || /[\r\n]/.test(email)) {
            return { success: false };
        }

        await resend.emails.send({
            from: `Portfolio Contact <${process.env.RESEND_FROM_EMAIL}>`,
            to: process.env.CONTACT_RECEIVER_EMAIL!,
            subject: `Portfolio Contact — ${name.replace(/[\r\n]/g, "")}`,
            replyTo: email,
            html: `
                <div style="font-family: Arial, sans-serif; background:#f9fafb; padding:24px;">
                    <div style="max-width:600px; margin:auto; background:white; border-radius:8px; padding:24px;">
                        <h2 style="margin-top:0;">📩 New Contact Message</h2>
                        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                        <hr style="margin:24px 0;" />
                        <p style="white-space:pre-line;">${escapeHtml(message)}</p>
                        <hr style="margin:24px 0;" />
                        <p style="font-size:12px; color:#6b7280;">
                            Sent from your portfolio contact form.
                        </p>
                    </div>
                </div>
            `,
        });

        return { success: true };
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        console.error("Contact email error:", errorMessage);
        return { success: false };
    }
}