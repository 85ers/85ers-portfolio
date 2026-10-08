"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const upcoming = [
    { label: "シネマティックCM", note: "AI生成 × After Effects" },
    { label: "モーショングラフィックス", note: "UI / インフォグラフィックス" },
    { label: "BtoB映像", note: "実写合成 / 3DCG" },
    { label: "MV / カルチャー", note: "キネティックタイポグラフィ" },
];

const scope = [
    { k: "3DCG", v: "モデリング・アニメーション・レンダリング（Blender）" },
    { k: "合成・解説", v: "コールアウト／インフォグラフィック／編集（After Effects）" },
    { k: "音", v: "BGM・効果音まで自作" },
];

const variants = [
    {
        id: "medical",
        label: "医療ライン",
        src: "/works/video0.mp4",
        poster: "/works/video0-poster.jpg",
        duration: "32秒",
        note: "白い滅菌パウチ＋青ラベル。医療機器・医薬の包装ラインを想定した配色です。",
    },
    {
        id: "food",
        label: "食品ライン",
        src: "/works/video0-food.mp4",
        poster: "/works/video0-food-poster.jpg",
        duration: "32秒",
        note: "同じ機械・同じ構成のまま、製品とラベルの色・文言だけを食品向けに変えた版です。",
    },
    {
        id: "making",
        label: "メイキング",
        src: "/works/video0-making.mp4",
        poster: "/works/video0-making-poster.jpg",
        duration: "10秒",
        note: "ライン速度と製品の色を数値で変えるだけで、映像全体が更新されます。",
    },
];

export default function Works() {
    const sectionRef = useRef(null);
    const [active, setActive] = useState(0);
    const current = variants[active];
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
                    Latest
                </p>
                <h2 className="mt-2 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                    Works
                </h2>
                <div className="mt-4 w-12 h-px bg-[#008080]/40" />
                <p className="mt-6 text-white/50 text-sm md:text-base leading-relaxed max-w-xl">
                    最初の作品を公開しました。ほかのジャンルも順次追加していきます。
                </p>
            </motion.div>

            {/* Featured work */}
            <motion.article
                className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.15 }}
            >
                <div className="lg:col-span-3">
                    <div
                        role="tablist"
                        aria-label="バリエーション"
                        className="flex gap-2 mb-3"
                    >
                        {variants.map((v, i) => (
                            <button
                                key={v.id}
                                role="tab"
                                aria-selected={i === active}
                                onClick={() => setActive(i)}
                                className={
                                    "px-4 py-2 text-xs tracking-[0.15em] border transition-colors duration-300 " +
                                    (i === active
                                        ? "border-[#008080] bg-[#008080]/15 text-white"
                                        : "border-white/15 text-white/50 hover:border-[#008080]/50 hover:text-white/80")
                                }
                            >
                                {v.label}
                            </button>
                        ))}
                    </div>
                    <div className="border border-white/10 bg-black">
                        <video
                            key={current.id}
                            className="w-full aspect-video block"
                            controls
                            playsInline
                            preload="metadata"
                            poster={current.poster}
                        >
                            <source src={current.src} type="video/mp4" />
                        </video>
                    </div>
                    <p className="mt-3 text-[12px] leading-relaxed text-white/40">
                        {current.label}（{current.duration}）― {current.note}
                    </p>
                </div>

                <div className="lg:col-span-2">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-[#008080]/70">
                        Video 00 / BtoB 機構解説CG（3 variants）
                    </p>
                    <h3 className="mt-3 text-2xl md:text-3xl font-bold tracking-wide text-white leading-snug">
                        見えない機構を、可視化する。
                    </h3>
                    <p className="mt-1 text-sm text-white/40">横ピロー包装機の熱シール機構</p>

                    <p className="mt-6 text-sm leading-relaxed text-white/60">
                        架空の包装機を一から作り、ジョーが閉じてシールとカットが行われる瞬間を
                        0.25倍のスローで見せた機構解説CGです。3ステップで動きを説明します。
                        同じ3Dモデルから、医療ライン／食品ラインの2バリエーションを作り分けています。
                    </p>

                    <dl className="mt-8 space-y-4">
                        {scope.map((s) => (
                            <div key={s.k} className="flex gap-4 text-sm">
                                <dt className="w-20 shrink-0 text-[11px] tracking-[0.2em] uppercase text-[#008080]/70 pt-0.5">
                                    {s.k}
                                </dt>
                                <dd className="text-white/60 leading-relaxed">{s.v}</dd>
                            </div>
                        ))}
                    </dl>

                    <p className="mt-8 text-[11px] leading-relaxed text-white/30">
                        架空の機械を用いた自主制作作品です。モデル・音源はすべて自作（権利クリア）。
                    </p>

                    <a
                        href="#contact"
                        className="mt-8 inline-block border border-[#008080]/50 hover:border-[#008080] hover:bg-[#008080]/10 transition-colors duration-300 px-6 py-3 text-xs tracking-[0.2em] text-white/80"
                    >
                        この制作について相談する
                    </a>
                </div>
            </motion.article>

            {/* Upcoming categories */}
            <motion.div
                className="max-w-6xl mx-auto mt-24"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <p className="text-[10px] tracking-[0.4em] uppercase text-white/30">Next</p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {upcoming.map((c, index) => (
                        <motion.div
                            key={c.label}
                            className="group relative border border-white/10 hover:border-[#008080]/50 transition-colors duration-500 p-6 aspect-[4/3] flex flex-col justify-end overflow-hidden"
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.7,
                                delay: 0.4 + index * 0.1,
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
