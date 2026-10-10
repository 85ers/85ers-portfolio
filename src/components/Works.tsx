"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

type Variant = {
    id: string;
    label: string;
    src: string;
    poster: string;
    duration: string;
    note: string;
};

type Work = {
    id: string;
    group: string;
    vertical?: boolean;
    kicker: string;
    title: string;
    subtitle: string;
    description: string[];
    scope: { k: string; v: string }[];
    memo?: { k: string; v: string }[];
    footnote: string;
    variants: Variant[];
};

const upcoming = [
    { label: "シネマティックCM", note: "AI生成 × After Effects" },
    { label: "モーショングラフィックス", note: "UI / インフォグラフィックス" },
    { label: "MV / カルチャー", note: "キネティックタイポグラフィ" },
];

const works: Work[] = [
    {
        id: "video0",
        group: "BtoB 機構解説・実写合成",
        kicker: "Video 00 / BtoB 機構解説CG（3 variants）",
        title: "見えない機構を、可視化する。",
        subtitle: "横ピロー包装機の熱シール機構",
        description: [
            "架空の包装機を一から作り、ジョーが閉じてシールとカットが行われる瞬間を0.25倍のスローで見せた機構解説CGです。3ステップで動きを説明します。",
            "同じ3Dモデルから、医療ライン／食品ラインの2バリエーションを作り分けています。",
        ],
        scope: [
            { k: "3DCG", v: "モデリング・アニメーション・レンダリング（Blender）" },
            { k: "合成・解説", v: "コールアウト／インフォグラフィック／編集（After Effects）" },
            { k: "音", v: "BGM・効果音まで自作" },
        ],
        footnote: "架空の機械を用いた自主制作作品です。モデル・音源はすべて自作（権利クリア）。",
        variants: [
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
        ],
    },
    {
        id: "video1",
        group: "BtoB 機構解説・実写合成",
        kicker: "Video 01 / 実写 × CG 合成（2 cuts）",
        title: "実写の現場に、CGの機械を置く。",
        subtitle: "カメラトラッキングから影・反射・色合わせまで",
        description: [
            "ストック映像のクリーンルームに、自作の包装機を合成した作品です。「ビフォー／アフター」で、カメラトラッキング → 影 → 反射 → CG → 色合わせの順に、何をしているかを見せます。",
            "もう1本は、制作の裏付けとして、Blenderの実際の画面と追跡結果の3D表示をまとめた映像です。",
        ],
        scope: [
            { k: "トラッキング", v: "Blenderでカメラの動きを解析し、実写に合わせてCGを配置" },
            { k: "CG", v: "影・反射・本体を別パスで書き出し（Blender / Cycles）" },
            { k: "合成", v: "手前の物体の前後関係・色合わせ・粒子（After Effects）" },
        ],
        memo: [
            { k: "追跡点", v: "約700点（全534フレーム）" },
            { k: "平均再投影誤差", v: "0.52 px" },
            { k: "スケール", v: "背景内の作業員（1.7 m）から床の高さと大きさを推定" },
        ],
        footnote:
            "背景映像：Pexels（Pexels License）のストック映像。機械モデル・CG・合成・音はすべて自作。機械は架空のものです。",
        variants: [
            {
                id: "breakdown",
                label: "ビフォー／アフター",
                src: "/works/video1-breakdown.mp4",
                poster: "/works/video1-breakdown-poster.jpg",
                duration: "10秒",
                note: "実写のみ → トラッキング → 影のみ → CG配置 → 色合わせ → 比較。",
            },
            {
                id: "proof",
                label: "制作の裏付け",
                src: "/works/video1-proof.mp4",
                poster: "/works/video1-proof-poster.jpg",
                duration: "30秒",
                note: "Blenderの実際の画面（トラッキング・合成シーン）と、追跡結果の3D表示。",
            },
        ],
    },
    {
        id: "video2",
        group: "SNSショート／広告",
        vertical: true,
        kicker: "Video 02 / SNSショート（企業PR・縦型60秒）",
        title: "0.25倍にしないと、見えない仕事があります。",
        subtitle: "精密部品メーカー「ハルミ精工」（架空）の工程紹介",
        description: [
            "企業PR向けの縦型ショート動画です。冒頭の問いかけ → 工程を3ステップ（包む／閉じる／切る）→ 企業の姿勢、の順に、文字と音だけで伝わる構成にしています（ナレーションなし）。",
            "映像は自作の3Dモデルを縦構図で撮り直し、文字の設計・編集・音をAfter Effectsで仕上げました。",
        ],
        scope: [
            { k: "企画・構成", v: "フック／工程の3ステップ／締めの設計、安全圏を意識したテロップ配置" },
            { k: "3DCG", v: "Blenderで縦型カットを新規撮影（外装が透ける内部、閉合の寄り、流れ出し）" },
            { k: "編集・音", v: "After Effects／BGM・効果音まで自作（音なしでも通じる構成）" },
        ],
        footnote: "架空の企業を題材にした自主制作作品です（過去の実績は権利の都合で公開できないため、同種の案件を再現しました）。モデル・音源はすべて自作。",
        variants: [
            {
                id: "short",
                label: "60秒（縦型）",
                src: "/works/video2-s2.mp4",
                poster: "/works/video2-s2-poster.jpg",
                duration: "60秒",
                note: "ナレーションなし。BGM・効果音・テロップで構成。",
            },
        ],
    },
];

function WorkArticle({ work, delay }: { work: Work; delay: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    const [active, setActive] = useState(0);
    const current = work.variants[active];

    return (
        <motion.article
            ref={ref}
            className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay }}
        >
            <div className={work.vertical ? "lg:col-span-2" : "lg:col-span-3"}>
                {work.variants.length > 1 && (
                <div role="tablist" aria-label={`${work.title} のバリエーション`} className="flex flex-wrap gap-2 mb-3">
                    {work.variants.map((v, i) => (
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
                )}
                <div className={"border border-white/10 bg-black" + (work.vertical ? " max-w-[360px] mx-auto" : "")}>
                    <video
                        key={`${work.id}-${current.id}`}
                        className={"w-full block " + (work.vertical ? "aspect-[9/16]" : "aspect-video")}
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

            <div className={work.vertical ? "lg:col-span-3" : "lg:col-span-2"}>
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#008080]/70">{work.kicker}</p>
                <h3 className="mt-3 text-2xl md:text-3xl font-bold tracking-wide text-white leading-snug">
                    {work.title}
                </h3>
                <p className="mt-1 text-sm text-white/40">{work.subtitle}</p>

                {work.description.map((d) => (
                    <p key={d} className="mt-6 text-sm leading-relaxed text-white/60">
                        {d}
                    </p>
                ))}

                <dl className="mt-8 space-y-4">
                    {work.scope.map((s) => (
                        <div key={s.k} className="flex gap-4 text-sm">
                            <dt className="w-24 shrink-0 text-[11px] tracking-[0.2em] uppercase text-[#008080]/70 pt-0.5">
                                {s.k}
                            </dt>
                            <dd className="text-white/60 leading-relaxed">{s.v}</dd>
                        </div>
                    ))}
                </dl>

                {work.memo && (
                    <div className="mt-8 border border-white/10 p-4">
                        <p className="text-[10px] tracking-[0.3em] uppercase text-[#008080]/70">制作メモ</p>
                        <dl className="mt-3 space-y-2">
                            {work.memo.map((m) => (
                                <div key={m.k} className="flex gap-4 text-xs">
                                    <dt className="w-28 shrink-0 text-white/40">{m.k}</dt>
                                    <dd className="text-white/70 leading-relaxed">{m.v}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                )}

                <p className="mt-8 text-[11px] leading-relaxed text-white/30">{work.footnote}</p>

                <a
                    href="#contact"
                    className="mt-8 inline-block border border-[#008080]/50 hover:border-[#008080] hover:bg-[#008080]/10 transition-colors duration-300 px-6 py-3 text-xs tracking-[0.2em] text-white/80"
                >
                    この制作について相談する
                </a>
            </div>
        </motion.article>
    );
}

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
                <p className="text-[10px] tracking-[0.4em] uppercase text-[#008080]/60">Latest</p>
                <h2 className="mt-2 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Works</h2>
                <div className="mt-4 w-12 h-px bg-[#008080]/40" />
                <p className="mt-6 text-white/50 text-sm md:text-base leading-relaxed max-w-xl">
                    3作品を公開しました。ほかのジャンルも順次追加していきます。
                </p>
            </motion.div>

            <div className="space-y-24 md:space-y-32">
                {works.map((w, i) => (
                    <div key={w.id}>
                        {(i === 0 || works[i - 1].group !== w.group) && (
                            <div className="max-w-6xl mx-auto mb-10 flex items-center gap-4">
                                <span className="text-[11px] tracking-[0.3em] uppercase text-white/50">{w.group}</span>
                                <span className="flex-1 h-px bg-white/10" />
                            </div>
                        )}
                        <WorkArticle work={w} delay={0.15 + i * 0.05} />
                    </div>
                ))}
            </div>

            {/* Upcoming categories */}
            <motion.div
                className="max-w-6xl mx-auto mt-32"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <p className="text-[10px] tracking-[0.4em] uppercase text-white/30">Next</p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
