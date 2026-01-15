'use client'

import { useState } from "react";
import { sendContactEmail } from "../actions/contact";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<FormStatus>("idle");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setStatus("loading");

        const result = await sendContactEmail({ name, email, message });

        if (result.success) {
            setStatus("success");
            setName("");
            setEmail("");
            setMessage("");
        } else {
            setStatus("error");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="name"
                    className="text-sm font-medium"
                >
                    Name
                </label>
                <input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    type="text"
                    placeholder="Your Full Name"
                    className="rounded-lg border border-border bg-surface px-4 py-2 text-sm
                        text-text placeholder:text-muted
                        focus:outline-none focus:border-accent
                    "
                    required
                />
            </div>
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="email"
                    className="text-sm font-medium"
                >
                    Email
                </label>
                <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="rounded-lg border border-border bg-surface px-4 py-2 text-sm
                        text-text placeholder:text-muted
                        focus:outline-none focus:border-accent
                    "
                    required
                />
            </div>
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="message"
                    className="text-sm font-medium"
                >
                    Message
                </label>
                <textarea 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    id="message"
                    rows={5}
                    placeholder="Your message..."
                    className="resize-none rounded-lg border border-border bg-surface px-4 py-2 text-sm
                        text-text placeholder:text-muted
                        focus:outline-none focus:border-accent
                    "
                    required
                />
            </div>
            {status === "success" && (
                <p className="text-sm text-green-600 text-center">
                    Message sent successfully!
                </p>
            )}

            {status === "error" && (
                <p className="text-sm text-red-600 text-center">
                    Something went wrong. Please try again.
                </p>
            )}
            <div className="flex justify-center pt-4">
                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="intro-cta-button inline-flex items-center 
                        justify-center rounded-lg border px-6 py-3 text-sm 
                        font-medium transition hover:shadow-md cursor-pointer
                        disabled:opacity-50 disabled:cursor-not-allowed
                    "
                >
                    {status === "loading" ? "Sending..." : "Send Message"}
                </button>
            </div>
        </form>
    );
}