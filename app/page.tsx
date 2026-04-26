"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Assets
const ASSETS = {
  logo: "https://ext.same-assets.com/1029202330/2967527935.png",
  hero: "https://ext.same-assets.com/1029202330/2259727112.jpeg",
  about: "https://ext.same-assets.com/1029202330/3989974392.jpeg",
  food1: "https://ext.same-assets.com/1029202330/3430055907.jpeg",
  food2: "https://ext.same-assets.com/1029202330/3588785438.jpeg",
  food3: "https://ext.same-assets.com/1029202330/506737340.jpeg",
  food4: "https://ext.same-assets.com/1029202330/2942571765.jpeg",
  room1: "https://ext.same-assets.com/1029202330/3318683412.jpeg",
  room2: "https://ext.same-assets.com/1029202330/1631930218.jpeg",
  room3: "https://ext.same-assets.com/1029202330/2454548964.jpeg",
  dinner1: "https://ext.same-assets.com/1029202330/177157410.jpeg",
  chef1: "https://ext.same-assets.com/1029202330/280249362.jpeg",
  chocolate: "https://ext.same-assets.com/1029202330/593211661.jpeg", royale: "https://ext.same-assets.com/1029202330/1746235537.jpeg",
  sorbet: "https://ext.same-assets.com/1029202330/2007560254.jpeg",
  drink: "https://ext.same-assets.com/1029202330/2645717921.jpeg",
  private1: "https://ext.same-assets.com/1029202330/2559895079.jpeg",
  private3: "https://ext.same-assets.com/1029202330/3199029744.jpeg",
  male1: "https://ext.same-assets.com/1029202330/236309778.jpeg",
  male2: "https://ext.same-assets.com/1029202330/838643729.jpeg",
  male3: "https://ext.same-assets.com/1029202330/2725919955.jpeg",
  female1: "https://ext.same-assets.com/1029202330/2911150229.jpeg",
  female2: "https://ext.same-assets.com/1029202330/168031353.jpeg",
  brand1: "https://ext.same-assets.com/1029202330/841164250.png",
  brand2: "https://ext.same-assets.com/1029202330/641473091.png",
  brand3: "https://ext.same-assets.com/1029202330/2213790503.png",
  brand4: "https://ext.same-assets.com/1029202330/2174345155.png",
};

// Navigation Component
function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 relative">
              <svg viewBox="0 0 40 40" className="w-full h-full text-primary">
                <ellipse cx="20" cy="30" rx="18" ry="6" fill="currentColor" opacity="0.3"/>
                <path d="M4 28 Q20 10 36 28" stroke="currentColor" strokeWidth="3" fill="none"/>
                <circle cx="20" cy="14" r="4" fill="currentColor"/>
              </svg>
            </div>
            <span className="text-xl md:text-2xl font-playfair font-semibold text-primary">Royal Oyo Kitchen</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-sm text-gray-300 hover:text-primary transition-colors">Home</Link>
            <Link href="#about" className="text-sm text-gray-300 hover:text-primary transition-colors">About</Link>
            <Link href="#menu" className="text-sm text-gray-300 hover:text-primary transition-colors">Menu</Link>
            <Link href="#ambience" className="text-sm text-gray-300 hover:text-primary transition-colors">Ambience</Link>
            <Link href="#pricing" className="text-sm text-gray-300 hover:text-primary transition-colors">Pricing</Link>
            <Link href="#private" className="text-sm text-gray-300 hover:text-primary transition-colors">Private</Link>
            <Link href="#reservation" className="px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-all text-sm">
              Reservation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <Link href="#" className="text-gray-300 hover:text-primary transition-colors">Home</Link>
              <Link href="#about" className="text-gray-300 hover:text-primary transition-colors">About</Link>
              <Link href="#menu" className="text-gray-300 hover:text-primary transition-colors">Menu</Link>
              <Link href="#ambience" className="text-gray-300 hover:text-primary transition-colors">Ambience</Link>
              <Link href="#pricing" className="text-gray-300 hover:text-primary transition-colors">Pricing</Link>
              <Link href="#private" className="text-gray-300 hover:text-primary transition-colors">Private</Link>
              <Link href="#reservation" className="inline-block w-fit px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-all">
                Reservation
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={ASSETS.hero}
          alt="Fine Dining"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="section-divider" />
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair text-white mb-6 animate-fade-in-up">
          Experience the Art<br />of Fine Dining
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 animate-fade-in-up animation-delay-200">
          Premium cuisine prepared by world-class chefs in an elegant setting
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
          <Link
            href="#menu"
            className="px-8 py-3 bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
          >
            Signature Menu
          </Link>
          <Link
            href="#ambience"
            className="px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-white transition-all"
          >
            Our Ambience
          </Link>
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[400px] md:h-[600px] overflow-hidden">
            <Image
              src={ASSETS.about}
              alt="Restaurant Interior"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <div className="w-16 h-1 bg-gradient-gold mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-white mb-4">
              About Royal Oyo Kitchen 
            </h2>
            <p className="text-primary font-cormorant text-xl italic mb-6">
              Elegance • Craft • Excellence
            </p>
            <div className="space-y-4 text-gray-400 text-base leading-relaxed">
              <p>
                Royal Oyo Kitchen presents a luxurious culinary experience that blends French elegance, modern refinement, and world-class hospitality. Every dish is crafted to deliver a captivating journey of flavors.
              </p>
              <p>
                With a focus on premium seasonal ingredients, precise cooking techniques, and artistic presentation, Royal Oyo Kitchen stands as a destination for discerning guests who seek uncompromising quality.
              </p>
              <p>
                From the ambience to the plating and service, every detail of Royal Oyo Kitchen is designed to create moments that are not only delicious but truly memorable and refined.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <span className="text-primary font-cormorant italic text-lg">Royal Oyo Kitchen Fine Dining</span>
              <button type="button" className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Menu Section
function MenuSection() {
  const menuItems = [
    {
      name: "Wagyu Tenderloin A5",
      description: "Truffle, Asparagus, Cognac Sauce",
      price: "$158",
      image: ASSETS.food1,
    },
    {
      name: "Pan-Seared Foie Gras",
      description: "Brioche, Fig Compote, Balsamic Reduction",
      price: "$132",
      image: ASSETS.food2,
    },
    {
      name: "Atlantic Lobster Thermidor",
      description: "Gratinated, White Wine, Dijon Mustard",
      price: "$168",
      image: ASSETS.food3,
    },
    {
      name: "Truffle Risotto Nero",
      description: "Black Truffle, Parmesan, Squid Ink",
      price: "$98",
      image: ASSETS.food4,
    },
  ];

  return (
    <section id="menu" className="py-20 md:py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-divider" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-white mb-4">
            Signature Menu
          </h2>
          <p className="text-gray-400">Curated by our Executive Chef</p>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="card-border bg-[#0d0d0d] p-4 hover:card-border-highlight transition-all duration-300 hover-lift"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-cormorant italic text-primary">{item.name}</h3>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </div>
                <span className="text-primary font-medium">{item.price}</span>
              </div>
              <div className="relative h-48 mt-4 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Ambience Section
function AmbienceSection() {
  const images = [
    { src: ASSETS.room1, title: "Main Dining Hall" },
    { src: ASSETS.room2, title: "Private Booth" },
    { src: ASSETS.dinner1, title: "Fine Dining" },
    { src: ASSETS.room3, title: "Outdoor Terrace" },
    { src: ASSETS.chef1, title: "Chef's Table" },
    { src: ASSETS.chocolate, title: "Chocolate Sphere" },
    { src: ASSETS.royale, title: "Pairing Vault" },
    { src: ASSETS.sorbet, title: "Dessert Station" },
  ];

  return (
    <section id="ambience" className="py-20 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-divider" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-white mb-4">
            Our Ambience
          </h2>
          <p className="text-gray-400">An atmosphere of refined elegance</p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div key={index} className="group relative overflow-hidden">
              <div className="relative h-40 md:h-48">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
              </div>
              <p className="text-center text-gray-400 text-sm mt-2 font-cormorant italic">{img.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pricing Section
function PricingSection() {
  const packages = [
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="20" cy="20" r="15"/>
          <circle cx="20" cy="20" r="8"/>
          <circle cx="20" cy="20" r="3"/>
        </svg>
      ),
      name: "Tasting Menu",
      description: "7-course culinary journey featuring our chef's finest creations",
      price: "$1025",
      featured: false,
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 5L25 15H35L27 22L30 35L20 27L10 35L13 22L5 15H15L20 5Z"/>
        </svg>
      ),
      name: "Chef's Table",
      description: "Intimate 10-course experience at the chef's private table",
      price: "$2450",
      featured: true,
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="8" y="12" width="24" height="18" rx="2"/>
          <path d="M12 12V8a8 8 0 1116 0v4"/>
        </svg>
      ),
      name: "Premium Pairing",
      description: "5-course menu with expertly paired non-alcoholic beverages",
      price: "$1680",
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-divider" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-white mb-4">
            Experience Packages
          </h2>
          <p className="text-gray-400">Exclusive dining experiences crafted for you</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`p-8 transition-all duration-300 hover-lift ${
                pkg.featured
                  ? "card-border-highlight bg-[#0d0d0d] relative"
                  : "card-border bg-[#0d0d0d]"
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-px left-0 right-0 h-[2px] bg-gradient-gold" />
              )}
              <div className="text-primary mb-6">{pkg.icon}</div>
              <h3 className="text-2xl font-playfair text-white mb-3">{pkg.name}</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">{pkg.description}</p>
              <p className="text-3xl text-primary font-playfair mb-6">{pkg.price}</p>
              <button
                type="button"
                className={`w-full py-3 font-medium transition-colors ${
                  pkg.featured
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "bg-transparent border border-white/20 text-white hover:border-primary hover:text-primary"
                }`}
              >
                Reserve Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Jonathan Hart",
      role: "Food Critic, Gourmet Today",
      image: ASSETS.male1,
      quote: "The most exquisite dining experience I've ever had. Every dish was a masterpiece.",
    },
    {
      name: "Victoria Chen",
      role: "Editor, Luxe Living Magazine",
      image: ASSETS.female1,
      quote: "Impeccable service, stunning ambience, and flavors that transport you to culinary heaven.",
    },
    {
      name: "Marcus Thompson",
      role: "Michelin Guide Inspector",
      image: ASSETS.male2,
      quote: "A culinary journey that exceeds all expectations. The attention to detail is remarkable.",
    },
    {
      name: "Isabella Rodriguez",
      role: "Wine Sommelier",
      image: ASSETS.female2,
      quote: "The wine pairing is extraordinary. An unforgettable gastronomic experience.",
    },
    {
      name: "David Kim",
      role: "Travel Blogger, Wanderlust Tales",
      image: ASSETS.male3,
      quote: "This restaurant sets the gold standard for fine dining. Absolutely phenomenal in every way.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-divider" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-white mb-4">
            What Our Guests Say
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          <div className="bg-[#0d0d0d] border-l-2 border-primary p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-primary font-medium">{testimonials[activeIndex].name}</h4>
                <p className="text-gray-500 text-sm">{testimonials[activeIndex].role}</p>
              </div>
            </div>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl font-cormorant italic text-gray-300">
              "{testimonials[activeIndex].quote}"
            </blockquote>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                type="button"
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-8 h-2 rounded-full transition-colors ${
                  index === activeIndex ? "bg-primary" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Artisan Pairings Section
function ArtisanPairingsSection() {
  return (
    <section className="py-20 md:py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-divider" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-white mb-4">
            Natural Artisan Pairings
          </h2>
          <p className="text-gray-400">Artisanal beverages crafted to elevate every course</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[400px] overflow-hidden">
            <Image
              src={ASSETS.drink}
              alt="Artisan Beverages"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6 text-gray-400 leading-relaxed">
            <p>
              Our in-house mixologists create bespoke non-alcoholic pairings using premium botanicals, rare teas, and seasonal fruits from around the world.
            </p>
            <p>
              From smoked date nectar to yuzu-infused sparkling elixir, each drink is designed to complement the flavors of your meal.
            </p>
            <p>
              Experience sophistication without compromise — perfect for all guests.
            </p>
            <button
              type="button"
              className="mt-4 px-8 py-3 bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              Book Pairing Experience
            </button>
          </div>
        </div>
      </div>
    </section>
  );   
  
}

// Private Experiences Section
function PrivateExperiencesSection() {
  const spaces = [
    {
      name: "The Vault",
      capacity: "Up to 8 guests",
      price: "$2800",
      image: ASSETS.private1,
    },
    {
      name: "Le Salon Privé",
      capacity: "Up to 14 guests",
      price: "$3500",
      image: ASSETS.royale,
      featured: true,
    },
    {
      name: "The Atrium",
      capacity: "Up to 30 guests",
      price: "$5000",
      image: ASSETS.private3,
    },
  ];

  return (
    <section id="private" className="py-20 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-divider" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-white mb-4">
            Exclusive Private Experiences
          </h2>
          <p className="text-gray-400">Three bespoke spaces for unforgettable gatherings</p>
        </div>

        {/* Spaces Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {spaces.map((space, index) => (
            <div
              key={index}
              className={`p-6 transition-all duration-300 hover-lift ${
                space.featured
                  ? "card-border-highlight bg-[#0d0d0d]"
                  : "card-border bg-[#0d0d0d]"
              }`}
            >
              <div className="relative h-48 mb-6 overflow-hidden">
                <Image
                  src={space.image}
                  alt={space.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-cormorant italic text-primary mb-2">{space.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{space.capacity}</p>
              <p className="text-gray-300">
                Starting at <span className="text-2xl font-playfair text-primary">{space.price}</span>{" "}
                <span className="text-gray-500 text-sm">minimum spend</span>
              </p>
            </div>
          ))}
        </div>

        {/* Trusted By */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 mb-8">Trusted by Global Clients</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            {[ASSETS.brand1, ASSETS.brand2, ASSETS.brand3, ASSETS.brand4].map((brand, index) => (
              <div key={index} className="relative h-8 w-24">
                <Image
                  src={brand}
                  alt={`Brand ${index + 1}`}
                  fill
                  className="object-contain filter brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Awards Section
function AwardsSection() {
  const awards = [
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="16" cy="24" r="6"/>
          <circle cx="32" cy="24" r="6"/>
          <circle cx="24" cy="14" r="6"/>
          <circle cx="24" cy="34" r="6"/>
        </svg>
      ),
      title: "2 Michelin Stars",
      subtitle: "2024 - 2025",
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="24" cy="24" r="14"/>
          <path d="M24 14v20M18 24h12"/>
          <path d="M24 10v-4M24 42v-4"/>
        </svg>
      ),
      title: "World 50 Best",
      subtitle: "Rank #28 in 2025",
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <ellipse cx="24" cy="16" rx="12" ry="8"/>
          <path d="M12 16c0 8 12 20 12 20s12-12 12-20"/>
        </svg>
      ),
      title: "Five Diamond",
      subtitle: "Chef Award",
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M24 8l3 6 6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1 3-6z"/>
          <path d="M16 28l-4 12h24l-4-12"/>
        </svg>
      ),
      title: "Asia's Best",
      subtitle: "Best Restaurant 2024",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-divider" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-white mb-4">
            Awards & Recognition
          </h2>
          <p className="text-gray-400">Celebrated by the world's most prestigious guides</p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <div key={index} className="text-center">
              <div className="text-primary mb-4 flex justify-center">{award.icon}</div>
              <h3 className="text-primary font-medium">{award.title}</h3>
              <p className="text-gray-500 text-sm">{award.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Reservation Section
function ReservationSection() {
  return (
    <section id="reservation" className="py-20 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-divider" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-white mb-4">
            Make a Reservation
          </h2>
          <p className="text-gray-400">We recommend booking at least 24 hours in advance</p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-gray-300 text-sm mb-2">Full Name</label>
            <input
              type="text"
              className="w-full bg-[#0d0d0d] border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-gray-300 text-sm mb-2">Phone Number</label>
            <input
              type="tel"
              className="w-full bg-[#0d0d0d] border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 text-sm mb-2">Date</label>
              <input
                type="date"
                className="w-full bg-[#0d0d0d] border border-white/10 px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2">Time</label>
              <input
                type="time"
                className="w-full bg-[#0d0d0d] border border-white/10 px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-300 text-sm mb-2">Number of Guests</label>
            <select className="w-full bg-[#0d0d0d] border border-white/10 px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors">
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5 Guests</option>
              <option value="6">6+ Guests</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-300 text-sm mb-2">Special Requests</label>
            <textarea
              rows={4}
              className="w-full bg-[#0d0d0d] border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors resize-none"
              placeholder="Any dietary requirements or special occasions?"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
          >
            Confirm Reservation
          </button>
        </form>
      </div>
    </section>
  );
}

// Footer Section
function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-playfair text-primary mb-4">ROYAL OYO KITCHEN</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premium cuisine prepared by world-class chefs in an elegant setting. Where culinary art meets perfection.
            </p>
            <div>
              <h4 className="text-primary text-sm font-medium mb-2">Location</h4>
              <p className="text-gray-400 text-sm">
                Lane 7, Alhaja Serifat Biliaminu Street<br />
                Ayetoro, Oyo, Oyo State, Nigeria
              </p>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-white font-medium mb-6">Pages</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Services</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Documentation</Link></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-medium mb-6">Hours</h4>
            <p className="text-gray-400 text-sm">
             <p>Mon - Sartuday: 8am - 5pm</p>
             <p>Sunday: 12am - 5pm</p>
            </p>
          </div>

           

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-6">Contact</h4>
            <p className="text-gray-400 text-sm mb-4">
              +1 1234 567 8900<br />
              info@royaloyoKitchen.com
            </p>
            <div className="flex gap-4">
              {["instagram", "facebook", "twitter", "tiktok"].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">© 2025 Royal Oyo Kitchen Fine Dining. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// Main Page
export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808]">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <AmbienceSection />
      <PricingSection />
      <TestimonialsSection />
      <ArtisanPairingsSection />
      <PrivateExperiencesSection />
      <AwardsSection />
      <ReservationSection />
      <Footer />
    </main>
  );
}
