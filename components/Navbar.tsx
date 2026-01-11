"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Construction", href: "/services/construction" },
    { name: "Agriculture", href: "/services/agriculture" },
    { name: "Mode", href: "/services/mode" },
    { name: "Immobilier", href: "/services/immobilier" },
    { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100/50 dark:bg-secondary/70 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="group flex items-center gap-3.5">
                            <div className="relative w-11 h-11 overflow-hidden rounded-xl bg-white shadow-[0_4px_15px_-5px_rgba(0,0,0,0.1)] ring-1 ring-black/[0.03] group-hover:shadow-[0_8px_25px_-5px_rgba(212,175,55,0.3)] group-hover:ring-primary/20 transition-all duration-500">
                                <Image
                                    src="/logo.png"
                                    alt="DIJILYDE Logo"
                                    fill
                                    className="object-contain p-1.5 group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-black font-outfit text-secondary dark:text-white tracking-tighter leading-none">
                                    DIJI<span className="text-primary">LYDE</span>
                                </span>
                                <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] leading-none mt-1">Group</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-secondary/80 dark:text-white/80 hover:text-primary dark:hover:text-primary transition-all duration-300 font-medium text-sm uppercase tracking-widest relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                        <Link
                            href="/#contact"
                            className="bg-secondary text-white dark:bg-primary dark:text-secondary px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider hover:scale-105 transition-transform duration-300 shadow-lg"
                        >
                            Devis Gratuit
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-secondary dark:text-white p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-colors focus:outline-none"
                        >
                            {isOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-secondary hover:text-primary hover:bg-gray-50 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
