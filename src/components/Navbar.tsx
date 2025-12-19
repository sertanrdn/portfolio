'use client'

import Link from "next/link";

const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
];

export default function Navbar() {
    return (
        <header className="fixed top-0 w-full border-b border-zinc-200 bg-zinc-50/80 backdrop-blur dark:border-zinc-800 dark:bg-black/80">
            <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
                <span className="font-bold text-xl">Sertan Erdogan</span>
                <ul className="item-center gap-6 flex">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className="text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                {/* Right Side (Theme toggle later) */}
                <div className="flex items-center gap-4">
                    <button
                        type="button"
                        aria-label="Toggle theme"
                        className="rounded-md border border-zinc-200 p-2 text-sm dark:border-zinc-800"
                    >
                        🌙
                    </button>
                </div>
            </nav>
        </header>
    );
}