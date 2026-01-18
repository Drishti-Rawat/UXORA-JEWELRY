"use client";
import React from 'react';
import FadeIn from './FadeIn';

export default function Newsletter() {
    return (
        <section id="newsletter" className="py-20 md:py-32 bg-secondary text-foreground relative overflow-hidden">
            <div className="container px-6 flex flex-col items-center text-center max-w-4xl">
                <FadeIn direction="up">
                    <span className="uppercase text-[0.8rem] md:text-[0.9rem] tracking-[4px] mb-6 block opacity-70">
                        The Inner Circle
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
                        Unlock Exclusive <br /> <span className="italic">Access</span>
                    </h2>
                    <p className="text-base md:text-lg opacity-80 mb-10 md:mb-12 max-w-lg mx-auto leading-relaxed">
                        Be the first to explore our limited-edition drops and receive private invitations to our Parisian atelier events.
                    </p>

                    <form className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 bg-transparent border-b border-foreground/30 py-4 focus:border-foreground outline-none transition-colors font-sans text-base"
                        />
                        <button className="bg-foreground text-background px-10 py-4 uppercase text-[0.8rem] tracking-[2px] hover:bg-primary hover:text-white transition-all duration-300 font-medium whitespace-nowrap">
                            Subscribe
                        </button>
                    </form>

                    <p className="text-[0.7rem] opacity-50 mt-6 tracking-wide">
                        By subscribing, you accept our Privacy Policy. Unsubscribe anytime.
                    </p>
                </FadeIn>
            </div>
        </section>
    );
}
