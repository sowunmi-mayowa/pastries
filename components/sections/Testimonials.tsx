'use client';

import { useState, useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
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

  const testimonials = [
    {
      name: 'Sophie Moreau',
      location: 'Paris 8ème',
      text: 'Une véritable pépite dans le quartier ! Les croissants sont absolument divins, croustillants à souhait et avec un goût de beurre incomparable. Le personnel est adorable et l\'ambiance raffinée.',
      rating: 5
    },
    {
      name: 'Thomas Bernard',
      location: 'Paris 16ème',
      text: 'J\'ai commandé un gâteau personnalisé pour l\'anniversaire de ma femme. Le résultat était au-delà de nos attentes : magnifique visuellement et délicieux. Un vrai savoir-faire artisanal.',
      rating: 5
    },
    {
      name: 'Amélie Petit',
      location: 'Neuilly-sur-Seine',
      text: 'Depuis que j\'ai découvert Maison Élise, je ne peux plus m\'en passer. Les éclairs au chocolat sont une tuerie et les macarons sont parfaits. C\'est devenu mon rituel du dimanche !',
      rating: 5
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-br from-[#2C1810] to-[#3D2415] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDM0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wLTIwYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-sm tracking-[0.3em] text-[#B8956A] font-medium uppercase mb-4 block">
            Témoignages
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl mb-6">
            Ils Adorent nos Créations
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Découvrez ce que nos clients disent de leur expérience
            chez Maison Élise
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Quote className="w-10 h-10 text-[#B8956A] mb-4" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#B8956A] text-[#B8956A]" />
                ))}
              </div>

              <p className="text-white/90 leading-relaxed mb-6 text-lg">
                "{testimonial.text}"
              </p>

              <div className="border-t border-white/20 pt-4">
                <p className="font-playfair text-xl text-white font-semibold mb-1">
                  {testimonial.name}
                </p>
                <p className="text-[#B8956A] text-sm">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-white/70">
            <Star className="w-5 h-5 fill-[#B8956A] text-[#B8956A]" />
            <span className="text-lg">Note moyenne : 5.0/5 sur Google</span>
          </div>
        </div>
      </div>
    </section>
  );
}
