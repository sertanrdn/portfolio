import Link from "next/link";
import Image from "next/image";
import { navItems } from "../data/navigation";
import { socialLinks } from "../data/socialLinks";

export default function Footer() {
    return (
        <footer className="relative border-t border-border">
            <div className="mx-auto max-w-6xl px-6 py-14">
                <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-lg font-bold text-text">
                            Sertan Erdogan
                        </p>
                        <p className="mt-1 max-w-xs text-sm text-muted">
                            Full-stack web developer focused on clarity, usability,
                            and sustainable solutions.
                        </p>
                    </div>
                    <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium text-muted hover:text-accent transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex justify-center gap-4">
                        {socialLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                aria-label={link.label}
                                className="
                                    group flex h-9 w-9 items-center justify-center
                                    rounded-md border border-border
                                    transition-all hover:-translate-y-0.5
                                    hover:border-accent/40
                                    hover:shadow-md hover:shadow-accent/10
                                "
                            >
                                <Image
                                    src={link.icon}
                                    alt=""
                                    width={18}
                                    height={18}
                                    aria-hidden="true"
                                    className={`
                                        transition-transform duration-200
                                        group-hover:scale-110
                                        ${link.invertOnDark ? "dark:invert" : ""}
                                    `}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted">
                    © {new Date().getFullYear()} Sertan Erdogan. All rights reserved.
                </div>
            </div>
        </footer>
    );
}