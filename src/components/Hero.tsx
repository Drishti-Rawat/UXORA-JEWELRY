"use client";
import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative h-svh w-full flex items-center justify-center overflow-hidden bg-background">
            <div className="container relative h-full flex items-center justify-center px-4">

                {/* Left Text - NAT */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-4 md:left-0 z-10 flex flex-col items-start translate-y-[-15%] md:translate-y-0"
                >
                    <h1 className="text-[clamp(3.5rem,15vw,12rem)] md:text-[clamp(4rem,12vw,12rem)] font-serif leading-[0.8] text-foreground">
                        NAT
                    </h1>
                </motion.div>

                {/* Right Text - URE */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute right-4 md:right-0 z-10 flex flex-col items-end translate-y-[35%] md:translate-y-0"
                >
                    <h1 className="text-[clamp(3.5rem,15vw,12rem)] md:text-[clamp(4rem,12vw,12rem)] font-serif leading-[0.8] text-foreground">
                        URE
                    </h1>
                </motion.div>

                {/* Central Arch Image */}
                <motion.div
                    style={{ y: y }}
                    initial={{ y: 100, opacity: 0, scale: 0.9 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-5 w-[75vw] sm:w-[60vw] md:w-[clamp(300px,40vw,600px)] h-[400px] sm:h-[500px] md:h-[clamp(450px,60vh,800px)] rounded-[180px_180px_0_0] md:rounded-[300px_300px_0_0] overflow-hidden"
                >
                    <Image
                        src="/assets/featured_necklace.png"
                        alt="Hero Jewelry"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/10"></div>
                </motion.div>

                {/* Subtitle & CTA */}
                <motion.div
                    style={{ opacity: opacity }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="absolute bottom-[8vh] md:bottom-[5vh] left-1/2 -translate-x-1/2 text-center z-20 w-full px-4"
                >
                    <p className="uppercase tracking-[4px] md:tracking-[6px] mb-6 md:mb-8 text-[0.7rem] md:text-[0.9rem] font-semibold opacity-60">
                        Collection &bull; 2026
                    </p>
                    <button className="bg-primary text-white px-8 md:px-10 py-3 md:py-4 rounded-full uppercase text-[0.75rem] md:text-[0.9rem] tracking-widest shadow-[0_10px_20px_rgba(158,63,80,0.3)] hover:scale-105 transition-all active:scale-95">
                        View Campaign
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
