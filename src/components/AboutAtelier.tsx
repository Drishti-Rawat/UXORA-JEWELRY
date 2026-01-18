"use client";
import React from 'react';
import Image from 'next/image';
import FadeIn from './FadeIn';

export default function AboutAtelier() {
    return (
        <section id="atelier" className="py-20 md:py-28 bg-background">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Text Side - Order 1 on mobile */}
                <div className="order-1 md:order-2">
                    <FadeIn>
                        <div className="max-w-xl">
                            <span className="uppercase tracking-[4px] mb-4 text-[0.8rem] text-primary block font-medium">The Atelier</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight">
                                Crafting <span className="italic text-primary">Elegance</span> <br className="hidden md:block" /> Since 1980
                            </h2>
                            <p className="text-foreground/70 leading-relaxed mb-10 text-base md:text-lg">
                                Nestled in the heart of Paris, our atelier is a sanctuary of creativity.
                                Every gem is hand-selected, every mold is hand-cast.
                                We believe in jewelry that breathes, moves, and lives with you.
                            </p>
                            <div className="flex gap-12 md:gap-16">
                                <div className="stat-item">
                                    <span className="block text-3xl md:text-4xl font-serif">40+</span>
                                    <span className="text-[0.7rem] md:text-[0.8rem] opacity-60 uppercase tracking-wider">Years</span>
                                </div>
                                <div className="stat-item">
                                    <span className="block text-3xl md:text-4xl font-serif">12k</span>
                                    <span className="text-[0.7rem] md:text-[0.8rem] opacity-60 uppercase tracking-wider">Clients</span>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* Image Side - Order 2 on mobile with clean 3-sided frame */}
                <div className="order-2 md:order-1">
                    <FadeIn direction="left">
                        <div className="relative group max-w-lg mx-auto md:mx-0">
                            {/* Clean 3-Sided Frame (Top, Bottom, Left) in Primary Maroon */}
                            <div className="absolute -top-4 -bottom-4 -left-4 w-3/4 border-t border-b border-l border-primary/30 pointer-events-none transition-colors duration-500 group-hover:border-primary/60"></div>

                            <div className="relative h-[380px] md:h-[500px] lg:h-[550px] w-full overflow-hidden rounded-[2px] shadow-xl">
                                <Image
                                    src="/assets/composition.png"
                                    alt="Atelier Composition"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
