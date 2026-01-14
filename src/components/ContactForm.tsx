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
                    className="rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
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
                    className="rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
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
                    className="resize-none rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>
            <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 font-medium text-primary-foreground transition hover:opacity-90"
            >
                Send Message
            </button>
        </form>
    );
}