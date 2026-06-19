import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import PracticeAreas from "./components/PracticeAreas";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import SchedulingModal from "./components/SchedulingModal";
import { MessageSquare, Phone, Calendar, X, Scale } from "lucide-react";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedArea, setSelectedArea] = useState("");
  const [showFloatTray, setShowFloatTray] = useState(false);

  const handleOpenModal = (areaId: string = "") => {
    setSelectedArea(areaId);
    setModalOpen(true);
    setShowFloatTray(false);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedArea("");
  };

  const handleFloatTrayToggle = () => {
    setShowFloatTray(!showFloatTray);
  };

  const triggerDirectWhatsapp = () => {
    const text = encodeURIComponent(
      "Olá, gostaria de agendar uma consulta preliminar prioritária com a banca corporativa Auden."
    );
    window.open(`https://wa.me/5511999999999?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white text-brand-blue-dark selection:bg-brand-gold/30 selection:text-brand-blue-dark relative">
      {/* 1. Header (Sticky navigation) */}
      <Header onOpenModal={() => handleOpenModal()} />

      {/* 2. Hero Section */}
      <Hero onOpenModal={() => handleOpenModal()} />

      {/* 3. About Section (Sobre nós, timeline & partners) */}
      <About onOpenModal={(areaId) => handleOpenModal(areaId)} />

      {/* 4. Practice Areas Section (Cards & Accordions) */}
      <PracticeAreas onOpenModal={(areaId) => handleOpenModal(areaId)} />

      {/* 5. Client Testimonials (Confidential formal feedbacks) */}
      <Testimonials />

      {/* 6. FAQ Accordion Section */}
      <FAQ onOpenModal={() => handleOpenModal()} />

      {/* 7. Footer (Institutional data, map links & OAB Ethical seal) */}
      <Footer onOpenModal={() => handleOpenModal()} />

      {/* 8. Conversion-focused Floating Desk Actions (Highly optimized for phone tap targets) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
        
        {/* Expanded Tray */}
        {showFloatTray && (
          <div className="mb-3 bg-white rounded-lg shadow-2xl border border-brand-gold/30 p-4 max-w-sm w-72 flex flex-col gap-2.5 animate-in slide-in-from-bottom duration-300">
            {/* Top tray bar */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <span className="text-[10px] uppercase tracking-widest font-bold text-brand-blue flex items-center gap-1 font-serif-clean">
                <Scale className="h-3.5 w-3.5 text-brand-gold" /> Mesa d'Auden & Associados
              </span>
              <button onClick={() => setShowFloatTray(false)} className="text-gray-400 hover:text-gray-600">
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <p className="text-[11px] text-gray-500 leading-normal">
              Fale diretamente com nossa banca de especialistas por canais seguros ou agende uma conferência de avaliação preliminar.
            </p>

            <div className="flex flex-col gap-2">
              {/* WhatsApp direct */}
              <button
                onClick={triggerDirectWhatsapp}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-3 rounded text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageSquare className="h-4 w-4 fill-current text-white shrink-0" />
                <span>Conversar no WhatsApp</span>
              </button>

              {/* General Consult modal trigger */}
              <button
                onClick={() => handleOpenModal()}
                className="w-full bg-brand-blue text-white font-semibold py-2 px-3 rounded text-xs flex items-center justify-center gap-2 hover:bg-brand-blue-light transition-colors cursor-pointer"
              >
                <Calendar className="h-4 w-4 text-brand-gold shrink-0" />
                <span>Agendar Avaliação Jurídica</span>
              </button>

              {/* Phone Dial */}
              <a
                href="tel:5511999999999"
                className="w-full py-2 border border-brand-blue/15 text-brand-blue font-bold text-xs flex items-center justify-center gap-2 hover:bg-slate-bg rounded transition-colors text-center"
              >
                <Phone className="h-4 w-4 text-brand-gold shrink-0" />
                <span>Ligar no Desk da Banca</span>
              </a>
            </div>
          </div>
        )}

        {/* Floating Bubble Button */}
        <button
          onClick={handleFloatTrayToggle}
          id="floating-conversion-bubble"
          className="relative h-14 w-14 rounded-full bg-gradient-to-r from-brand-blue via-brand-blue-light to-brand-blue-dark border-2 border-brand-gold flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all text-brand-gold cursor-pointer group"
          aria-label="Canais de Atendimento"
        >
          {/* Pulsing ring */}
          <span className="absolute -inset-1 rounded-full border border-brand-gold/40 animate-ping opacity-75 group-hover:opacity-100" />
          
          {showFloatTray ? (
            <X className="h-6 w-6 text-white shrink-0" />
          ) : (
            <MessageSquare className="h-6 w-6 text-brand-gold fill-current shrink-0 animate-pulse" />
          )}
        </button>
      </div>

      {/* 9. Interactive Multistep Scheduling Form (Consultation Modal) */}
      <SchedulingModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        selectedArea={selectedArea}
      />
    </div>
  );
}

