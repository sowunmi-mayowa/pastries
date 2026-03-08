const translations = {
  fr: {
    nav: {
      siteTitle: "Maison Élise",
      menu: "Nos Créations",
      order: "Commander",
      about: "Notre Histoire",
      contact: "Contact",
      enLabel: "EN",
      frLabel: "FR",
    },
    hero: {
      since: "Depuis 2025",
      titleLine1: "L'Art de la",
      titleLine2: "Pâtisserie",
      paragraph:
        "Des créations artisanales réalisées chaque jour avec passion et savoir-faire,\nau cœur de Paris.",
      orderButton: "Commander en ligne",
      viewMenuButton: "Voir notre menu",
      todayLabel: "Aujourd'hui",
      todayItem: "Croissants frais",
      todaySub: "Sortis du four à 7h",
      openLabel: "Ouvert",
      hours: "7h - 19h",
      scrollAria: "Défiler vers le bas",
    },
    about: {
      smallLabel: "Notre Histoire",
      title: "Tradition & Excellence",
      p1: "Chez Maison Élise,\nnous perpétuons l'art de la pâtisserie française avec respect et modernité.",
      p2: "Chaque matin, nos artisans façonnent des créations uniques en utilisant\nexclusivement des ingrédients d'exception : beurre AOP de Normandie,\nfarine de meule, chocolat Valrhona, et fruits de saison sélectionnés\navec soin.",
      p3: "Notre passion se reflète dans chaque bouchée, de nos croissants dorés\nà nos entremets délicats. Nous créons des moments de bonheur gustatif\npour accompagner vos instants précieux.",
      values: [
        {
          title: "Ingrédients Nobles",
          description: "Beurre AOP, farine de meule, fruits de saison",
        },
        {
          title: "Fait Main",
          description: "Chaque création est façonnée avec amour",
        },
        {
          title: "Savoir-Faire",
          description: "Techniques traditionnelles françaises",
        },
      ],
    },
    menu: {
      smallLabel: "Nos Créations",
      title: "Signatures de la Maison",
      paragraph:
        "Découvrez nos spécialités confectionnées quotidiennement avec des\ningrédients d'exception",
      pastries: [
        {
          name: "Croissant au Beurre",
          description: "Feuilletage croustillant au beurre AOP de Normandie",
          price: "2.50",
          image:
            "https://images.pexels.com/photos/2135677/pexels-photo-2135677.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          name: "Éclair Chocolat",
          description:
            "Pâte à choux garnie de crème pâtissière au chocolat Valrhona",
          price: "4.80",
          image:
            "https://images.pexels.com/photos/4686960/pexels-photo-4686960.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          name: "Tarte aux Framboises",
          description: "Pâte sablée, crème d'amande et framboises fraîches",
          price: "6.50",
          image:
            "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          name: "Mille-feuille",
          description:
            "Feuilletage caramélisé et crème mousseline vanille Bourbon",
          price: "5.20",
          image:
            "https://images.unsplash.com/photo-1682263167429-0dbcf2c1e127?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
          name: "Paris-Brest",
          description: "Pâte à choux pralinée, crème mousseline praliné maison",
          price: "5.80",
          image:
            "https://images.pexels.com/photos/6940998/pexels-photo-6940998.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          name: "Macarons Assortis",
          description: "Assortiment de 6 macarons aux saveurs variées",
          price: "12.00",
          image:
            "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
      ],
      footnote: "* Nos créations sont disponibles selon arrivage et saison",
    },
    preorder: {
      smallLabel: "Commander en Ligne",
      title: "Pré-commandez vos Douceurs",
      paragraph:
        "Réservez vos créations préférées et venez les récupérer\nen boutique à l'heure qui vous convient",
      bullets: [
        {
          strong: "Retrait rapide :",
          text: " Commandez aujourd'hui, retirez demain",
        },
        {
          strong: "Personnalisation :",
          text: " Adaptez vos créations selon vos envies",
        },
        {
          strong: "Sans engagement :",
          text: " Annulation gratuite jusqu'à 24h avant",
        },
      ],
      successTitle: "Merci !",
      successText:
        "Votre pré-commande a bien été enregistrée.\nNous vous contacterons très prochainement.",
      toastTitle: "Pré-commande confirmée!",
      toastDesc:
        "Nous vous contacterons sous 24h pour confirmer votre commande.",
      fields: {
        name: "Votre nom *",
        email: "Votre email *",
        date: "Date de retrait *",
        product: "Produit souhaité *",
        namePlaceholder: "Marie Dubois",
        emailPlaceholder: "marie@exemple.fr",
        productPlaceholder: "Choisissez votre création",
        submit: "Confirmer ma pré-commande",
        submitting: "Envoi en cours...",
      },
      products: [
        "Croissant au Beurre",
        "Éclair Chocolat",
        "Tarte aux Framboises",
        "Mille-feuille",
        "Paris-Brest",
        "Macarons Assortis",
        "Gâteau personnalisé",
      ],
      contactNote:
        "Nous vous contacterons sous 24h pour confirmer votre commande",
    },
    testimonials: {
      smallLabel: "Témoignages",
      title: "Ils Adorent nos Créations",
      paragraph:
        "Découvrez ce que nos clients disent de leur expérience\nchez Maison Élise",
      list: [
        {
          name: "Sophie Moreau",
          location: "Paris 8ème",
          text: "Une véritable pépite dans le quartier ! Les croissants sont absolument divins, croustillants à souhait et avec un goût de beurre incomparable. Le personnel est adorable et l'ambiance raffinée.",
          rating: 5,
        },
        {
          name: "Thomas Bernard",
          location: "Paris 16ème",
          text: "J'ai commandé un gâteau personnalisé pour l'anniversaire de ma femme. Le résultat était au-delà de nos attentes : magnifique visuellement et délicieux. Un vrai savoir-faire artisanal.",
          rating: 5,
        },
        {
          name: "Amélie Petit",
          location: "Neuilly-sur-Seine",
          text: "Depuis que j'ai découvert Maison Élise, je ne peux plus m'en passer. Les éclairs au chocolat sont une tuerie et les macarons sont parfaits. C'est devenu mon rituel du dimanche !",
          rating: 5,
        },
      ],
      ratingNote: "Note moyenne : 5.0/5 sur Google",
    },
    location: {
      smallLabel: "Venez nous voir",
      title: "Notre Boutique",
      addressTitle: "Adresse",
      addressLines: ["42 Rue de la Paix", "75008 Paris", "France"],
      openButton: "Ouvrir dans Google Maps →",
      hoursTitle: "Horaires",
      openingHours: [
        { day: "Lundi - Vendredi", hours: "7h00 - 19h00" },
        { day: "Samedi", hours: "8h00 - 19h00" },
        { day: "Dimanche", hours: "8h00 - 14h00" },
      ],
      contactTitle: "Contact",
      phone: "+33 1 42 86 82 00",
      email: "contact@maisonelise.fr",
      followTitle: "Suivez-nous",
      instaLabel: "@maisoneliseparis →",
      followNote: "Découvrez nos créations quotidiennes",
    },
    footer: {
      name: "Maison Élise",
      tagline:
        "L'art de la pâtisserie française,\nréinventé avec passion et authenticité\nau cœur de Paris.",
      navigationTitle: "Navigation",
      navLinks: {
        creations: "Nos Créations",
        order: "Commander",
        about: "Notre Histoire",
        contact: "Contact",
      },
      followTitle: "Suivez-nous",
      addressBlock: [
        "42 Rue de la Paix",
        "75008 Paris, France",
        "+33 1 42 86 82 00",
      ],
      copyright: "© {year} Maison Élise Pâtisserie. Tous droits réservés.",
      legal: ["Mentions légales", "Politique de confidentialité", "CGV"],
    },
  },
  en: {
    nav: {
      siteTitle: "Maison Élise",
      menu: "Menu",
      order: "Order",
      about: "Our Story",
      contact: "Contact",
      enLabel: "EN",
      frLabel: "FR",
    },
    hero: {
      since: "Since 2025",
      titleLine1: "The Art of",
      titleLine2: "Pastry",
      paragraph:
        "Handcrafted creations made daily with passion and expertise,\nat the heart of Paris.",
      orderButton: "Order Online",
      viewMenuButton: "View Our Menu",
      todayLabel: "Today",
      todayItem: "Fresh Croissants",
      todaySub: "Out of the oven at 7am",
      openLabel: "Open",
      hours: "7am - 7pm",
      scrollAria: "Scroll down",
    },
    about: {
      smallLabel: "Our Story",
      title: "Tradition & Excellence",
      p1: "At Maison Élise, we carry on the art of French pastry with respect and modernity.",
      p2: "Every morning our artisans craft unique creations using only exceptional ingredients: AOP butter from Normandy, stone-milled flour, Valrhona chocolate, and carefully selected seasonal fruits.",
      p3: "Our passion is reflected in every bite, from our golden croissants to our delicate entremets. We create moments of gustatory happiness for your special occasions.",
      values: [
        {
          title: "Noble Ingredients",
          description: "AOP butter, stone-milled flour, seasonal fruits",
        },
        { title: "Handmade", description: "Each creation is shaped with love" },
        {
          title: "Craftsmanship",
          description: "Traditional French techniques",
        },
      ],
    },
    menu: {
      smallLabel: "Menu",
      title: "House Signatures",
      paragraph:
        "Discover our specialties made daily with exceptional ingredients",
      pastries: [
        {
          name: "Butter Croissant",
          description: "Crispy laminated pastry with AOP butter from Normandy",
          price: "2.50",
          image:
            "https://images.pexels.com/photos/2135677/pexels-photo-2135677.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          name: "Chocolate Éclair",
          description: "Choux filled with Valrhona chocolate pastry cream",
          price: "4.80",
          image:
            "https://images.pexels.com/photos/4686960/pexels-photo-4686960.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          name: "Raspberry Tart",
          description: "Shortcrust pastry, almond cream and fresh raspberries",
          price: "6.50",
          image:
            "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          name: "Mille-feuille",
          description:
            "Caramelized puff pastry and vanilla Bourbon mousseline cream",
          price: "5.20",
          image:
            "https://images.unsplash.com/photo-1682263167429-0dbcf2c1e127?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
          name: "Paris-Brest",
          description:
            "Praline choux pastry, homemade praline mousseline cream",
          price: "5.80",
          image:
            "https://images.pexels.com/photos/6940998/pexels-photo-6940998.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          name: "Assorted Macarons",
          description: "Assortment of 6 macarons with various flavors",
          price: "12.00",
          image:
            "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
      ],
      footnote:
        "* Our creations are available depending on delivery and season",
    },
    preorder: {
      smallLabel: "Order Online",
      title: "Pre-order Your Treats",
      paragraph:
        "Reserve your favorite creations and pick them up\nat the shop at a time that suits you",
      bullets: [
        { strong: "Quick pickup:", text: "Order today, pick up tomorrow" },
        {
          strong: "Customization:",
          text: "Adapt your creations to your desires",
        },
        {
          strong: "No commitment:",
          text: "Free cancellation up to 24h before",
        },
      ],
      successTitle: "Thank you!",
      successText:
        "Your pre-order has been received.\nWe will contact you shortly.",
      toastTitle: "Pre-order confirmed!",
      toastDesc: "We will contact you within 24h to confirm your order.",
      fields: {
        name: "Your name *",
        email: "Your email *",
        date: "Pickup date *",
        product: "Desired product *",
        namePlaceholder: "Marie Dubois",
        emailPlaceholder: "marie@example.com",
        productPlaceholder: "Choose your creation",
        submit: "Confirm my pre-order",
        submitting: "Sending...",
      },
      products: [
        "Butter Croissant",
        "Chocolate Éclair",
        "Raspberry Tart",
        "Mille-feuille",
        "Paris-Brest",
        "Assorted Macarons",
        "Custom Cake",
      ],
      contactNote: "We will contact you within 24h to confirm your order",
    },
    testimonials: {
      smallLabel: "Testimonials",
      title: "They Love Our Creations",
      paragraph:
        "Discover what our customers say about their experience\nat Maison Élise",
      list: [
        {
          name: "Sophie Moreau",
          location: "Paris 8th",
          text: "A true gem in the neighborhood! The croissants are absolutely divine, perfectly crisp with an incomparable buttery flavor. The staff is lovely and the atmosphere refined.",
          rating: 5,
        },
        {
          name: "Thomas Bernard",
          location: "Paris 16th",
          text: "I ordered a custom cake for my wife's birthday. The result exceeded our expectations: visually stunning and delicious. True artisanal craftsmanship.",
          rating: 5,
        },
        {
          name: "Amélie Petit",
          location: "Neuilly-sur-Seine",
          text: "Since discovering Maison Élise, I can\'t live without it. The chocolate éclairs are incredible and the macarons are perfect. It\'s become my Sunday ritual!",
          rating: 5,
        },
      ],
      ratingNote: "Average rating: 5.0/5 on Google",
    },
    location: {
      smallLabel: "Visit Us",
      title: "Our Shop",
      addressTitle: "Address",
      addressLines: ["42 Rue de la Paix", "75008 Paris", "France"],
      openButton: "Open in Google Maps →",
      hoursTitle: "Opening Hours",
      openingHours: [
        { day: "Monday - Friday", hours: "7:00 - 19:00" },
        { day: "Saturday", hours: "8:00 - 19:00" },
        { day: "Sunday", hours: "8:00 - 14:00" },
      ],
      contactTitle: "Contact",
      phone: "+33 1 42 86 82 00",
      email: "contact@maisonelise.fr",
      followTitle: "Follow Us",
      instaLabel: "@maisoneliseparis →",
      followNote: "Discover our daily creations",
    },
    footer: {
      name: "Maison Élise",
      tagline:
        "The art of French pastry, reinvented with passion and authenticity in the heart of Paris.",
      navigationTitle: "Navigation",
      navLinks: {
        creations: "Menu",
        order: "Order",
        about: "Our Story",
        contact: "Contact",
      },
      followTitle: "Follow Us",
      addressBlock: [
        "42 Rue de la Paix",
        "75008 Paris, France",
        "+33 1 42 86 82 00",
      ],
      copyright: "© {year} Maison Élise Pâtisserie. All rights reserved.",
      legal: ["Legal Notice", "Privacy Policy", "Terms"],
    },
  },
};

export default translations;
