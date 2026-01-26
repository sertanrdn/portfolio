import ContactForm from "./ContactForm";

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative scroll-mt-20 py-10 md:py-20"
        >
            <div className="mx-auto max-w-3xl px-4">
                <div className="mb-10 text-center">
                    <p className="mb-2 text-sm font-bold tracking-widest uppercase text-accent">
                        Contact
                    </p>
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                        Get In Touch
                    </h2>
                    <p className="mt-4 text-muted">
                        Have a project in mind or just want to say hi?
                        Feel free to reach out.
                    </p>
                </div>
                <ContactForm />
            </div>
        </section>
    );
}