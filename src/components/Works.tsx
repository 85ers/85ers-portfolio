"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const works = [
    {
        title: "NEXUS Corp.",
        category: "企業VP",
        period: "2025.01 - 2025.02",
        image: "/works/work-1.png",
    },
    {
        title: "Neon Waves",
        category: "MV制作",
        period: "2024.11 - 2024.12",
        image: "/works/work-2.png",
    },
    {
        title: "ELEVATE",
        category: "プロダクト映像",
        period: "2024.09 - 2024.10",
        image: "/works/work-3.png",
    },
    {
        title: "LIVE RECAP 2024",
        category: "イベント映像",
        period: "2024.07 - 2024.08",
        image: "/works/work-4.png",
    },
    {
        title: "Future VFX",
        category: "3DCG / VFX",
        period: "2024.05 - 2024.06",
        image: "/works/work-5.png",
    },
    {
        title: "Liquid Motion",
        category: "SNS広告",
        period: "2024.03 - 2024.04",
        image: "/works/work-6.png",
    },
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
                    Selected
                </p>
                <h2 className="mt-2 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                    Works
                </h2>
                <div className="mt-4 w-12 h-px bg-[#008080]/40" />
            </motion.div>

            {/* Works Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {works.map((work, index) => (
                    <motion.div
                        key={work.title}
                        className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{
                            duration: 0.7,
                            delay: index * 0.1,
                            ease: "easeOut",
                        }}
                    >
                        {/* Thumbnail */}
                        <Image
                            src={work.image}
                            alt={work.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />

                        {/* Default dark overlay */}
                        <div className="absolute inset-0 bg-black/40 transition-all duration-500 group-hover:bg-black/60" />

                        {/* Teal glow border on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-[#008080]/50 teal-border-glow" />

                        {/* Teal glow sweep effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#008080]/20 via-transparent to-transparent" />
                        </div>

                        {/* Info overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end p-5 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <p className="text-[10px] tracking-[0.3em] uppercase text-[#008080] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                {work.category}
                            </p>
                            <h3 className="mt-1 text-lg font-bold tracking-wide text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                                {work.title}
                            </h3>
                            <p className="mt-1 text-[10px] tracking-[0.15em] text-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                {work.period}
                            </p>
                        </div>

                        {/* Corner accent */}
                        <div className="absolute top-3 right-3 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute top-0 right-0 w-full h-px bg-[#008080]" />
                            <div className="absolute top-0 right-0 w-px h-full bg-[#008080]" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
