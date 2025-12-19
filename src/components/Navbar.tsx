'use client'

import Link from "next/link";

export default function Navbar() {
    return (
        <header className="fixed top-0 w-full bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 z-50">
            <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <span className="font-bold text-lg">Sertan Erdogan</span>
                <ul className="flex gap-6 text-sm">
                    <li>
                        <Link href="#about">About</Link>
                    </li>
                    <li>
                        <Link href="#projects">Projects</Link>
                    </li>
                    <li>
                        <Link href="#skills">Skills</Link>
                    </li>
                    <li>
                        <Link href="#contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}