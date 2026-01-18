"use client";
import React from 'react';
import Image from 'next/image';
import FadeIn from './FadeIn';
import { motion } from 'framer-motion';

export default function SavoirFaire() {
    return (
        <section className="py-20 md:py-28 bg-[#F8F5F0] relative overflow-hidden">
            <div className="container flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">

                {/* Image Side with Clean 3-Sided Frame (Top, Bottom, Right) */}
                <div className="w-full md:w-1/2 relative">
                    <FadeIn direction="right">
                        <div className="relative group max-w-lg mx-auto md:ml-auto md:mr-0">
                            {/* Clean 3-Sided Frame (Top, Bottom, Right) in Primary Maroon */}
                            <div className="absolute -top-4 -bottom-4 -right-4 w-3/4 border-t border-b border-r border-primary/30 pointer-events-none transition-colors duration-500 group-hover:border-primary/60"></div>

                            <div className="relative h-[380px] md:h-[500px] lg:h-[550px] w-full overflow-hidden rounded-[2px] shadow-xl">
                                <Image
                                    src="/assets/craftsmanship.png"
                                    alt="Design Process"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </FadeIn>
                </div>

                <div className="w-full md:w-1/2">
                    <FadeIn delay={0.2} direction="left">
                        <div className="max-w-xl">
                            <span className="uppercase tracking-[4px] mb-4 text-[0.8rem] text-primary block font-medium">Savoir-Faire</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight">
                                From Sketch <br /> to <span className="italic text-primary">Soul</span>
                            </h2>
                            <p className="text-foreground/70 leading-relaxed mb-10 text-base md:text-lg">
                                Our artisans dedicate hundreds of hours to a single piece.
                                It begins with a dream on paper—a charcoal line, a wash of watercolor—and
                                culminates in the precise setting of ethically sourced gems.
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-transparent border border-foreground/30 px-8 py-4 uppercase text-[0.8rem] tracking-[2px] hover:border-primary hover:text-primary transition-all duration-300"
                            >
                                View The Process
                            </motion.button>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
