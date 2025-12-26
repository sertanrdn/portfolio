import { introData } from "../data/intro";

export default function Intro() {
    return (
        <section id="intro" className="min-h-[calc(100vh-5rem)] flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
                {/* Layout wrapper */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Image column */}
                    <div className="flex justify-center md:justify-center md:pr-12">
                        {/* Image will go here */}
                        <div className="w-40 h-40 md:w-64 md:h-64 rounded-full bg-gray-200">
                            <img
                                src="/profile.jpeg"
                                alt="Sertan Erdogan"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                    </div>
  
                    {/* Text column */}
                    <div className="text-center md:text-left space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-text">
                            {introData.name}
                        </h1>
                        <h2 className="text-xl md:text-2xl text-muted">
                            {introData.role}
                        </h2>
                        <p className="max-w-xl mx-auto md:mx-0 text-muted leading-relaxed">
                            {introData.description}
                        </p>
                        <a 
                            href={introData.cta.href} 
                            className="
                                inline-flex items-center justify-center
                                mt-6 px-6 py-3 rounded-lg border 
                                border-accent text-accent font-medium
                                transition hover:bg-accent 
                                hover:text-background hover:shadow-md
                            "
                        >
                            {introData.cta.label}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}