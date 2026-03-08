"use client";

import { useState, useEffect, useRef } from "react";
import { MapPin, Clock, Phone, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/components/LanguageProvider";

export default function Location() {
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

  const openingHours = tr.location.openingHours;

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="text-sm tracking-[0.3em] text-[#B8956A] font-medium uppercase mb-4 block">
            {tr.location.smallLabel}
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl text-[#2C1810] mb-6">
            {tr.location.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 delay-200 transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-full min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F5E8D8] to-[#E8D5C4]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2947384533043!2d2.3344!3d48.8606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUxJzM4LjIiTiAywrAyMCcwMy44IkU!5e0!3m2!1sfr!2sfr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FFF8F0] flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#B8956A]" />
                </div>
                <div>
                  <h3 className="font-playfair text-2xl text-[#2C1810] mb-2">
                    {tr.location.addressTitle}
                  </h3>
                  <p className="text-[#5C4A3A] text-lg leading-relaxed">
                    {tr.location.addressLines.map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                  <Button
                    variant="link"
                    className="text-[#B8956A] hover:text-[#8B6F47] p-0 h-auto mt-2"
                    onClick={() =>
                      window.open("https://maps.google.com", "_blank")
                    }
                  >
                    {tr.location.openButton}
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FFF8F0] flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#B8956A]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-playfair text-2xl text-[#2C1810] mb-3">
                    {tr.location.hoursTitle}
                  </h3>
                  <div className="space-y-2">
                    {openingHours.map((schedule) => (
                      <div
                        key={schedule.day}
                        className="flex justify-between items-center py-2 border-b border-[#E8D5C4] last:border-0"
                      >
                        <span className="text-[#5C4A3A] font-medium">
                          {schedule.day}
                        </span>
                        <span className="text-[#2C1810] font-semibold">
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FFF8F0] flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#B8956A]" />
                </div>
                <div>
                  <h3 className="font-playfair text-2xl text-[#2C1810] mb-2">
                    {tr.location.contactTitle}
                  </h3>
                  <p className="text-[#5C4A3A] text-lg mb-1">
                    {tr.location.phone}
                  </p>
                  <p className="text-[#5C4A3A] text-lg">{tr.location.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FFF8F0] flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-[#B8956A]" />
                </div>
                <div>
                  <h3 className="font-playfair text-2xl text-[#2C1810] mb-2">
                    {tr.location.followTitle}
                  </h3>
                  <Button
                    variant="link"
                    className="text-[#B8956A] hover:text-[#8B6F47] p-0 h-auto text-lg"
                    onClick={() =>
                      window.open("https://instagram.com", "_blank")
                    }
                  >
                    {tr.location.instaLabel}
                  </Button>
                  <p className="text-[#5C4A3A] text-sm mt-2">
                    {tr.location.followNote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
