import { useState, useEffect, useRef } from "react";
import { Award, Heart, Wheat } from "lucide-react";
import { useTranslations } from "@/components/LanguageProvider";

export default function About() {
  const tr = useTranslations();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const values = tr.about.values;

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-sm tracking-[0.3em] text-[#B8956A] font-medium uppercase mb-4 block">
              {tr.about.smallLabel}
            </span>
            <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl text-[#2C1810] mb-6">
              {tr.about.title}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div
              className={`transition-all duration-1000 delay-200 transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#F5E8D8] to-[#E8D5C4]">
                  <img
                    src="https://images.pexels.com/photos/6479607/pexels-photo-6479607.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Artisan pâtissier au travail"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-300 transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            >
              <p className="text-lg text-[#5C4A3A] leading-relaxed mb-6">
                <span className="font-playfair text-xl text-[#2C1810] font-semibold">
                  {tr.nav.siteTitle}
                </span>
                , {tr.about.p1}
              </p>

              <p className="text-lg text-[#5C4A3A] leading-relaxed mb-6">
                {tr.about.p2}
              </p>

              <p className="text-lg text-[#5C4A3A] leading-relaxed">
                {tr.about.p3}
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`text-center transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FFF8F0] mb-4">
                  {index === 0 ? (
                    <Wheat className="w-8 h-8 text-[#B8956A]" />
                  ) : index === 1 ? (
                    <Heart className="w-8 h-8 text-[#B8956A]" />
                  ) : (
                    <Award className="w-8 h-8 text-[#B8956A]" />
                  )}
                </div>
                <h3 className="font-playfair text-xl text-[#2C1810] mb-2">
                  {value.title}
                </h3>
                <p className="text-[#5C4A3A]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
