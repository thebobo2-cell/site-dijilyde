"use client";

import { Phone, Mail, MapPin, Send, User, ChevronRight, MessageSquare, Briefcase } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        setIsSuccess(false);

        const formData = new FormData(e.currentTarget);

        try {
            // ID Formspree mis à jour
            const response = await fetch("https://formspree.io/f/xdaanraa", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setIsSuccess(true);
                (e.target as HTMLFormElement).reset();
            } else {
                setError("Une erreur est survenue lors de l'envoi.");
            }
        } catch (err) {
            setError("Erreur de connexion. Veuillez réessayer.");
        } finally {
            setIsSubmitting(false);
            if (isSuccess) {
                setTimeout(() => setIsSuccess(false), 5000);
            }
        }
    };

    return (
        <section id="contact" className="py-32 bg-secondary text-white relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-20">
                    {/* Contact Info */}
                    <div className="lg:w-5/12">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-primary font-black tracking-[0.3em] text-xs uppercase mb-4 block"
                        >
                            Parlons-en
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-tight"
                        >
                            Contactez Notre Équipe<span className="text-primary">.</span>
                        </motion.h2>

                        <p className="text-white/60 text-lg leading-relaxed mb-12">
                            Que vous ayez un projet de construction en tête ou que vous souhaitiez explorer nos services agricoles et immobiliers, nous sommes à votre écoute.
                        </p>

                        <div className="space-y-8">
                            {[
                                { icon: Phone, label: "Appelez-nous", value: "+243 974 699 621", sub: "Disponible 24h/7" },
                                { icon: Mail, label: "Envoyez un email", value: "ets.dijilyd2@gmail.com", sub: "Réponse sous 24h" },
                                { icon: MapPin, label: "Nos Bureaux", value: "Goma & Bukavu, RDC", sub: "Nord-Kivu et Sud-Kivu" }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-start gap-6 group"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                                        <item.icon className="h-6 w-6 text-primary group-hover:text-secondary transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-white/40 text-xs font-black uppercase tracking-widest mb-1">{item.label}</p>
                                        <p className="text-xl font-bold text-white mb-1">{item.value}</p>
                                        <p className="text-white/30 text-sm">{item.sub}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-7/12"
                    >
                        <div className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl">
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="space-y-8">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-white/50 ml-1">Nom complet</label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/20" />
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-white/20 transition-all outline-none"
                                                placeholder="Jean Dupont"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-white/50 ml-1">Email</label>
                                            <div className="relative">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/20" />
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-white/20 transition-all outline-none"
                                                    placeholder="jean@exemple.com"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="text-xs font-black uppercase tracking-widest text-white/50 ml-1">Téléphone</label>
                                            <div className="relative">
                                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/20" />
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    required
                                                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-white/20 transition-all outline-none"
                                                    placeholder="+243 ..."
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-xs font-black uppercase tracking-widest text-white/50 ml-1">Sujet du projet</label>
                                    <div className="relative">
                                        <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/20" />
                                        <select
                                            id="subject"
                                            name="subject"
                                            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent text-white appearance-none transition-all outline-none [&>option]:bg-secondary"
                                        >
                                            <option value="general">Renseignement Général</option>
                                            <option value="construction">Construction & Matériaux</option>
                                            <option value="agriculture">Agriculture & Elevage</option>
                                            <option value="mode">Mode & Textile</option>
                                            <option value="immobilier">Immobilier & Foncier</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-white/50 ml-1">Votre message</label>
                                    <div className="relative">
                                        <MessageSquare className="absolute left-4 top-6 h-5 w-5 text-white/20" />
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-white/20 transition-all outline-none resize-none"
                                            placeholder="Comment pouvons-nous vous aider ?"
                                        />
                                    </div>
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`w-full group relative flex items-center justify-center px-8 py-5 font-black uppercase tracking-widest rounded-2xl transition-all duration-500 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden ${isSuccess
                                        ? "bg-green-500 text-white scale-[1.02]"
                                        : "bg-primary hover:bg-primary-dark text-secondary hover:shadow-primary/20"
                                        }`}
                                >
                                    <span className="relative z-10 flex flex-col items-center">
                                        <div className="flex items-center gap-3">
                                            {isSubmitting ? "Envoi en cours..." : isSuccess ? "Message envoyé !" : "Envoyer le message"}
                                            <Send className={`h-5 w-5 transition-transform duration-500 ${isSubmitting ? "animate-pulse" : isSuccess ? "rotate-12 scale-110" : "group-hover:translate-x-1 group-hover:-translate-y-1"}`} />
                                        </div>
                                        {error && <span className="text-[10px] text-red-500 mt-1 font-bold">{error}</span>}
                                    </span>
                                    {/* Success Glow Effect */}
                                    {isSuccess && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1.5 }}
                                            className="absolute inset-0 bg-white/20 blur-2xl pointer-events-none"
                                        />
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
