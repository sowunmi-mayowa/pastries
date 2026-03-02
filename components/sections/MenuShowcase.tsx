'use client';

import { useState, useEffect, useRef } from 'react';

export default function MenuShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const pastries = [
    {
      name: 'Croissant au Beurre',
      description: 'Feuilletage croustillant au beurre AOP de Normandie',
      price: '2.50',
      image: 'https://images.pexels.com/photos/2135677/pexels-photo-2135677.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Éclair Chocolat',
      description: 'Pâte à choux garnie de crème pâtissière au chocolat Valrhona',
      price: '4.80',
      image: 'https://images.pexels.com/photos/4686960/pexels-photo-4686960.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Tarte aux Framboises',
      description: 'Pâte sablée, crème d\'amande et framboises fraîches',
      price: '6.50',
      image: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Mille-feuille',
      description: 'Feuilletage caramélisé et crème mousseline vanille Bourbon',
      price: '5.20',
      image: 'https://images.pexels.com/photos/12737652/pexels-photo-12737652.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Paris-Brest',
      description: 'Pâte à choux pralinée, crème mousseline praliné maison',
      price: '5.80',
      image: 'https://images.pexels.com/photos/6940998/pexels-photo-6940998.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Macarons Assortis',
      description: 'Assortiment de 6 macarons aux saveurs variées',
      price: '12.00',
      image: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="menu" ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-br from-[#FFFBF5] to-[#FFF8F0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-sm tracking-[0.3em] text-[#B8956A] font-medium uppercase mb-4 block">
            Nos Créations
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl text-[#2C1810] mb-6">
            Signatures de la Maison
          </h2>
          <p className="text-lg text-[#5C4A3A] max-w-2xl mx-auto">
            Découvrez nos spécialités confectionnées quotidiennement
            avec des ingrédients d'exception
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pastries.map((pastry, index) => (
            <div
              key={pastry.name}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F5E8D8]">
                <img
                  src={pastry.image}
                  alt={pastry.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-playfair text-2xl text-[#2C1810] flex-1">
                    {pastry.name}
                  </h3>
                  <span className="font-playfair text-2xl text-[#B8956A] font-semibold ml-2">
                    {pastry.price}€
                  </span>
                </div>

                <p className="text-[#5C4A3A] leading-relaxed">
                  {pastry.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#5C4A3A] italic">
            * Nos créations sont disponibles selon arrivage et saison
          </p>
        </div>
      </div>
    </section>
  );
}
