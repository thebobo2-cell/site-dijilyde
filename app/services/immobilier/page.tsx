"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ImmobilierPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-secondary">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[65vh] flex items-center justify-center overflow-hidden bg-secondary">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/realestate.jpg"
                        alt="Immobilier DIJILYDE"
                        fill
                        className="object-cover scale-110"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/70 to-secondary/90 backdrop-blur-[2px]" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative z-10 text-center text-white px-4 pt-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-accent-realestate animate-pulse" />
                        <span className="text-white/80 text-[10px] font-black uppercase tracking-[0.2em]">Secteur Immobilier</span>
                    </motion.div>
                    <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-[0.9]">Vivre & <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-realestate to-primary-light">Investir</span></h1>
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto text-white/70 font-medium">
                        Trouvez le lieu idéal pour vivre ou bâtir votre patrimoine.
                    </p>
                </motion.div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-accent-realestate font-black tracking-[0.3em] text-xs uppercase mb-4 block">Notre Expertise</span>
                        <h3 className="text-4xl md:text-5xl font-black text-secondary dark:text-white mb-8 tracking-tight leading-tight">
                            Solutions Foncières <br />& Immobilières
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg leading-relaxed">
                            Nous vous accompagnons dans tous vos projets immobiliers. Que vous cherchiez votre résidence principale ou un investissement rentable, DIJILYDE est votre partenaire stratégique.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                            {[
                                "Vente Maisons & Villas",
                                "Appartements de luxe",
                                "Terrains & Parcelles",
                                "Gestion de patrimoine",
                                "Conseil en investissement",
                                "Courtage immobilier"
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-sm"
                                >
                                    <div className="w-6 h-6 rounded-full bg-accent-realestate/10 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="h-4 w-4 text-accent-realestate" />
                                    </div>
                                    <span className="text-secondary dark:text-white font-bold text-sm">{item}</span>
                                </motion.div>
                            ))}
                        </div>

                        <Link
                            href="/#contact"
                            className="inline-flex items-center px-8 py-4 bg-accent-realestate text-white font-black uppercase tracking-widest rounded-2xl hover:bg-opacity-90 transition-all shadow-[0_10px_30px_-10px_rgba(41,128,185,0.5)] hover:shadow-[0_20px_30px_-10px_rgba(41,128,185,0.7)] hover:-translate-y-1"
                        >
                            Consulter nos offres
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative h-96 rounded-2xl overflow-hidden shadow-xl bg-gray-200"
                    >
                        <Image
                            src="/images/realestate.jpg"
                            alt="Maison moderne"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <Link href="/" className="inline-flex items-center text-gray-500 hover:text-primary transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Retour à l'accueil
                </Link>
            </div>

            <Footer />
        </main>
    );
}
