export default function About() {
    return (
        <section id="about" className="relative scroll-mt-24 py-10 md:py-20">
            {/* Subtle background layer */}
            <div
                aria-hidden
                className="absolute inset-0 -z-10"
            />
            <div className="mx-auto max-w-6xl px-6">
                {/* Section label */}
                <p className="mb-10 text-sm font-bold tracking-widest text-accent uppercase opacity-80">
                    About Me
                </p>
                <div className="grid gap-12 md:grid-cols-2 md:gap-16">
                    {/* Column 1 */}
                    <div className="space-y-6 max-w-prose text-base leading-relaxed text-muted md:text-lg">
                        <p>
                            I’m a full-stack web developer based in the Netherlands who enjoys 
                            turning real-world problems into practical, working solutions using 
                            modern web technologies. I value simplicity, sustainability, and clarity 
                            in the things I build, and I care deeply about creating experiences that 
                            feel intuitive and thoughtful for users.
                        </p>
                        <p>
                            My main focus is on building web applications with a strong emphasis
                            on user experience, maintainable code, and clear structure. I enjoy
                            keeping up with evolving trends in web development, not just to
                            follow them, but to understand when and why they make sense to use.
                        </p>
                    </div>
                    {/* Column 2 */}
                    <div className="space-y-6 max-w-prose text-base leading-relaxed text-muted md:text-lg">
                        <p>
                            Outside of coding, I enjoy outdoor hiking, solving Sudoku puzzles,
                            cinema, and exploring geography. These interests help me stay
                            curious and influence how I approach problem-solving and
                            storytelling in my work.
                        </p>
                        <p>
                            I’m also interested in expanding my skill set by exploring Python 
                            and AI-driven solutions, while continuing to sharpen my current 
                            tech stack by learning new frameworks and libraries.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}