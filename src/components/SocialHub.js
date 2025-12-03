"use client";

import { useState } from "react";
import Image from "next/image";
import { Youtube, Instagram, Video } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./SocialHub.module.css";

const SOCIAL_CONTENT = [
    {
        id: 1,
        platform: "youtube",
        title: "Il BRAMITO potente del cervo maschio",
        image: "https://img.youtube.com/vi/yH9cArzx4n8/maxresdefault.jpg",
        views: "Un video da non credere...",
        link: "https://youtu.be/yH9cArzx4n8"
    },
    {
        id: 2,
        platform: "youtube",
        title: "Defender 90: Offroad al Limite",
        image: "https://img.youtube.com/vi/wQrx2422wD8/maxresdefault.jpg",
        views: "Test Land Rover Defender 90 HSE 2025 ",
        link: "https://youtu.be/wQrx2422wD8"
    },
    {
        id: 3,
        platform: "youtube",
        title: "Epica Avventura a Passo Cercen",
        image: "https://img.youtube.com/vi/bn1cIlhqL74/maxresdefault.jpg",
        views: "Giro ad Anello in Ebike",
        link: "https://youtu.be/bn1cIlhqL74"
    },
    {
        id: 4,
        platform: "instagram",
        title: "Incontri ravvicinati in Val di Rabbi",
        image: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=800&q=80", // Placeholder
        views: "Seguici su Instagram",
        link: "https://www.instagram.com/mountain_fauna_lover/"
    },
    {
        id: 5,
        platform: "tiktok",
        title: "Momenti magici con la fauna alpina",
        image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=800&q=80", // Placeholder
        views: "Seguici su TikTok",
        link: "https://www.tiktok.com/@mountain_fauna_lover"
    },
    {
        id: 6,
        platform: "youtube",
        title: "Alla scoperta del Parco Nazionale",
        image: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg", // Placeholder ID, replace with real one if available
        views: "Esplorazione natura",
        link: "https://www.youtube.com/@MountainFaunaLover"
    }
];

const FILTERS = [
    { id: "all", label: "Tutti" },
    { id: "youtube", label: "YouTube" },
    { id: "instagram", label: "Instagram" },
    { id: "tiktok", label: "TikTok" }
];

export default function SocialHub() {
    const [activeFilter, setActiveFilter] = useState("all");

    const getIcon = (platform) => {
        switch (platform) {
            case "youtube": return <Youtube size={20} />;
            case "instagram": return <Instagram size={20} />;
            case "tiktok": return <Video size={20} />;
            default: return null;
        }
    };

    const filteredContent = activeFilter === "all"
        ? SOCIAL_CONTENT
        : SOCIAL_CONTENT.filter(item => item.platform === activeFilter);

    return (
        <section id="social-hub" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Le Mie Avventure</h2>
                    <p className={styles.subtitle}>Segui le mie esplorazioni su tutti i canali social</p>
                </div>

                <div className={styles.filterContainer}>
                    {FILTERS.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`${styles.filterButton} ${activeFilter === filter.id ? styles.activeFilter : ''}`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                <motion.div
                    layout
                    className={styles.grid}
                >
                    <AnimatePresence mode="popLayout">
                        {filteredContent.map((item) => (
                            <motion.a
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                key={item.id}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.card}
                                whileHover={{ y: -5 }}
                            >
                                <div className={styles.platformIcon}>
                                    {getIcon(item.platform)}
                                </div>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className={styles.cardImage}
                                />
                                <div className={styles.cardOverlay}>
                                    <h3 className={styles.cardTitle}>{item.title}</h3>
                                    <span className={styles.cardMeta}>{item.views}</span>
                                </div>
                            </motion.a>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
