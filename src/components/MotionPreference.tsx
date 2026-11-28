"use client";

import { MotionConfig } from "framer-motion";

// OS の「視差効果を減らす」を有効にした閲覧者には、移動と拡大の演出を止める
export default function MotionPreference({ children }: { children: React.ReactNode }) {
    return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
