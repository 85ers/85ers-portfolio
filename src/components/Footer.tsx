"use client";

import { motion } from "framer-motion";
import {
    FaInstagram,
    FaYoutube,
    FaTiktok,
    FaXTwitter,
} from "react-icons/fa6";

const socialLinks = [
    {
        icon: FaInstagram,
        href: "https://www.instagram.com/yuto.edit.works/",
        label: "Instagram",
    },
    {
        icon: FaYoutube,
        href: "https://www.youtube.com/channel/UCjkKeE-pdyZgrkW6VhldDaA?sub_confirmation=1",
        label: "YouTube",
    },
    {
        icon: FaTiktok,
        href: "https://www.tiktok.com/@yuto.edit.works",
        label: "TikTok",
    },
    {
        icon: FaXTwitter,
        href: "https://x.com/YutoEditWorks",
        label: "X (Twitter)",
    },
];

export default function Footer() {
    return (
        <footer className="relative py-16 px-6 border-t border-white/5">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
                {/* Social Icons */}
                <motion.div
                    className="flex items-center gap-8"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {socialLinks.map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="text-white/25 hover:text-[#008080] transition-colors duration-500"
                        >
                            <social.icon className="w-4 h-4" />
                        </a>
                    ))}
                </motion.div>

                {/* Copyright */}
                <motion.p
                    className="text-[10px] tracking-[0.3em] text-white/15 uppercase"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    © 2025 85ers. All rights reserved.
                </motion.p>
            </div>
        </footer>
    );
}
