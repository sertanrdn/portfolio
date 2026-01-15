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
            subject: `New contact message from ${name}`,
            replyTo: email,
            html: `
                <div style="font-family: sans-serif;">
                    <h2>New Contact Message</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message}</p>
                </div>
            `,
        });

        return { success: true };
    } catch (error) {
        console.error("Contact email error:", error);
        return { success: false };
    }
}