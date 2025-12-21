'use client'

import Link from "next/link";
import { useActiveSection } from "../hooks/useActiveSection";
import { useState } from "react";
import { X, Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
];

export default function Navbar() {
    // scroll-spy
    const sectionId = navItems.map(i => i.href.slice(1));
    const activeId = useActiveSection(sectionId);
    // hamburger menu states
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(prev => !prev);
    const closeMenu = () => setMenuOpen(false);

    const { theme, toggle: toggleTheme } = useTheme();

    return (
        <header className="fixed top-0 w-full border-b border-zinc-200 bg-zinc-50/80 backdrop-blur dark:border-zinc-800 dark:bg-black/80">
            <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
                <span className="font-bold text-xl">Sertan Erdogan</span>
                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={`text-sm transition ${
                                    activeId === item.href.slice(1)
                                    ? "text-primary dark:text-primary-400"
                                    : "text-zinc-600  hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center gap-4">
                    {/* Theme toggle */}
                    <button
                        type="button"
                        aria-label="Toggle theme"
                        onClick={toggleTheme}
                        className="rounded-md border border-zinc-200 p-2 text-sm dark:border-zinc-800"
                    >
                        {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
                    </button>
                    {/* Hamburger Menu */}
                    <button
                        type="button"
                        aria-label="Toggle menu"
                        onClick={toggleMenu}
                        className="rounded-md border border-zinc-200 p-2 md:hidden dark:border-zinc-800"
                    >
                        {menuOpen ? <X size={20} /> : <Menu size={20}/>}
                    </button>
                </div>
            </nav>
            {/* Mobile Menu */}
            {menuOpen && (
                <div 
                    className="
                        md:hidden border-t border-zinc-200 
                        bg-zinc-50/95 dark:border-zinc-800 
                        dark:bg-black/95 animate-slide-down
                    "
                >
                    <ul className="flex flex-col items-center gap-4 p-4">
                        {navItems.map(item => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`
                                        block text-sm
                                        ${activeId === item.href.slice(1)
                                            ? "text-primary dark:text-primary-400"
                                            : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"}
                                    `}
                                    onClick={closeMenu}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
} 