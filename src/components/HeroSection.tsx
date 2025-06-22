
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Clock, Shield } from "lucide-react";
import WhatsAppFormModal from './WhatsAppFormModal';

interface HeroSectionProps {
  onStartQuiz: () => void;
}

const HeroSection = ({ onStartQuiz }: HeroSectionProps) => {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);

  return (
    <>
      <section className="min-h-screen bg-white text-slate-900 relative overflow-hidden font-poppins">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-50/30 to-blue-50/30"></div>
        </div>
        
        <div className="container mx-auto px-4 py-8 sm:py-12 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            {/* Logo */}
            <div className="mb-8 sm:mb-12">
              <img 
                src="/lovable-uploads/bf334ad0-2034-4cab-b691-71558bb72ff5.png" 
                alt="Elite Capital - Soluções Financeiras" 
                className="h-16 sm:h-24 md:h-32 mx-auto"
              />
            </div>

            {/* Main headline */}
            <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 leading-tight tracking-tight px-2">
              Conquiste o <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Crédito Ideal</span> com Quem Entende do Assunto
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 leading-relaxed text-slate-700 font-medium px-2">
              Mais de 10 anos de experiência conectando pessoas às melhores soluções financeiras do mercado.
            </p>

            {/* Benefit statement */}
            <p className="text-base sm:text-lg md:text-xl mb-12 sm:mb-16 text-cyan-700 font-medium px-2">
              Consultoria personalizada, aprovação rápida e atendimento humano de verdade.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:gap-6 justify-center mb-16 sm:mb-20 px-4">
              <Button 
                onClick={onStartQuiz}
                className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-6 sm:px-12 py-4 sm:py-6 text-base sm:text-lg md:text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 min-h-[56px] sm:min-h-[64px]"
              >
                <span className="mr-2">Quero minha análise personalizada</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              </Button>
              
              <Button 
                onClick={() => setShowWhatsAppModal(true)}
                variant="outline"
                className="w-full sm:w-auto border-2 border-cyan-600 bg-transparent text-cyan-600 hover:bg-cyan-600 hover:text-white px-6 sm:px-12 py-4 sm:py-6 text-base sm:text-lg md:text-xl font-bold rounded-xl transition-all duration-300 min-h-[56px] sm:min-h-[64px]"
              >
                Falar com um especialista agora
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-4">
              <div className="flex items-center justify-center">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 mr-3 sm:mr-4 text-cyan-600 flex-shrink-0" />
                <span className="font-semibold text-base sm:text-lg text-slate-700">Análise Rápida</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 mr-3 sm:mr-4 text-cyan-600 flex-shrink-0" />
                <span className="font-semibold text-base sm:text-lg text-slate-700">100% Gratuito</span>
              </div>
              <div className="flex items-center justify-center">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 mr-3 sm:mr-4 text-cyan-600 flex-shrink-0" />
                <span className="font-semibold text-base sm:text-lg text-slate-700">Atendimento Humano</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppFormModal 
        isOpen={showWhatsAppModal}
        onClose={() => setShowWhatsAppModal(false)}
      />
    </>
  );
};

export default HeroSection;
