"use client";

import { motion } from "framer-motion";
import { BrickWall, Wheat, Shirt, Building, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        id: "construction",
        title: "Vente de Matériaux",
        description: "Spécialisé dans la vente de briques et matériaux de construction de haute qualité pour des fondations solides.",
        icon: BrickWall,
        color: "text-accent-construction",
        gradient: "from-accent-construction/20 to-transparent",
        borderColor: "group-hover:border-accent-construction/50",
        href: "/services/construction",
    },
    {
        id: "agriculture",
        title: "Agriculture & Transformation",
        description: "Production agricole durable et transformation de produits vivriers pour une alimentation saine et locale.",
        icon: Wheat,
        color: "text-accent-agriculture",
        gradient: "from-accent-agriculture/20 to-transparent",
        borderColor: "group-hover:border-accent-agriculture/50",
        href: "/services/agriculture",
    },
    {
        id: "mode",
        title: "Vente de Pagnes",
        description: "Une sélection exclusive de pagnes et produits de mode africains alliant tradition et élégance contemporaine.",
        icon: Shirt,
        color: "text-accent-fashion",
        gradient: "from-accent-fashion/20 to-transparent",
        borderColor: "group-hover:border-accent-fashion/50",
        href: "/services/mode",
    },
    {
        id: "immobilier",
        title: "Vente & Location Immobilière",
        description: "Expertise en vente et location de maisons et biens immobiliers. Trouvez le bien qui vous correspond.",
        icon: Building,
        color: "text-accent-realestate",
        gradient: "from-accent-realestate/20 to-transparent",
        borderColor: "group-hover:border-accent-realestate/50",
        href: "/services/immobilier",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const },
    },
};

export default function Services() {
    return (
        <section id="services" className="py-32 bg-white dark:bg-secondary relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-primary font-black tracking-[0.3em] text-xs uppercase mb-4 block"
                    >
                        Expertise & Savoir-faire
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black text-secondary dark:text-white mb-6 tracking-tight"
                    >
                        Nos Domaines d'Activité
                    </motion.h2>
                    <p className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400 text-lg">
                        DIJILYDE excelle dans quatre secteurs clés pour bâtir, nourrir, habiller et loger avec excellence.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={itemVariants}
                            className={`group relative bg-gray-50 dark:bg-white/5 rounded-3xl p-8 border border-gray-100 dark:border-white/10 ${service.borderColor} transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5 shadow-sm overflow-hidden`}
                        >
                            {/* Gradient hover background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-white dark:bg-secondary shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                    <service.icon className={`h-8 w-8 ${service.color}`} />
                                </div>

                                <h4 className="text-2xl font-bold text-secondary dark:text-white mb-4 leading-tight group-hover:text-primary transition-colors">
                                    {service.title}
                                </h4>

                                <p className="text-gray-600 dark:text-gray-400 mb-8 text-sm leading-relaxed">
                                    {service.description}
                                </p>

                                <Link
                                    href={service.href}
                                    className={`inline-flex items-center text-sm font-black uppercase tracking-widest ${service.color} group-hover:translate-x-2 transition-transform duration-300`}
                                >
                                    Explorer <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
