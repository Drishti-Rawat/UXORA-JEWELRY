"use client";
import React from 'react';
import Image from 'next/image';
import FadeIn from './FadeIn';
import { motion } from 'framer-motion';

export default function FeaturedCollection() {
    const items = [
        { id: 1, name: "Orchid Locket", price: "$12,500", image: "/assets/pendant.png" },
        { id: 2, name: "Hammered Gold", price: "$9,200", image: "/assets/bracelet.png" },
        { id: 3, name: "Heirloom Trio", price: "Price on Request", image: "/assets/composition.png" },
    ];

    return (
        <section id="floral" className="py-24 md:py-32 bg-background relative">
            <div className="container px-0 md:px-4 max-w-full md:max-w-[1400px]">
                <FadeIn>
                    <div className="text-center mb-12 md:mb-20 px-4">
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-foreground">
                            The <span className="italic text-primary">Floral</span> Edit
                        </h2>
                        <p className="mt-4 text-foreground/60 max-w-lg mx-auto uppercase tracking-[3px] text-[0.7rem] font-bold">
                            A curation of our most delicate natural forms.
                        </p>
                    </div>
                </FadeIn>

                {/* Grid with improved gap and more balanced sizing */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10 lg:gap-16 justify-items-center">
                    {items.map((item, index) => (
                        <FadeIn key={item.id} delay={index * 0.1} direction="up" className="w-full flex justify-center">
                            <motion.div
                                className="w-[80vw] md:w-full md:max-w-[300px] lg:max-w-[380px] h-[450px] md:h-[420px] lg:h-[580px] group cursor-pointer relative"
                                whileHover="hover"
                                initial="rest"
                                animate="rest"
                            >
                                {/* Arch Image Container */}
                                <div className="absolute inset-0 bottom-24 overflow-hidden rounded-[160px_160px_0_0] md:rounded-[250px_250px_0_0]">
                                    <motion.div
                                        variants={{
                                            rest: { scale: 1 },
                                            hover: { scale: 1.05 }
                                        }}
                                        transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
                                        className="w-full h-full relative"
                                    >
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </motion.div>

                                    {/* Subtle Overlay */}
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-700"></div>
                                </div>

                                {/* Text Details */}
                                <div className="absolute bottom-0 left-0 w-full text-center h-20 md:h-24 flex flex-col justify-center">
                                    <h3 className="text-xl md:text-2xl font-serif text-foreground group-hover:text-primary transition-colors duration-300">
                                        {item.name}
                                    </h3>
                                    <p className="text-[0.9rem] text-foreground/40 tracking-[2px] uppercase mt-1 font-semibold">
                                        {item.price}
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
