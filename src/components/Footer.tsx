import Link from "next/link";
import Image from "next/image";
import { navItems } from "../data/navigation";
import { socialLinks } from "../data/socialLinks";

export default function Footer() {
    return (
        <footer className="relative border-t border-border">
            <div className="mx-auto max-w-6xl px-6 py-14">
                <div className="grid gap-10 md:grid-cols-3">
                    <div>
                        <p className="text-lg font-bold text-text">
                            Sertan Erdogan
                        </p>
                        <p className="mt-1 max-w-xs text-sm text-muted leading-relaxed">
                            Full-stack web developer focused on clarity, usability,
                            and sustainable solutions.
                        </p>
                    </div>
                    <ul className="space-y-3">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className="text-sm font-medium 
                                        text-muted hover:text-accent 
                                        transition-colors
                                    "
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ul className="space-y-3">
                        {socialLinks.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.label}
                                    className="
                                        group flex items-center gap-3
                                        text-sm text-muted
                                        transition-colors hover:text-accent
                                    "
                                >
                                    <Image
                                        src={link.icon}
                                        alt={link.label}
                                        width={22}
                                        height={22}
                                        aria-hidden="true"
                                        className={`
                                            transition-transform duration-200
                                            group-hover:scale-110
                                            ${link.invertOnDark ? "dark:invert" : ""}
                                        `}
                                    />
                                    <span>{link.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted">
                    © {new Date().getFullYear()} Sertan Erdogan. All rights reserved.
                </div>
            </div>
        </footer>
    );
}