"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Profile() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            id="profile"
            ref={sectionRef}
            className="relative min-h-screen flex items-center py-32 md:py-44 px-6 md:px-16 lg:px-24"
        >
            {/* Section Label */}
            <motion.div
                className="absolute top-16 left-6 md:left-16"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
            >
                <p className="text-[10px] tracking-[0.4em] uppercase text-[#008080]/60">
                    About
                </p>
                <p className="text-xs tracking-[0.2em] uppercase text-white/30 mt-1">
                    Profile
                </p>
            </motion.div>

            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 lg:gap-28 items-center">
                {/* Portrait Photo - top cropped to center the subject */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className="relative aspect-[3/4] w-full max-w-md mx-auto md:mx-0 overflow-hidden">
                        <Image
                            src="/profile.jpg"
                            alt="YUTO - 85ers"
                            fill
                            className="object-cover object-[center_25%] grayscale hover:grayscale-0 transition-all duration-1000"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                        {/* Teal accent border */}
                        <motion.div
                            className="absolute -bottom-3 -right-3 w-full h-full border border-[#008080]/20"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.5, duration: 1 }}
                        />
                    </div>
                </motion.div>

                {/* Biography */}
                <motion.div
                    className="space-y-8"
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                >
                    <div>
                        <motion.h2
                            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[0.15em]"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            <span className="teal-glow-sm text-[#008080]">YUTO</span>
                        </motion.h2>
                        <motion.p
                            className="mt-2 text-[11px] tracking-[0.3em] uppercase text-white/30"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.7, duration: 0.8 }}
                        >
                            Video Production Unit — 85ers
                        </motion.p>
                    </div>

                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.9, duration: 0.8 }}
                    >
                        <p className="text-sm md:text-base leading-[2] text-white/70 tracking-wide">
                            東京都目黒区を拠点に活動。
                            <br />
                            After Effects、3DCG、VFXを駆使し、
                            <br />
                            お客様の課題に誠実に寄り添う映像制作を。
                        </p>
                        <p className="text-sm md:text-base leading-[2] text-white/70 tracking-wide">
                            企画から納品まで一貫した品質をお約束します。
                        </p>
                    </motion.div>

                    <motion.div
                        className="pt-4 border-t border-white/10 space-y-3"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 1.1, duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4">
                            <span className="text-[10px] tracking-[0.3em] uppercase text-white/30 w-20">
                                Location
                            </span>
                            <span className="text-xs text-white/60">東京都目黒区</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-[10px] tracking-[0.3em] uppercase text-white/30 w-20">
                                Skills
                            </span>
                            <span className="text-xs text-white/60">
                                After Effects / 3DCG / VFX / Motion Graphics
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-[10px] tracking-[0.3em] uppercase text-white/30 w-20">
                                Service
                            </span>
                            <span className="text-xs text-white/60">
                                企画 / 編集 / CG制作
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
