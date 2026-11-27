"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Process() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    return (
        <section
            id="process"
            ref={sectionRef}
            className="relative py-32 md:py-48 px-6 md:px-16 lg:px-24 overflow-hidden"
        >
            {/* Section Header */}
            <motion.div
                className="max-w-6xl mx-auto mb-16 md:mb-24"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
            >
                <p className="text-[10px] tracking-[0.4em] uppercase text-[#008080]/60">
                    Workflow
                </p>
                <h2 className="mt-2 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                    Process
                </h2>
                <div className="mt-4 w-12 h-px bg-[#008080]/40" />
                <p className="mt-6 text-sm text-white/40 max-w-lg leading-relaxed">
                    工程の区切りで途中の状態を共有しながら進めます。
                </p>
            </motion.div>

            {/* Process Flow Image with Parallax */}
            <motion.div
                className="max-w-5xl mx-auto"
                style={{ y, opacity }}
            >
                <motion.div
                    className="relative w-full aspect-square md:aspect-[16/9] overflow-hidden rounded-sm"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                >
                    <Image
                        src="/process-flow.png"
                        alt="制作フロー - ヒアリング → 企画・構成 → 制作 → 確認・修正 → 納品"
                        fill
                        className="object-contain"
                        sizes="100vw"
                    />
                    {/* Ambient glow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-transparent to-[#060606] opacity-30" />
                </motion.div>
            </motion.div>

            {/* Bottom detail steps */}
            <motion.div
                className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                {[
                    { step: "01", title: "HEARING", desc: "ヒアリング", detail: "目的・尺・素材の有無・ご希望の日程を伺います" },
                    { step: "02", title: "PLANNING", desc: "企画・構成", detail: "構成案と粗い動き（プリビズ）をご確認いただき合意してから本制作に入ります" },
                    { step: "03", title: "PRODUCTION", desc: "制作", detail: "3DCG・モーション・編集を進めながら区切りごとに途中の状態を共有します" },
                    { step: "04", title: "REVIEW", desc: "確認・修正", detail: "修正は工程ごとに区切って確認します" },
                    { step: "05", title: "DELIVERY", desc: "納品", detail: "ご指定の解像度と比率で書き出して納品します" },
                ].map((item, i) => (
                    <motion.div
                        key={item.step}
                        className="text-center group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                    >
                        <span className="text-[10px] tracking-[0.2em] text-[#008080]/50">
                            {item.step}
                        </span>
                        <p className="mt-1 text-xs font-semibold tracking-wider text-white/70 group-hover:text-[#008080] transition-colors duration-300">
                            {item.title}
                        </p>
                        <p className="mt-1 text-[11px] text-white/50">{item.desc}</p>
                        <p className="mt-3 text-[12px] leading-relaxed text-balance text-white/60">{item.detail}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
