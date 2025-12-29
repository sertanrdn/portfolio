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
    if (!open) return null;

    return (
        <div 
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm md:hidden flex flex-col"
            onClick={onClose}
            aria-hidden="true"
        >
            <div className="flex items-center justify-end p-4">
                <button
                    onClick={onClose}
                    aria-label="Close menu"
                    className="rounded-md p-2 text-muted hover:bg-border/20 transition"
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
    );
}