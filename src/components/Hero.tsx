"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navItems = [
    { label: "Profile", href: "#profile" },
    { label: "Works", href: "#works" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
];

export default function Hero() {
    return (
        <section id="hero" className="relative h-screen w-full overflow-hidden">
            {/* Split Screen Background */}
            <div className="absolute inset-0 flex flex-col md:flex-row">
                {/* Left Panel */}
                <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0d1a1a] to-[#060606]">
                        {/* Abstract video-like pattern */}
                        <motion.div
                            className="absolute inset-0 opacity-30"
                            style={{
                                background:
                                    "radial-gradient(ellipse at 30% 50%, rgba(0,128,128,0.15) 0%, transparent 70%)",
                            }}
                            animate={{
                                opacity: [0.2, 0.35, 0.2],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                        {/* Grid lines */}
                        <div
                            className="absolute inset-0 opacity-[0.04]"
                            style={{
                                backgroundImage:
                                    "linear-gradient(rgba(0,128,128,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,128,128,0.3) 1px, transparent 1px)",
                                backgroundSize: "60px 60px",
                            }}
                        />
                        {/* Floating particles */}
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={`left-${i}`}
                                className="absolute w-1 h-1 rounded-full bg-[#008080]"
                                style={{
                                    left: `${15 + i * 18}%`,
                                    top: `${20 + i * 12}%`,
                                }}
                                animate={{
                                    y: [-20, 20, -20],
                                    opacity: [0.2, 0.6, 0.2],
                                }}
                                transition={{
                                    duration: 4 + i,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: i * 0.7,
                                }}
                            />
                        ))}
                    </div>
                    {/* Video placeholder overlay text */}
                    <div className="absolute bottom-8 left-8 z-10">
                        <motion.p
                            className="text-[10px] tracking-[0.3em] text-white/20 uppercase"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 1 }}
                        >
                            Showreel 2025
                        </motion.p>
                    </div>
                </div>

                {/* Right Panel */}
                <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-bl from-[#060606] via-[#0a1414] to-[#0a0a0a]">
                        <motion.div
                            className="absolute inset-0 opacity-30"
                            style={{
                                background:
                                    "radial-gradient(ellipse at 70% 50%, rgba(0,128,128,0.12) 0%, transparent 70%)",
                            }}
                            animate={{
                                opacity: [0.25, 0.4, 0.25],
                            }}
                            transition={{
                                duration: 7,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1,
                            }}
                        />
                        <div
                            className="absolute inset-0 opacity-[0.03]"
                            style={{
                                backgroundImage:
                                    "linear-gradient(rgba(0,128,128,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,128,128,0.2) 1px, transparent 1px)",
                                backgroundSize: "80px 80px",
                            }}
                        />
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={`right-${i}`}
                                className="absolute w-1 h-1 rounded-full bg-[#008080]"
                                style={{
                                    left: `${10 + i * 20}%`,
                                    top: `${30 + i * 10}%`,
                                }}
                                animate={{
                                    y: [15, -15, 15],
                                    opacity: [0.3, 0.7, 0.3],
                                }}
                                transition={{
                                    duration: 5 + i,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: i * 0.5,
                                }}
                            />
                        ))}
                    </div>
                    <div className="absolute bottom-8 right-8 z-10">
                        <motion.p
                            className="text-[10px] tracking-[0.3em] text-white/20 uppercase"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.8, duration: 1 }}
                        >
                            Client Works
                        </motion.p>
                    </div>
                </div>

                {/* Center divider line */}
                <motion.div
                    className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#008080]/30 to-transparent"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                />
            </div>

            {/* Center Logo & Nav */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                {/* Top Navigation */}
                <motion.nav
                    className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 md:px-12 py-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <div className="flex gap-6 md:gap-10">
                        {navItems.slice(0, 2).map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-[11px] md:text-xs tracking-[0.2em] uppercase text-white/50 hover:text-[#008080] transition-colors duration-500"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                    <div className="flex gap-6 md:gap-10">
                        {navItems.slice(2).map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-[11px] md:text-xs tracking-[0.2em] uppercase text-white/50 hover:text-[#008080] transition-colors duration-500"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </motion.nav>

                {/* Main Logo */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <motion.h1
                        className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight teal-glow select-none"
                        style={{ color: "#ffffff" }}
                    >
                        85ers
                    </motion.h1>
                    <motion.p
                        className="mt-3 text-[10px] md:text-xs tracking-[0.5em] uppercase text-white/40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                    >
                        EightyFivers
                    </motion.p>
                    <motion.p
                        className="mt-6 text-[11px] md:text-sm tracking-[0.15em] text-white/30 max-w-xs mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1 }}
                    >
                        誠実さと自由を、映像でデザインする
                    </motion.p>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                >
                    <span className="text-[9px] tracking-[0.3em] uppercase text-white/25">
                        Scroll
                    </span>
                    <motion.div
                        className="w-px h-8 bg-gradient-to-b from-[#008080]/50 to-transparent"
                        animate={{ scaleY: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.div>
            </div>
        </section>
    );
}
