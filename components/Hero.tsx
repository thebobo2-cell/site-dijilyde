"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-secondary">
            {/* Background Image with Premium Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/construction.jpg"
                    alt="DIJILYDE Background"
                    fill
                    className="object-cover scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/70 to-secondary/90 backdrop-blur-[2px]" />
            </div>

            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] animate-pulse" />
                <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] rounded-full bg-primary-light/10 blur-[100px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-primary animate-ping" />
                        <span className="text-white/80 text-xs font-bold uppercase tracking-[0.2em]">Excellence & Innovation</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
                        BÂTIR VOTRE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-primary">AVENIR</span>
                        <span className="text-primary">.</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/70 mb-12 leading-relaxed font-medium">
                        Votre partenaire de confiance en <span className="text-white font-bold">Construction</span>,
                        <span className="text-white font-bold"> Agriculture</span>,
                        <span className="text-white font-bold"> Mode africaine</span> et
                        <span className="text-white font-bold"> Immobilier</span> de luxe.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <Link
                            href="#contact"
                            className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-300 bg-primary rounded-full hover:bg-primary-dark shadow-[0_10px_40px_-10px_rgba(212,175,55,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(212,175,55,0.7)] transform hover:-translate-y-1 overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center">
                                Commencer un projet
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>

                        <Link
                            href="#services"
                            className="group flex items-center gap-4 text-white font-bold py-3 px-6 rounded-full hover:bg-white/5 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary transition-colors">
                                <Play className="h-4 w-4 fill-white group-hover:fill-primary group-hover:text-primary transition-all" />
                            </div>
                            <span>Découvrir nos services</span>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
                <span className="text-[10px] text-white/30 uppercase tracking-[0.3em] vertical-rl">Scroll</span>
            </motion.div>
        </section>
    );
}
