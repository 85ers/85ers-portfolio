"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MouseStalker() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const smoothX = useSpring(cursorX, springConfig);
    const smoothY = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Only show on devices with fine pointer (desktop)
        const mediaQuery = window.matchMedia("(pointer: fine)");
        if (!mediaQuery.matches) return;

        const handleMouseMove = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        // Detect hoverable elements
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.closest("a") ||
                target.closest("button") ||
                target.closest("[role='button']") ||
                target.tagName === "A" ||
                target.tagName === "BUTTON"
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);
        window.addEventListener("mouseenter", handleMouseEnter);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
            window.removeEventListener("mouseenter", handleMouseEnter);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY, isVisible]);

    return (
        <>
            {/* Outer glow ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-screen"
                style={{
                    x: smoothX,
                    y: smoothY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    width: isHovering ? 48 : 32,
                    height: isHovering ? 48 : 32,
                    opacity: isVisible ? (isHovering ? 0.6 : 0.3) : 0,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                <div
                    className="w-full h-full rounded-full"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(0,128,128,0.4) 0%, rgba(0,128,128,0.1) 50%, transparent 70%)",
                        boxShadow: "0 0 20px rgba(0,128,128,0.2), 0 0 40px rgba(0,128,128,0.1)",
                    }}
                />
            </motion.div>

            {/* Inner dot */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    width: isHovering ? 6 : 4,
                    height: isHovering ? 6 : 4,
                    opacity: isVisible ? 0.8 : 0,
                }}
                transition={{ duration: 0.15 }}
            >
                <div className="w-full h-full rounded-full bg-[#008080]" />
            </motion.div>
        </>
    );
}
