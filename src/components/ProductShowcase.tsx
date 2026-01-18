"use client";
import React from 'react';
import Image from 'next/image';
import FadeIn from './FadeIn';
import { motion } from 'framer-motion';

const products = [
    {
        id: 1,
        name: "Prism Pink Ring",
        price: "$6,200",
        image: "/assets/bracelet.png",
        category: "Rings"
    },
    {
        id: 2,
        name: "Ethereal Drops",
        price: "$3,900",
        image: "/assets/hero_necklace.png",
        category: "Earrings"
    },
    {
        id: 3,
        name: "Eternity Bloom",
        price: "$18,500",
        image: "/assets/featured_necklace.png",
        category: "Necklaces"
    }
];

export default function ProductShowcase() {
    return (
        <section id="curated" className="py-20 md:py-32 bg-background">
            <div className="container">
                <FadeIn>
                    <div className="mb-12 md:mb-20 text-center">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground font-normal">
                            Curated Selection
                        </h2>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {products.map((product, index) => (
                        <FadeIn key={product.id} delay={index * 0.2}>
                            <motion.div
                                className="group"
                                whileHover="hover"
                                initial="rest"
                                animate="rest"
                            >
                                <div className="relative w-full aspect-4/5 rounded-xl overflow-hidden mb-6 bg-[#f0ece6] cursor-pointer">
                                    <motion.div
                                        variants={{
                                            rest: { scale: 1 },
                                            hover: { scale: 1.05 }
                                        }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        className="w-full h-full relative"
                                    >
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </motion.div>

                                    {/* Quick View Overlay (Visible on Hover / Hidden on Mobile mostly) */}
                                    <motion.div
                                        variants={{
                                            rest: { opacity: 0, y: 10 },
                                            hover: { opacity: 1, y: 0 }
                                        }}
                                        className="absolute inset-0 bg-black/5 flex items-center justify-center pointer-events-none md:pointer-events-auto"
                                    >
                                        <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full uppercase text-[0.7rem] tracking-[2px] font-medium shadow-xl">
                                            Quick View
                                        </div>
                                    </motion.div>
                                </div>

                                <div className="text-center">
                                    <p className="text-primary text-[0.7rem] md:text-[0.8rem] uppercase tracking-[2px] mb-2 font-semibold">
                                        {product.category}
                                    </p>
                                    <h3 className="text-xl md:text-2xl font-serif mb-2 text-foreground font-normal">
                                        {product.name}
                                    </h3>
                                    <p className="text-foreground/60 text-sm md:text-base font-sans tracking-wide">
                                        {product.price}
                                    </p>
                                </div>
                            </motion.div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
