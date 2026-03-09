"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback } from "react";

export default function Contact() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleContactClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setIsTransitioning(true);
        setTimeout(() => {
            window.open("https://forms.gle/mxucbJBfzUWBCBbb8", "_blank", "noopener,noreferrer");
            setTimeout(() => setIsTransitioning(false), 600);
        }, 700);
    }, []);

    return (
        <>
            <section
                id="contact"
                ref={sectionRef}
                className="relative py-32 md:py-44 px-6 md:px-16 lg:px-24 min-h-[70vh] flex items-center"
            >
                <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                    {/* Left: Giant Typography */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h2 className="text-6xl md:text-7xl lg:text-[8rem] font-black tracking-tighter leading-none text-white/[0.07]">
                            CON
                            <br />
                            TACT
                        </h2>
                    </motion.div>

                    {/* Right: CTA */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: 60 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    >
                        <div className="space-y-4">
                            <motion.h3
                                className="text-2xl md:text-3xl font-bold tracking-tight"
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : {}}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            >
                                映像制作の
                                <span className="text-[#008080] teal-glow-sm">ご相談</span>
                                はこちら
                            </motion.h3>
                            <motion.p
                                className="text-sm text-white/40 leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : {}}
                                transition={{ delay: 0.7, duration: 0.8 }}
                            >
                                プロジェクトの規模やジャンルを問わず、まずはお気軽にご相談ください。
                                <br />
                                企画段階からのご相談も承っております。
                            </motion.p>
                        </div>

                        {/* Response time notice */}
                        <motion.div
                            className="flex items-center gap-3"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.9, duration: 0.8 }}
                        >
                            <div className="w-2 h-2 rounded-full bg-[#008080] animate-pulse" />
                            <p className="text-xs tracking-wide text-white/50">
                                通常2営業日以内に返信いたします
                            </p>
                        </motion.div>

                        {/* CTA Button */}
                        <motion.a
                            href="https://forms.gle/mxucbJBfzUWBCBbb8"
                            onClick={handleContactClick}
                            className="group inline-flex items-center gap-3 px-10 py-5 bg-[#008080] hover:bg-[#00b3b3] text-white font-semibold tracking-wide transition-all duration-500 teal-box-glow hover:shadow-[0_0_40px_rgba(0,128,128,0.5)] cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 1.1, duration: 0.8 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="text-sm md:text-base">
                                制作のご相談を送る（Googleフォーム）
                            </span>
                            <svg
                                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            {/* Page transition overlay */}
            <AnimatePresence>
                {isTransitioning && (
                    <motion.div
                        className="fixed inset-0 z-[9999] bg-[#060606]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                    />
                )}
            </AnimatePresence>
        </>
    );
}
