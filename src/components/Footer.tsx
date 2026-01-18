"use client";
import React from 'react';
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background text-foreground border-t border-black/5 pt-20 pb-10">
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

                {/* Brand Column */}
                <div className="lg:col-span-1">
                    <h2 className="font-serif text-3xl mb-8 tracking-[4px]">UXORA</h2>
                    <p className="text-foreground/60 leading-loose max-w-sm tracking-wide text-sm md:text-base">
                        Handcrafted in Paris using ethically sourced materials. Merging timeless elegance with modern artistic vision.
                    </p>
                </div>

                {/* Shop Links */}
                <div>
                    <h4 className="uppercase text-[0.8rem] tracking-[2px] mb-8 font-semibold">Shop</h4>
                    <ul className="flex flex-col gap-4 text-foreground/60 text-sm md:text-base">
                        <li><Link href="#" className="hover:text-primary transition-colors tracking-wide">New Arrivals</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors tracking-wide">Rings</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors tracking-wide">Necklaces</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors tracking-wide">Earrings</Link></li>
                    </ul>
                </div>

                {/* Maison Links */}
                <div>
                    <h4 className="uppercase text-[0.8rem] tracking-[2px] mb-8 font-semibold">Maison</h4>
                    <ul className="flex flex-col gap-4 text-foreground/60 text-sm md:text-base">
                        <li><Link href="#" className="hover:text-primary transition-colors tracking-wide">The Atelier</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors tracking-wide">Sustainability</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors tracking-wide">Stores</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors tracking-wide">Contact</Link></li>
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h4 className="uppercase text-[0.8rem] tracking-[2px] mb-8 font-semibold">Follow</h4>
                    <ul className="flex flex-col gap-4 text-foreground/60 text-sm md:text-base">
                        <li><Link href="#" className="hover:text-primary transition-colors tracking-wide">Instagram</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors tracking-wide">Pinterest</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors tracking-wide">TikTok</Link></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="container pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[0.7rem] md:text-[0.8rem] text-foreground/40 uppercase tracking-[1px]">
                <p>&copy; {currentYear} UXORA Paris. All Rights Reserved.</p>
                <div className="flex gap-8">
                    <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
