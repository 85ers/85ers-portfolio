"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
    { label: "シネマティックCM", note: "AI生成 × After Effects" },
    { label: "モーショングラフィックス", note: "UI / インフォグラフィックス" },
    { label: "BtoB映像", note: "実写合成 / 3DCG" },
    { label: "MV / カルチャー", note: "キネティックタイポグラフィ" },
];

export default function Works() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

    return (
        <section
            id="works"
            ref={sectionRef}
            className="relative py-32 md:py-44 px-6 md:px-16 lg:px-24"
        >
            {/* Section Header */}
            <motion.div
                className="max-w-6xl mx-auto mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
            >
                <p className="text-[10px] tracking-[0.4em] uppercase text-[#008080]/60">
                    Coming Soon
                </p>
                <h2 className="mt-2 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                    Works
                </h2>
                <div className="mt-4 w-12 h-px bg-[#008080]/40" />
            </motion.div>

            {/* Coming soon message + range preview */}
            <motion.div
                className="max-w-6xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.15 }}
            >
                <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-xl">
                    只今、最初の作品を制作中です。公開まで今しばらくお待ちください。
                </p>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {categories.map((c, index) => (
                        <motion.div
                            key={c.label}
                            className="group relative border border-white/10 hover:border-[#008080]/50 transition-colors duration-500 p-6 aspect-[4/3] flex flex-col justify-end overflow-hidden"
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.7,
                                delay: 0.3 + index * 0.1,
                                ease: "easeOut",
                            }}
                        >
                            {/* Teal glow on hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-[#008080]/10 via-transparent to-transparent" />

                            <p className="text-[10px] tracking-[0.3em] uppercase text-[#008080]/70">
                                Preparing
                            </p>
                            <h3 className="mt-2 text-lg font-bold tracking-wide text-white">
                                {c.label}
                            </h3>
                            <p className="mt-1 text-[11px] text-white/30">{c.note}</p>

                            {/* Corner accent */}
                            <div className="absolute top-3 right-3 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute top-0 right-0 w-full h-px bg-[#008080]" />
                                <div className="absolute top-0 right-0 w-px h-full bg-[#008080]" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
