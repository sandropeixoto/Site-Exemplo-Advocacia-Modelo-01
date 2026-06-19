import React, { useState, useEffect } from "react";
import { Scale, Menu, X, ArrowUpRight, PhoneCall } from "lucide-react";

interface HeaderProps {
  onOpenModal: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#" },
    { label: "O Escritório", href: "#sobre-nos" },
    { label: "Áreas de Atuação", href: "#atuacao" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "FAQ", href: "#faq" }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80; // height of compressed sticky header
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <>
      <header
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-brand-blue-dark/95 backdrop-blur-md border-b border-brand-gold/20 py-3 shadow-md"
            : "bg-gradient-to-b from-brand-blue-dark/80 via-brand-blue-dark/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Brandmark */}
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, "#")}
            className="flex items-center gap-2.5 group"
            id="brand-logo"
          >
            <div className="relative flex items-center justify-center h-10 w-10 border border-brand-gold/60 rounded bg-brand-blue/30 group-hover:bg-brand-blue/60 transition-colors">
              <Scale className="h-5 w-5 text-brand-gold group-hover:rotate-6 transition-transform" />
              <div className="absolute -inset-0.5 border border-brand-gold/20 rounded scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all" />
            </div>
            
            <div className="flex flex-col">
              <span className="font-serif-clean text-lg sm:text-xl font-bold tracking-[0.18em] text-white leading-none">
                AUDEN
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-brand-gold/90 font-sans mt-1">
                ADVOCACIA DE PRESTÍGIO
              </span>
            </div>
          </a>

          {/* Desktop Navigation links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs tracking-wider uppercase text-gray-300 hover:text-brand-gold transition-colors font-semibold"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Contact Buttons (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:5511999999999"
              className="text-xs font-bold text-gray-300 hover:text-brand-gold transition-colors flex items-center gap-1.5"
            >
              <PhoneCall className="h-3.5 w-3.5 text-brand-gold" />
              (11) 99999-9999
            </a>
            
            <button
              onClick={onOpenModal}
              id="header-booking-btn"
              className="relative px-5 py-2.5 bg-gradient-to-r from-brand-gold to-brand-gold-hover text-brand-blue-dark font-bold text-xs uppercase tracking-wider rounded cursor-pointer overflow-hidden group transition-all duration-300 hover:-translate-y-[1px] hover:shadow-gold-glow"
            >
              <span className="relative z-10 flex items-center gap-1 text-[11px]">
                Agendar Consulta
                <ArrowUpRight className="h-3 w-3 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-brand-gold focus:outline-none"
            aria-label="Toggle Menu"
            id="mobile-nav-toggle"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-brand-blue-dark/90 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed top-18 left-0 right-0 max-h-screen bg-brand-blue-dark border-b border-brand-gold/30 p-6 shadow-2xl flex flex-col gap-6 animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm font-semibold tracking-wider text-gray-200 hover:text-brand-gold py-1 border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-4 mt-2">
              <a
                href="https://wa.me/5511999999999"
                className="flex items-center justify-center gap-2 text-xs font-bold py-3 text-white border border-brand-gold/20 rounded bg-brand-blue-light"
              >
                <PhoneCall className="h-4 w-4 text-brand-gold" />
                (11) 99999-9999 (Fale com a Banca)
              </a>
              
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal();
                }}
                id="header-booking-mobile-btn"
                className="w-full bg-brand-gold text-brand-blue-dark font-bold text-center py-3 rounded text-xs uppercase tracking-wider hover:bg-brand-gold-hover transition-colors"
              >
                Agendar Consulta Presencial ou Online
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
