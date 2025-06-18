
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
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-blue-900/10"></div>
        </div>
        
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            {/* Logo */}
            <div className="mb-12">
              <div className="w-48 h-20 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 rounded-2xl mx-auto flex items-center justify-center shadow-2xl border border-cyan-300/30">
                <div className="text-slate-900 font-black text-2xl tracking-wider">
                  ELITE <span className="text-blue-800">CAPITAL</span>
                </div>
              </div>
            </div>

            {/* Main headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
              Conquiste o <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Crédito Ideal</span> com Quem Entende do Assunto
            </h1>
            
            {/* Subheadline */}
            <p className="text-2xl md:text-3xl lg:text-4xl mb-8 leading-relaxed text-gray-300 font-light">
              Mais de 10 anos de experiência conectando pessoas às melhores soluções financeiras do mercado.
            </p>

            {/* Benefit statement */}
            <p className="text-xl md:text-2xl mb-16 text-cyan-200 font-medium">
              Consultoria personalizada, aprovação rápida e atendimento humano de verdade.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
              <Button 
                onClick={onStartQuiz}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-12 py-6 text-xl md:text-2xl font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Descobrir Minha Solução Ideal
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
              
              <Button 
                onClick={() => setShowWhatsAppModal(true)}
                variant="outline"
                className="border-2 border-cyan-400 bg-transparent text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-12 py-6 text-xl md:text-2xl font-bold rounded-xl transition-all duration-300"
              >
                Falar Agora no WhatsApp
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center md:justify-start">
                <Clock className="w-8 h-8 mr-4 text-cyan-400" />
                <span className="font-bold text-lg">Análise Rápida</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <CheckCircle className="w-8 h-8 mr-4 text-cyan-400" />
                <span className="font-bold text-lg">100% Gratuito</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Shield className="w-8 h-8 mr-4 text-cyan-400" />
                <span className="font-bold text-lg">Atendimento Humano</span>
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
