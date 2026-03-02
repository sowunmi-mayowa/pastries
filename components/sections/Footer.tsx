'use client';

import { Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2C1810] text-white py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="font-playfair text-3xl mb-4">
                Maison Élise
              </h3>
              <p className="text-white/70 leading-relaxed">
                L'art de la pâtisserie française,
                réinventé avec passion et authenticité
                au cœur de Paris.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4 text-[#B8956A]">
                Navigation
              </h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Nos Créations
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Commander
                  </button>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    Notre Histoire
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4 text-[#B8956A]">
                Suivez-nous
              </h4>
              <div className="flex gap-4 mb-6">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#B8956A] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#B8956A] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="mailto:contact@maisonelise.fr"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#B8956A] transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <p className="text-white/70 text-sm">
                42 Rue de la Paix<br />
                75008 Paris, France<br />
                +33 1 42 86 82 00
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {currentYear} Maison Élise Pâtisserie. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
