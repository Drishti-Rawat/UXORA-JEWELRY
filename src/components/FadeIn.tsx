"use client";
import React from 'react';
import { motion } from 'framer-motion';

type FadeInProps = {
    children: React.ReactNode;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
    className?: string;
    style?: React.CSSProperties;
};

export default function FadeIn({ children, delay = 0, direction = 'up', className, style }: FadeInProps) {
    const directionOffset = {
        up: { y: 40 },
        down: { y: -40 },
        left: { x: 40 },
        right: { x: -40 },
    };

    return (
        <motion.div
            initial={{ opacity: 0, ...directionOffset[direction] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }} // Bezier for smooth "luxury" feel
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    );
}
