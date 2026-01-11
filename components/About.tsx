"use client";

import { CheckCircle, Users, Target, Shield } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    const values = [
        { text: "Qualité supérieure et durabilité", icon: Shield },
        { text: "Innovation constante", icon: Target },
        { text: "Service client personnalisé", icon: Users },
        { text: "Engagement communautaire", icon: CheckCircle },
    ];

    return (
        <section id="about" className="py-32 bg-gray-50 dark:bg-secondary/50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] bg-gray-200 group">
                            <Image
                                src="/images/realestate.jpg"
                                alt="DIJILYD Vision"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />

                            {/* Floating Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="absolute bottom-10 left-10 right-10 p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 text-white"
                            >
                                <p className="text-3xl font-black mb-1">10+</p>
                                <p className="text-sm font-medium opacity-80 uppercase tracking-widest">Années d'Excellence</p>
                            </motion.div>
                        </div>

                        {/* Background Decor */}
                        <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute -z-10 -bottom-10 -right-10 w-full h-full border-2 border-primary/20 rounded-[2rem]" />
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <span className="text-primary font-black tracking-[0.3em] text-xs uppercase mb-4 block">Notre Histoire</span>
                        <h2 className="text-4xl md:text-5xl font-black text-secondary dark:text-white mb-8 tracking-tight leading-tight">
                            DIJILYD : L'Excellence au Service de Votre Quotidien
                        </h2>

                        <div className="space-y-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10">
                            <p>
                                Fondée avec la vision de transformer les secteurs clés de l'économie locale, <span className="text-secondary dark:text-white font-bold">DIJILYD</span> est devenue une référence incontournable.
                            </p>
                            <p>
                                Notre force réside dans notre diversité et notre capacité à offrir des solutions intégrées, que ce soit pour bâtir votre maison, vous nourrir sainement, ou vous habiller avec élégance. Nous croyons en un avenir où qualité rime avec accessibilité.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {values.map((value, index) => (
                                <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <value.icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <span className="text-secondary dark:text-white font-bold text-sm leading-tight">{value.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
