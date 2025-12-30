'use client'

import Link from "next/link";
import { useActiveSection } from "../hooks/useActiveSection";
import { useState, useMemo, useEffect } from "react";
import { X, Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import DrawerMenu from "./DrawerMenu";

const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
];

export default function Navbar() {
    // scroll-spy
    const sectionIds = useMemo(
        () => navItems.map(i => i.href.slice(1)),
        []
    );
    const activeId = useActiveSection(sectionIds);
    // hamburger menu states
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(prev => !prev);
    const closeMenu = () => setMenuOpen(false);

    const { theme, toggle: toggleTheme } = useTheme();

    // Close menu on escape
    useEffect(() => {
        if (!menuOpen) return;
      
        const onKeyDown = (e: KeyboardEvent) => {
          if (e.key === "Escape") {
            setMenuOpen(false);
          }
        };
      
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [menuOpen]);

    // Block scrolling when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        }
    }, [menuOpen]);

    return (
        <header className="fixed top-0 w-full z-30">
            <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 bg-surface/95 backdrop-blur border-b border-border">
                <span className="font-bold text-xl text-text">Sertan Erdogan</span>
                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={`text-sm font-medium transition-colors ${
                                    activeId === item.href.slice(1)
                                    ? "text-accent"
                                    : "text-muted hover:text-accent hover:opacity-80"
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
                        className="rounded-md border border-border p-2 text-text hover:bg-border/40 transition"
                    >
                        {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
                    </button>
                    {/* Hamburger Menu */}
                    <button
                        type="button"
                        aria-label="Toggle menu"
                        onClick={toggleMenu}
                        className="rounded-md border border-border p-2 text-text hover:bg-border/40 md:hidden transition"
                    >
                        {menuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </nav>
            {/* drawer menu */}
            <DrawerMenu
                open={menuOpen}
                onClose={closeMenu}
                items={navItems}
                activeId={activeId}
            />
        </header>
    );
} 