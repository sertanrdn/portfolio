import ContactForm from "./ContactForm";

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative scroll-mt-24 py-10 md:py-20"
        >
            <div className="mx-auto max-w-3xl px-4">
                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                        Contact
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                        Have a project in mind or just want to say hi?
                        Feel free to reach out.
                    </p>
                </div>
                <ContactForm />
            </div>
        </section>
    );
}