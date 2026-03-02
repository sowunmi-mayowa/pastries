'use client';

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import MenuShowcase from '@/components/sections/MenuShowcase';
import PreOrderForm from '@/components/sections/PreOrderForm';
import Testimonials from '@/components/sections/Testimonials';
import Location from '@/components/sections/Location';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFBF5]">
      <Hero />
      <About />
      <MenuShowcase />
      <PreOrderForm />
      <Testimonials />
      <Location />
      <Footer />
    </main>
  );
}
