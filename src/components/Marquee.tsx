"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Marquee() {
    const text = "HANDCRAFTED IN PARIS • ETHICALLY SOURCED • LIFETIME WARRANTY • ";

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="py-6 md:py-8 bg-transparent overflow-hidden whitespace-nowrap relative border-y border-black/5"
        >
            <motion.div
                animate={{ x: [0, -1000] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 30
                }}
                className="inline-block text-[0.7rem] md:text-[0.9rem] tracking-[3px] md:tracking-[4px] text-foreground uppercase font-light opacity-80"
            >
                {text.repeat(10)}
            </motion.div>
        </motion.div>
    );
}
