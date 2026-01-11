"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Award, Globe } from "lucide-react";

const reasons = [
    {
        title: "Qualité Premium",
        description: "Nous ne faisons aucun compromis sur la qualité de nos matériaux et produits.",
        icon: Award,
        color: "text-amber-500",
        bgColor: "bg-amber-500/10",
    },
    {
        title: "Rapidité d'Exécution",
        description: "Des délais respectés pour tous vos projets de construction et livraisons.",
        icon: Zap,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
    },
    {
        title: "Expertise Locale",
        description: "Une connaissance approfondie du marché congolais et de ses spécificités.",
        icon: Globe,
        color: "text-green-500",
        bgColor: "bg-green-500/10",
    },
    {
        title: "Fiabilité Garantie",
        description: "Un partenaire de confiance qui s'engage sur la durée avec ses clients.",
        icon: ShieldCheck,
        color: "text-primary",
        bgColor: "bg-primary/10",
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

export default function WhyChooseUs() {
    return (
        <section className="py-32 bg-white dark:bg-secondary overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-primary font-black tracking-[0.3em] text-xs uppercase mb-4 block"
                    >
                        Nos Valeurs
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-secondary dark:text-white tracking-tight"
                    >
                        Pourquoi Choisir DIJILYD ?
                    </motion.h2>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="p-10 rounded-[2.5rem] bg-gray-50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group border border-gray-100 dark:border-white/10"
                        >
                            <div className={`w-16 h-16 rounded-2xl ${reason.bgColor} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                                <reason.icon className={`h-8 w-8 ${reason.color}`} />
                            </div>
                            <h4 className="text-2xl font-bold text-secondary dark:text-white mb-4 tracking-tight">{reason.title}</h4>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
