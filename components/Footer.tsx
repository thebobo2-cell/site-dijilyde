"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-secondary text-white pt-32 pb-12 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    {/* Logo & Description */}
                    <div className="space-y-8">
                        <Link href="/" className="group flex items-center gap-3">
                            <div className="relative w-11 h-11 overflow-hidden rounded-xl bg-white shadow-[0_4px_15px_-5px_rgba(0,0,0,0.1)] ring-1 ring-black/[0.03] transition-all duration-300">
                                <Image
                                    src="/logo.png"
                                    alt="DIJILYD Logo"
                                    fill
                                    className="object-contain p-1.5 group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <span className="text-2xl font-black font-outfit tracking-tight">
                                DIJI<span className="text-primary">LYDE</span>
                            </span>
                        </Link>
                        <p className="text-white/50 leading-relaxed max-w-xs text-sm">
                            Votre partenaire stratégique pour des projets d'envergure. Excellence, innovation et intégrité au cœur de chaque action.
                        </p>
                        <div className="flex space-x-3">
                            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-all duration-300 hover:-translate-y-1">
                                    <Icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-8">Navigation</h4>
                        <ul className="space-y-4">
                            {[
                                { name: "Accueil", href: "/" },
                                { name: "Construction", href: "/services/construction" },
                                { name: "Agriculture", href: "/services/agriculture" },
                                { name: "Mode africaine", href: "/services/mode" },
                                { name: "Immobilier", href: "/services/immobilier" }
                            ].map((link, i) => (
                                <li key={i}>
                                    <Link href={link.href} className="text-white/60 hover:text-white transition-colors text-sm font-medium flex items-center group">
                                        <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-8">Nous Contacter</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="h-4 w-4 text-primary" />
                                </div>
                                <div className="text-sm">
                                    <p className="font-bold mb-1">Siège social</p>
                                    <p className="text-white/50">Goma & Bukavu, RDC</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                                    <Phone className="h-4 w-4 text-primary" />
                                </div>
                                <div className="text-sm">
                                    <p className="font-bold mb-1">Téléphone</p>
                                    <p className="text-white/50">+243 974 699 621</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                                    <Mail className="h-4 w-4 text-primary" />
                                </div>
                                <div className="text-sm">
                                    <p className="font-bold mb-1">Support Email</p>
                                    <p className="text-white/50">contact@dijilyd.com</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-8">Newsletter</h4>
                        <p className="text-white/50 mb-6 text-sm">
                            Recevez nos opportunités d'investissement en priorité.
                        </p>
                        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="votre@email.com"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:ring-1 focus:ring-primary transition-all text-sm"
                            />
                            <button className="w-full bg-primary hover:bg-primary-dark text-secondary font-black uppercase tracking-widest py-4 rounded-xl transition-all text-xs shadow-lg shadow-primary/10 hover:shadow-primary/20">
                                S'abonner
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.2em]">
                        &copy; {currentYear} DIJILYD. TOUS DROITS RÉSERVÉS.
                    </p>
                    <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
                        <Link href="#" className="hover:text-primary transition-colors">Confidentialité</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
