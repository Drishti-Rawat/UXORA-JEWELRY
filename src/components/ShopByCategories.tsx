"use client";
import React from 'react';
import Image from 'next/image';
import FadeIn from './FadeIn';
import { motion } from 'framer-motion';
import Link from 'next/link';

const categories = [
    { id: 1, name: "Rings", image: "/assets/cat_rings.png", description: "Eternal symbols of union", number: "01" },
    { id: 2, name: "Necklaces", image: "/assets/cat_necklaces.png", description: "Grace for every neckline", number: "02" },
    { id: 3, name: "Earrings", image: "/assets/cat_earrings.png", description: "Light reflecting stories", number: "03" },
];

export default function ShopByCategories() {
    return (
        <section className="py-24 md:py-32 bg-background overflow-hidden">
            <div className="container px-4 sm:px-6 lg:px-8 max-w-[1400px]">
                <FadeIn>
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-6">
                        <div className="max-w-xl">
                            <span className="uppercase tracking-[6px] text-[0.7rem] text-primary/60 font-bold block mb-4">Curated Choice</span>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif leading-tight">
                                Explore <span className="italic">Categories</span>
                            </h2>
                        </div>
                        <p className="text-foreground/50 text-sm md:text-base max-w-xs leading-relaxed font-medium uppercase tracking-widest">
                            Discover the art of curation across our signature pieces.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
                    {categories.map((cat, index) => (
                        <FadeIn key={cat.id} delay={index * 0.15} direction="up">
                            <Link href="#" className="group block relative max-w-[340px] mx-auto">
                                <div className="relative aspect-4/5 overflow-hidden rounded-[2px] transition-transform duration-700 bg-secondary/10 shadow-lg">
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
                                        {/* Artistic Overlay */}
                                        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-700"></div>
                                    </motion.div>

                                    {/* Numbering */}
                                    <div className="absolute top-6 left-6 text-white/40 font-serif text-lg tracking-widest">
                                        {cat.number}
                                    </div>
                                </div>

                                <div className="mt-8 relative transition-transform duration-500 group-hover:-translate-y-2">
                                    <div className="flex items-center gap-4 mb-2">
                                        <span className="w-8 h-px bg-primary/30 group-hover:w-12 group-hover:bg-primary transition-all duration-500"></span>
                                        <h3 className="text-2xl lg:text-3xl font-serif text-foreground group-hover:text-primary transition-colors">
                                            {cat.name}
                                        </h3>
                                    </div>
                                    <p className="text-[0.75rem] md:text-[0.8rem] text-foreground/40 uppercase tracking-[2px] font-semibold pl-12">
                                        {cat.description}
                                    </p>

                                    {/* Reveal on Hover element */}
                                    <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[0.6rem] tracking-[4px] uppercase font-bold text-primary">
                                        Shop Now &rarr;
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
