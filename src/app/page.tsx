import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ShopByCategories from '@/components/ShopByCategories';
import Marquee from '@/components/Marquee';
import AboutAtelier from '@/components/AboutAtelier';
import FeaturedCollection from '@/components/FeaturedCollection';
import SavoirFaire from '@/components/SavoirFaire';
import ProductShowcase from '@/components/ProductShowcase';
import Journal from '@/components/Journal';
import Newsletter from '@/components/Newsletter';

import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/10">
      <Navbar />
      <Hero />
      <Marquee />
      <AboutAtelier />
      <ShopByCategories />
      <SavoirFaire />
      <FeaturedCollection />
      <ProductShowcase />
      <Journal />
      <Newsletter />
      <Footer />
    </main>
  );
}
