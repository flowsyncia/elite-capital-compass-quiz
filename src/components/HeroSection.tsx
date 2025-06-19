
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
        
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            {/* Logo */}
            <div className="mb-12">
              <img 
                src="/lovable-uploads/bf334ad0-2034-4cab-b691-71558bb72ff5.png" 
                alt="Elite Capital - Soluções Financeiras" 
                className="h-24 md:h-32 mx-auto"
              />
            </div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tight">
              Conquiste o <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Crédito Ideal</span> com Quem Entende do Assunto
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 leading-relaxed text-slate-700 font-medium">
              Mais de 10 anos de experiência conectando pessoas às melhores soluções financeiras do mercado.
            </p>

            {/* Benefit statement */}
            <p className="text-lg md:text-xl mb-16 text-cyan-700 font-medium">
              Consultoria personalizada, aprovação rápida e atendimento humano de verdade.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
              <Button 
                onClick={onStartQuiz}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-12 py-6 text-lg md:text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Descobrir Minha Solução Ideal
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
              
              <Button 
                onClick={() => setShowWhatsAppModal(true)}
                variant="outline"
                className="border-2 border-cyan-600 bg-transparent text-cyan-600 hover:bg-cyan-600 hover:text-white px-12 py-6 text-lg md:text-xl font-bold rounded-xl transition-all duration-300"
              >
                Falar Agora no WhatsApp
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center md:justify-start">
                <Clock className="w-8 h-8 mr-4 text-cyan-600" />
                <span className="font-semibold text-lg text-slate-700">Análise Rápida</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <CheckCircle className="w-8 h-8 mr-4 text-cyan-600" />
                <span className="font-semibold text-lg text-slate-700">100% Gratuito</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Shield className="w-8 h-8 mr-4 text-cyan-600" />
                <span className="font-semibold text-lg text-slate-700">Atendimento Humano</span>
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
