'use client'

import Link from "next/link";
import { X } from "lucide-react";

interface DrawerMenuProps {
    open: boolean;
    onClose: () => void;
    items: { label: string; href: string }[];
    activeId: string | null;
}

export default function DrawerMenu({ open, onClose, items, activeId }: DrawerMenuProps) {
    return (
        <div
            className={`fixed inset-0 z-50 md:hidden
                ${open ? "pointer-events-auto" : "pointer-events-none"}
            `}
        >
            {/* Backdrop */}
            <div 
                className={`absolute inset-0 bg-background/95 backdrop-blur-sm
                    transition-opacity duration-500
                    ${open ? "opacity-100" : "opacity-0"}
                `}
                onClick={onClose}
            />
            {/* Menu */}
            <div
            className={`relative h-full flex flex-col transform 
                transition-all duration-800 ease-in-out
                ${open ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"}
            `}
            >
            <div className="flex items-center justify-end p-4">
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close menu"
                    className="rounded-md p-2 text-muted hover:bg-border/20 transition cursor-pointer"
                >
                    <X size={24} />
                </button>
            </div>    
                {/* navigation links */}
                <nav className="flex-1 flex flex-col items-center justify-center gap-6">
                    {items.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`
                                block rounded-md px-3 py-2 text-sm font-medium
                                transition-colors
                                ${activeId === item.href.slice(1)
                                    ? "text-accent bg-accent/10"
                                    : "text-muted hover:text-accent hover:bg-accent/5"
                                }`}
                            onClick={onClose}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
}