"use client";
import React from 'react';
import Image from 'next/image';
import FadeIn from './FadeIn';
import { motion } from 'framer-motion';
import Link from 'next/link';

const articles = [
    { title: "Styling Gold for Summer", date: "June 20, 2026", image: "/assets/journal_cover.png" },
    { title: "The History of Pink Sapphires", date: "May 15, 2026", image: "/assets/pendant.png" },
    { title: "Paris Fashion Week Diary", date: "April 02, 2026", image: "/assets/composition.png" },
];

export default function Journal() {
    return (
        <section id="journal" className="py-20 md:py-32 bg-background">
            <div className="container">
                <FadeIn>
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-4 mb-12 md:mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif">The Journal</h2>
                        <Link href="#" className="uppercase tracking-[2px] text-[0.8rem] border-b border-foreground/30 hover:border-foreground transition-colors pb-1">
                            Read All Stories
                        </Link>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {articles.map((article, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <motion.div
                                className="group cursor-pointer"
                                whileHover="hover"
                                initial="rest"
                                animate="rest"
                            >
                                <div className="relative h-[300px] md:h-[400px] mb-6 overflow-hidden rounded-[4px]">
                                    <motion.div
                                        variants={{
                                            rest: { scale: 1 },
                                            hover: { scale: 1.05 }
                                        }}
                                        transition={{ duration: 0.6 }}
                                        className="w-full h-full relative"
                                    >
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </motion.div>
                                </div>
                                <span className="uppercase text-[0.7rem] md:text-[0.8rem] opacity-60 tracking-widest block mb-2">
                                    {article.date}
                                </span>
                                <h3 className="font-serif text-xl md:text-2xl group-hover:text-primary transition-colors">
                                    {article.title}
                                </h3>
                            </motion.div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
