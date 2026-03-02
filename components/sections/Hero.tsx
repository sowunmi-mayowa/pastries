'use client';

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToOrder = () => {
    document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FFF8F0] via-[#FFFBF5] to-[#FFF3E6]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmNWU4ZDgiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAtMjBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className={`text-center lg:text-left transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-block mb-4">
              <span className="text-sm tracking-[0.3em] text-[#8B6F47] font-medium uppercase">
                Depuis 2025
              </span>
            </div>

            <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#2C1810] mb-6 leading-tight">
              L'Art de la
              <span className="block text-[#B8956A] italic mt-2">Pâtisserie</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#5C4A3A] mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Des créations artisanales réalisées chaque jour avec passion et savoir-faire,
              au cœur de Paris.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToOrder}
                size="lg"
                className="bg-[#2C1810] hover:bg-[#3D2415] text-white px-8 py-6 text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Commander en ligne
              </Button>

              <Button
                onClick={scrollToMenu}
                size="lg"
                variant="outline"
                className="border-2 border-[#B8956A] text-[#2C1810] hover:bg-[#B8956A] hover:text-white px-8 py-6 text-base rounded-full transition-all duration-300 hover:scale-105"
              >
                Voir notre menu
              </Button>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] bg-gradient-to-br from-[#F5E8D8] to-[#E8D5C4]">
                <img
                  src="https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Pâtisseries artisanales"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
                <p className="text-sm text-[#8B6F47] mb-1">Aujourd'hui</p>
                <p className="font-playfair text-2xl text-[#2C1810] mb-1">Croissants frais</p>
                <p className="text-sm text-[#5C4A3A]">Sortis du four à 7h</p>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-[#B8956A] text-white p-6 rounded-2xl shadow-xl">
              <p className="text-sm mb-1">Ouvert</p>
              <p className="font-playfair text-xl font-semibold">7h - 19h</p>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToMenu}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#8B6F47] hover:text-[#2C1810] transition-all duration-300 animate-bounce"
        aria-label="Défiler vers le bas"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
