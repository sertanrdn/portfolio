'use client'

export default function ContactForm() {
    return (
        <form className="space-y-6">
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="name"
                    className="text-sm font-medium"
                >
                    Name
                </label>
                <input 
                    id="name"
                    type="text"
                    placeholder="Your Full Name"
                    className="rounded-lg border border-border bg-surface px-4 py-2 text-sm
                        text-text placeholder:text-muted
                        focus:outline-none focus:border-accent
                    "
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
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="rounded-lg border border-border bg-surface px-4 py-2 text-sm
                        text-text placeholder:text-muted
                        focus:outline-none focus:border-accent
                    "
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
                    id="message"
                    rows={5}
                    placeholder="Your message..."
                    className="resize-none rounded-lg border border-border bg-surface px-4 py-2 text-sm
                        text-text placeholder:text-muted
                        focus:outline-none focus:border-accent
                    "
                />
            </div>
            <div className="flex justify-center pt-4">
                <button
                    type="submit"
                    className="intro-cta-button inline-flex items-center 
                        justify-center rounded-lg border px-6 py-3 text-sm 
                        font-medium transition hover:shadow-md cursor-pointer
                    "
                >
                    Send Message
                </button>
            </div>
        </form>
    );
}