"use client";
import React from 'react';
import Image from 'next/image';
import FadeIn from './FadeIn';
import { motion } from 'framer-motion';
import Link from 'next/link';

const categories = [
    { id: 1, name: "Rings", image: "/assets/cat_rings.png", number: "01" },
    { id: 2, name: "Necklaces", image: "/assets/cat_necklaces.png", number: "02" },
    { id: 3, name: "Earrings", image: "/assets/cat_earrings.png", number: "03" },
];

export default function ShopByCategories() {
    return (
        <section id="curated" className="py-24 md:py-32 bg-background overflow-hidden">
            <div className="container px-4">
                <FadeIn>
                    <div className="text-center mb-16 md:mb-24 px-4">
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-foreground">
                            Explore <span className="italic">Dimensions</span>
                        </h2>
                        <p className="mt-4 text-foreground/50 text-[0.7rem] md:text-base font-medium uppercase tracking-[4px]">
                            Discover the art of curation across our signature pieces.
                        </p>
                    </div>
                </FadeIn>

                {/* Oval UI with reduced sizing and elegant spacing */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10 lg:gap-16 justify-items-center">
                    {categories.map((cat, index) => (
                        <FadeIn key={cat.id} delay={index * 0.1} direction="up" className="w-full flex justify-center">
                            <Link href="#" className="group block relative w-full max-w-[300px] md:max-w-none lg:max-w-[380px]">
                                <div className="relative h-[450px] md:h-[420px] lg:h-[580px] overflow-hidden rounded-[220px] shadow-lg transition-transform duration-700 bg-secondary/10 group-hover:shadow-2xl">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
                                        className="w-full h-full relative"
                                    >
                                        <Image
                                            src={cat.image}
                                            alt={cat.name}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-700"></div>
                                    </motion.div>

                                    {/* Centered Name for Categorical Impact */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-serif tracking-[6px] uppercase text-center px-4 transition-transform duration-700 group-hover:scale-110">
                                            {cat.name}
                                        </h3>
                                    </div>

                                    {/* Numbering Overlay */}
                                    <div className="absolute top-10 left-1/2 -translate-x-1/2 text-white/40 font-serif text-lg tracking-widest">
                                        {cat.number}
                                    </div>
                                </div>
                            </Link>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
