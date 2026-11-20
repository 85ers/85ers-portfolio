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
    vertical?: boolean;
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
    gallery?: { src: string; caption: string }[];
    galleryWide?: boolean;
    figures?: { src: string; caption: string }[];
    credits?: { label: string; href: string }[];
    variants: Variant[];
};

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
        ],
        footnote: "架空の機械を用いた自主制作作品です。モデルはすべて自作（権利クリア）。",
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
            "背景映像：Pexels（Pexels License）のストック映像。機械モデル・CG・合成はすべて自作。機械は架空のものです。",
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
            { k: "編集", v: "After Effects" },
        ],
        footnote: "架空の企業を題材にした自主制作作品です（過去の実績は権利の都合で公開できないため、同種の案件を再現しました）。モデルはすべて自作。",
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
    {
        id: "video3",
        group: "SNSショート／広告",
        vertical: true,
        kicker: "Video 03 / SNS広告ショート（美容・縦型45秒 ほか6本）",
        title: "朝のスキンケアを、3ステップで。",
        subtitle: "架空ブランド「ソラノヒ」の手順解説広告（美容・縦型）",
        description: [
            "美容系のSNS広告を想定した縦型ショートです。冒頭の問いかけ → ブランド → 3ステップ（洗う／整える／守る）→ CTA の順に、効果や効能は書かず、使い方の手順だけを見せています（ナレーションなし）。",
            "広告運用を想定して、同じ素材から、45秒の本編／30秒版／文字なしの15秒ショーケース／冒頭3秒だけを差し替えた3案を書き出しました。",
        ],
        scope: [
            { k: "企画・構成", v: "ターゲットは朝のスキンケアの順番に迷う人。フック → 3ステップ → CTA。薬機法・景表法に配慮し、効能・数値は書かない" },
            { k: "3DCG", v: "ボトル・スポイト・ジャー、水面、積み重なるプレートをBlenderで制作。ガラスと液体の質感、被写界深度、モーションブラー（Cycles）" },
            { k: "ブランド", v: "ロゴ・ラベル・配色を自作（書体：Zen Old Mincho）。ブランドは架空です" },
            { k: "編集・音", v: "文字アニメーション・色調整・グレインをAfter Effectsで。音は映像のカットにビート同期" },
        ],
        memo: [
            { k: "担当", v: "企画・構成・3DCG・編集・音（すべて1人）" },
            { k: "ツール", v: "Blender / After Effects" },
            { k: "仕様", v: "1080×1920・24fps・約−14 LUFS。文字は安全圏の内側に配置" },
            { k: "視聴データ", v: "架空ブランドのため、視聴維持率などの実測値はありません" },
        ],
        footnote: "架空のブランドを題材にした自主制作作品です。モデル・ロゴはすべて自作。肌に合わない時は使用を中止してください。",
        gallery: [
            { src: "/works/s1/style-1.jpg", caption: "フック：商品が落ちて整列" },
            { src: "/works/s1/style-2.jpg", caption: "ブランド：ラベルを自作" },
            { src: "/works/s1/style-3.jpg", caption: "① 洗う：水面のしずく" },
            { src: "/works/s1/style-4.jpg", caption: "② 整える：しずくがなじむ" },
            { src: "/works/s1/style-5.jpg", caption: "③ 守る：重なる3層と朝日" },
            { src: "/works/s1/style-6.jpg", caption: "Blenderの画面（書き出し）" },
        ],
        variants: [
            { id: "main", label: "45秒（本編）", src: "/works/s1/s1-45.mp4", poster: "/works/s1/s1-45-poster.jpg", duration: "45秒", note: "冒頭の問いかけ版。ナレーションなし。BGM・効果音・テロップで構成。" },
            { id: "cut30", label: "30秒版", src: "/works/s1/s1-30.mp4", poster: "/works/s1/s1-30-poster.jpg", duration: "30秒", note: "各ステップを短くしたカットダウン。尺違いの出し分けを想定。" },
            { id: "show15", label: "15秒（文字なし）", src: "/works/s1/s1-15.mp4", poster: "/works/s1/s1-15-poster.jpg", duration: "15秒", note: "3D映像だけを見せるショーケース。ループ再生向け。" },
            { id: "hookB", label: "冒頭B 結果先出し", src: "/works/s1/s1-hookB.mp4", poster: "/works/s1/s1-hookB-poster.jpg", duration: "10秒", note: "冒頭3秒を「完成形から入る」に差し替えた版（先頭10秒を抜粋。以降は本編と同じ）。" },
            { id: "hookC", label: "冒頭C 数字", src: "/works/s1/s1-hookC.mp4", poster: "/works/s1/s1-hookC-poster.jpg", duration: "10秒", note: "冒頭3秒を「3ステップ」の数字から入る版（先頭10秒を抜粋）。" },
            { id: "hookD", label: "冒頭D 水滴", src: "/works/s1/s1-hookD.mp4", poster: "/works/s1/s1-hookD-poster.jpg", duration: "10秒", note: "冒頭3秒を水滴のアップから入る版（先頭10秒を抜粋）。" },
            { id: "making", label: "制作の裏付け", src: "/works/s1/s1-making.mp4", poster: "/works/s1/s1-making-poster.jpg", duration: "7秒", note: "Blenderの実際の画面（書き出し）。" },
        ],
    },
    {
        id: "video4",
        group: "広告CM／ブランド映像",
        kicker: "Video 04 / ブランドCM（16:9・30秒 ほか3本）",
        title: "朝のはじまりを、やさしく。",
        subtitle: "架空ブランド「ソラノヒ」のブランドCM（Video 03 の続き）",
        description: [
            "Video 03 の手順解説広告の次に、世界観を伝える広告CMとして制作しました。暗い夜明けの部屋から、水滴・商品・重なる3層を経て、朝日とロゴへ。文字は最小限で、ナレーションなしです。",
            "広告運用を想定して、30秒のシネマティック版のほかに、冒頭を明るくしてブランド名を冒頭に出した15秒の広告向け版（16:9／9:16）も書き出しました。",
        ],
        scope: [
            { k: "企画・構成", v: "夜明けから朝への明暗の流れ、7つのショット、キャッチコピー（効能・数値は書かない）" },
            { k: "3DCG", v: "Blender（Cycles）で、ガラス・水・ラベル付きの商品を撮影。水面は変形で波紋を作り、光の映り込みで見せる。ショットごとにカメラと被写界深度を設計" },
            { k: "ブランド", v: "ロゴ・ラベル・配色（書体：Zen Old Mincho）。Video 03 と同じ架空ブランド" },
            { k: "編集", v: "After Effects で文字・グロー・グレイン" },
        ],
        memo: [
            { k: "担当", v: "企画・構成・3DCG・編集・音（すべて1人）" },
            { k: "ツール", v: "Blender / After Effects" },
            { k: "仕様", v: "30秒は1920×1080・24fps・約−14 LUFS。文字は安全圏の内側。全コマの機械検査（素材欠落・切替のなめらかさ）済み" },
            { k: "視聴データ", v: "架空ブランドのため、視聴維持率などの実測値はありません" },
        ],
        footnote: "架空のブランドを題材にした自主制作作品です。モデル・ロゴはすべて自作。",
        galleryWide: true,
        gallery: [
            { src: "/works/c1/style-1.jpg", caption: "水滴：着水ごとに広がる波紋" },
            { src: "/works/c1/style-2.jpg", caption: "商品：ラベルのロゴが読める" },
            { src: "/works/c1/style-3.jpg", caption: "パッド：しずくがなじむ" },
            { src: "/works/c1/style-4.jpg", caption: "重なる3層と朝日" },
            { src: "/works/c1/style-5.jpg", caption: "ボトルの周りをまわる" },
            { src: "/works/c1/style-6.jpg", caption: "日の出とロゴ・タグライン" },
        ],
        variants: [
            { id: "cm30", label: "30秒（シネマティック）", src: "/works/c1/c1-30.mp4", poster: "/works/c1/c1-30-poster.jpg", duration: "30秒", note: "夜明けから朝へ。16:9。サイト・面談向けの本編。" },
            { id: "ad15", label: "15秒 広告（16:9）", src: "/works/c1/c1-ad15.mp4", poster: "/works/c1/c1-ad15-poster.jpg", duration: "15秒", note: "冒頭を明るく、ブランド名を冒頭0.4秒に出した広告向け版。" },
            { id: "ad15v", label: "15秒 広告（9:16）", src: "/works/c1/c1-ad15v.mp4", poster: "/works/c1/c1-ad15v-poster.jpg", duration: "15秒", note: "縦型。スマホの広告枠向けに、商品を大きく撮り直した版。", vertical: true },
            { id: "cine15", label: "15秒（シネマティック）", src: "/works/c1/c1-cine15.mp4", poster: "/works/c1/c1-cine15-poster.jpg", duration: "15秒", note: "30秒版を短くした版（冒頭は夜明けの暗い画から）。" },
        ],
    },
    {
        id: "video5",
        group: "採用CM／企業PR",
        kicker: "Video 05 / 採用CM（16:9・30秒 ほか2本）",
        title: "ある一日を、のぞいてみる。",
        subtitle: "架空企業「ハルミ精工」の採用CM（Video 02 の続き）",
        description: [
            "Video 02 の企業PRの次に、採用向けのCMとして制作しました。朝の出社から夕方の終業までの「1日の流れ」を、人物を出さず、物の動きだけで見せます。求職者が知りたい「仕事の中身」と「1日の流れ」を中心に構成しました。",
            "上部の進行バーに時刻と仕事名（出社・段取り・加工と検査・昼休み・出荷・終業）を出し、部品に付けた型番「A」を、加工から出荷の箱まで一貫させています。賃金など法定の明示事項は載せず、「募集要項は Web で」へ誘導する想定です。16:9の30秒のほか、15秒版（16:9／9:16）も書き出しました。",
        ],
        scope: [
            { k: "企画・構成", v: "「1日の流れ」で6つの場面（出社・段取り・加工と検査・昼休み・出荷・終業）、キャッチコピー、CTA。人物なし・賃金などの数字なし" },
            { k: "イラスト・モーション", v: "すべて After Effects のシェイプで自作（外部素材なし）。場面ごとに「原因→結果」の動き（図面を描く→歯車→付箋、プレス→ゲージ→検査表、注ぐ→満ちる→湯気）を設計" },
            { k: "情報設計", v: "場面をまたいで動かない進行バー（時刻＋仕事名）、型番「A」の一貫、注記（架空企業）を常時表示" },
            { k: "編集", v: "転換は右へ流れる押し出し（手前を先行させる視差つき）" },
        ],
        memo: [
            { k: "担当", v: "企画・構成・イラスト・モーション・音（すべて1人）" },
            { k: "ツール", v: "After Effects（シェイプ）" },
            { k: "仕様", v: "16:9は1920×1080、9:16は1080×1920・24fps・約−14 LUFS。9:16は上下の安全圏を守って文字を配置。色バー・フラッシュの全コマ検査と、文字の安全圏の検査済み" },
            { k: "視聴データ", v: "架空企業のため、応募数などの実測値はありません" },
        ],
        footnote: "架空の企業を題材にした自主制作作品です。イラスト・モーションはすべて自作（外部素材なし）。",
        galleryWide: true,
        gallery: [
            { src: "/works/c2/style-1.jpg", caption: "出社：看板・ドア・上着・靴" },
            { src: "/works/c2/style-2.jpg", caption: "段取り：図面→歯車→付箋→チェック" },
            { src: "/works/c2/style-3.jpg", caption: "加工・検査：型番Aの部品、プレスごとに検査表へ" },
            { src: "/works/c2/style-4.jpg", caption: "昼休み：注ぐ→満ちる→湯気" },
            { src: "/works/c2/style-5.jpg", caption: "出荷：箱に入れてトラックへ" },
            { src: "/works/c2/style-6.jpg", caption: "終業：街に灯りがともり、社名とキャッチ" },
        ],
        variants: [
            { id: "cm30", label: "30秒（16:9）", src: "/works/c2/c2-30.mp4", poster: "/works/c2/c2-30-poster.jpg", duration: "30秒", note: "朝から夕方までの1日。サイト・面談向けの本編。" },
            { id: "cm15", label: "15秒（16:9）", src: "/works/c2/c2-15.mp4", poster: "/works/c2/c2-15-poster.jpg", duration: "15秒", note: "段取り→加工→昼→出荷→終端に絞った短縮版。ブランド名を右上に常時表示。" },
            { id: "cm15v", label: "15秒（9:16）", src: "/works/c2/c2-15v.mp4", poster: "/works/c2/c2-15v-poster.jpg", duration: "15秒", note: "縦型。場面を中央の帯に入れ、上下に進行バー・タイトル・終端の文字を大きく配置した版。", vertical: true },
        ],
    },
    {
        id: "video6",
        group: "SaaS／機能解説モーション",
        kicker: "Video 06 / 機能解説モーション（16:9・30秒 ほか2本）",
        title: "つなぐと流れ出す。",
        subtitle: "架空SaaS「ナガレバ」（データ連携）の機能解説モーション",
        description: [
            "「注文」「在庫」「請求」という3つのシステムが、連携でつながって、データが流れる様子を見せる機能解説です。注文1件が在庫の数字と請求の合計を実際に変えます（在庫 24→23、請求の合計 ¥1,760→¥19,360。金額は計算が合うように設計）。",
            "Video 05 とは別の見た目にし、3Dカメラ・スポットライトの影・被写界深度で奥行きを作りました。16:9の30秒のほか、15秒版（16:9／9:16）も書き出しました。9:16は縦に並べ直し、別のカメラでデータを追う構成です。",
        ],
        scope: [
            { k: "企画・構成", v: "課題 → つなぐ → 流れる → ブランドの4場面。1つの業務フローに絞り、数字は実際に変わるよう設計。効果の数値は書かない" },
            { k: "モーション", v: "After Effects の3D（カメラ・ライトの影・被写界深度）。データの欠片に予備動作・行き過ぎ・着地のはずみ、数字はカウントアップ、最後の欠片がロゴ印へ着地するマッチカット" },
            { k: "情報設計", v: "ステップ表示（つなぐ前／つなぐ／流れる）、具体的な架空データ（#1042 万年筆など）、注記（架空）を常時表示。ほぼモノトーン＋橙1色" },
        ],
        memo: [
            { k: "担当", v: "企画・構成・モーション・音（すべて1人）" },
            { k: "ツール", v: "After Effects（3D）" },
            { k: "仕様", v: "16:9は1920×1080、9:16は1080×1920・24fps・約−14 LUFS。文字の安全圏の検査、色バー・フラッシュの全コマ検査済み" },
            { k: "視聴データ", v: "架空のサービスのため、実測値はありません" },
        ],
        footnote: "架空のサービスを題材にした自主制作作品です。画面・データはすべて自作（外部素材なし）。",
        galleryWide: true,
        gallery: [
            { src: "/works/c4/style-1.jpg", caption: "課題：手作業でデータを運ぶ（届かない）" },
            { src: "/works/c4/style-2.jpg", caption: "つなぐ：線が伸びて、カードの縁が灯る" },
            { src: "/works/c4/style-3.jpg", caption: "流れる：注文が在庫へ、番号を持って運ばれる" },
            { src: "/works/c4/style-4.jpg", caption: "在庫の数字が変わり、請求に番号と金額が入る" },
            { src: "/works/c4/style-5.jpg", caption: "合計が増える（¥13,264 → ¥19,360）" },
            { src: "/works/c4/style-6.jpg", caption: "ロゴ印へのマッチカットと、終端" },
        ],
        variants: [
            { id: "cm30", label: "30秒（16:9）", src: "/works/c4/c4-30.mp4", poster: "/works/c4/c4-30-poster.jpg", duration: "30秒", note: "課題から、つなぐ、流れる、ブランドまで。サイト・面談向けの本編。" },
            { id: "cm15", label: "15秒（16:9）", src: "/works/c4/c4-15.mp4", poster: "/works/c4/c4-15-poster.jpg", duration: "15秒", note: "冒頭から作業の場面。接続 → 流れ → ロゴに絞った短縮版。" },
            { id: "cm15v", label: "15秒（9:16）", src: "/works/c4/c4-15v.mp4", poster: "/works/c4/c4-15v-poster.jpg", duration: "15秒", note: "縦型。カードを縦に並べ直し、別のカメラでデータを追う。タイトルは帯の上に。", vertical: true },
        ],
    },
    {
        id: "video7",
        group: "漫画PV／MV（静止画パーツ分解）",
        kicker: "Video 07 / 漫画PVデモ（16:9・9:16 各18秒）",
        title: "静止画に、呼吸と斬れ味を。",
        subtitle: "架空のオリジナル漫画PV『零度ノ残光』（自主制作）",
        description: [
            "イラストをパーツに分けて、立体的に動かした漫画PVのデモです。本編16秒のあとに、3Dレイヤーの分解（ブレイクダウン）を2秒入れています。分解は0:16から始まります。",
            "16:9（横）と9:16（縦）の2つの版があります。縦型は、画面に合わせて文字とカードの配置を組み直しています。",
        ],
        scope: [
            { k: "パーツ分解", v: "Photoshopで、髪の束・マフラー・コート裾・刀などの部位に切り分け、動かす部位の下の絵を補う。切り分けと補完は手作業" },
            { k: "ベクター", v: "Illustratorで、文字・六角の陣・閃光・ロゴを作成。After Effectsでは連続ラスタライズにして、寄っても線がぼけにくい" },
            { k: "動き", v: "After Effectsの標準のエフェクトとエクスプレッションで構成。外部プラグインは使っていません" },
        ],
        memo: [
            { k: "担当", v: "パーツ分解・モーション・編集（すべて1人）" },
            { k: "ツール", v: "Photoshop 2026 / Illustrator 2027 / After Effects 2026" },
            { k: "仕様", v: "計18秒（本編16秒＋分解2秒）・24fps・16:9は1920×1080、9:16は1080×1920" },
            { k: "調整", v: "00_MASTER_CONTROL：発光の強さ・カメラの揺れ・差し色の色合いを、3本のスライダーでまとめて調整できます" },
            { k: "修正", v: ".aepでの納品・修正もご相談ください（条件は個別に）" },
        ],
        footnote: "架空の漫画PVを題材にした自主制作作品です。原画：Adobe Firefly（架空オリジナル作品）。",
        credits: [
            { label: "BGM：PeriTune「Kengeki」（CC BY 4.0・18秒に合わせて切り詰め・ミックスしています）", href: "https://peritune.com/blog/2021/08/17/kengeki/" },
            { label: "ライセンス：CC BY 4.0", href: "https://creativecommons.org/licenses/by/4.0/deed.ja" },
            { label: "効果音：効果音ラボ", href: "https://soundeffect-lab.info/" },
        ],
        figures: [
            { src: "/works/zero/zero-pipeline.jpg", caption: "制作の流れ：元の絵と切り分けたパーツ（Photoshop）／ベクター原盤（Illustrator）／3D親子リグとスライダー（After Effects）" },
            { src: "/works/zero/zero-breakdown.jpg", caption: "3Dレイヤー分解（0:16〜）：6枚のレイヤーをZ軸に展開" },
        ],
        variants: [
            { id: "wide", label: "16:9（横）", src: "/works/zero/zero-16x9.mp4", poster: "/works/zero/zero-16x9-poster.jpg", duration: "18秒", note: "本編16秒＋3Dレイヤー分解2秒。" },
            { id: "tall", label: "9:16（縦）", src: "/works/zero/zero-9x16.mp4", poster: "/works/zero/zero-9x16-poster.jpg", duration: "18秒", vertical: true, note: "SNS向けの縦型。同じ内容を、縦の画面に合わせて組み直した版。" },
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
                <div className={"border border-white/10 bg-black" + ((current.vertical ?? work.vertical) ? " max-w-[360px] mx-auto" : "")}>
                    <video
                        key={`${work.id}-${current.id}`}
                        className={"w-full block " + ((current.vertical ?? work.vertical) ? "aspect-[9/16]" : "aspect-video")}
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
                {work.figures && (
                    <div className="mt-8 space-y-6">
                        {work.figures.map((f) => (
                            <figure key={f.src}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={f.src} alt={f.caption} loading="lazy" className="w-full border border-white/10" />
                                <figcaption className="mt-2 text-[11px] leading-snug text-white/40">{f.caption}</figcaption>
                            </figure>
                        ))}
                    </div>
                )}
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

                {work.gallery && (
                    <div className="mt-8">
                        <p className="text-[10px] tracking-[0.3em] uppercase text-[#008080]/70">スタイルフレーム</p>
                        <div className={"mt-3 grid gap-2 " + (work.galleryWide ? "grid-cols-2" : "grid-cols-3")}>
                            {work.gallery.map((g) => (
                                <figure key={g.src}>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={g.src} alt={g.caption} loading="lazy" className={"w-full object-cover border border-white/10 " + (work.galleryWide ? "aspect-video" : "aspect-[9/16]")} />
                                    <figcaption className="mt-1 text-[10px] leading-snug text-white/40">{g.caption}</figcaption>
                                </figure>
                            ))}
                        </div>
                    </div>
                )}

                <p className="mt-8 text-[11px] leading-relaxed text-white/30">{work.footnote}</p>
                {work.credits && (
                    <ul className="mt-2 space-y-1 text-[11px] leading-relaxed text-white/30">
                        {work.credits.map((c) => (
                            <li key={c.href}>
                                <a href={c.href} target="_blank" rel="noopener noreferrer" className="underline decoration-white/20 hover:text-white/60">
                                    {c.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}

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
                    ほかのジャンルも順次追加していきます。
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
        </section>
    );
}
