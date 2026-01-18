"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { name: 'Collections', href: '#curated' },
  { name: 'Floral Edit', href: '#floral' },
  { name: 'Atelier', href: '#atelier' },
  { name: 'Journal', href: '#journal' },
  { name: 'Contact', href: '#newsletter' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-120 transition-all duration-700 ${scrolled || isOpen ? 'bg-background/95 backdrop-blur-md border-b border-black/5' : 'bg-transparent'
        } ${scrolled ? 'py-4 shadow-sm' : 'py-6 md:py-8'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center relative">
          <Link href="/" className="text-xl md:text-2xl font-bold tracking-[6px] font-serif cursor-pointer z-130 transition-colors duration-300">
            UXORA
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-10 text-[0.75rem] uppercase tracking-[3px] font-medium">
            {links.map((link) => (
              <Link key={link.name} href={link.href} className="hover-underline opacity-70 hover:opacity-100 transition-all duration-300">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-130 relative w-10 h-10 flex flex-col justify-center items-end gap-1.5 focus:outline-none group p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            <span className={`h-px bg-foreground transition-all duration-500 ease-in-out ${isOpen ? 'w-6 rotate-45 translate-y-[2px]' : 'w-6'}`}></span>
            <span className={`h-px bg-foreground transition-all duration-500 ease-in-out ${isOpen ? 'opacity-0' : 'w-4'}`}></span>
            <span className={`h-px bg-foreground transition-all duration-500 ease-in-out ${isOpen ? 'w-6 -rotate-45 -translate-y-[10px]' : 'w-6'}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-background z-115 flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center gap-8 md:gap-10">
              {links.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    className="text-3xl sm:text-4xl font-serif tracking-widest hover:text-primary transition-all duration-300 transform hover:scale-105"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 flex gap-8"
              >
                <Link href="#" className="text-[0.7rem] uppercase tracking-[3px] opacity-40 hover:opacity-100 transition-opacity">Instagram</Link>
                <Link href="#" className="text-[0.7rem] uppercase tracking-[3px] opacity-40 hover:opacity-100 transition-opacity">Journal</Link>
              </motion.div>
            </div>

            {/* Background Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-[0.03] select-none pointer-events-none">
              <span className="text-[25vw] font-serif font-bold tracking-[20px]">MAISON</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .hover-underline {
          position: relative;
          text-decoration: none;
          color: inherit;
        }
        .hover-underline::after {
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          bottom: -4px;
          left: 0;
          background-color: var(--primary);
          transition: width 0.3s ease;
        }
        .hover-underline:hover::after {
          width: 100%;
        }
      `}</style>
    </>
  );
}
