
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import WhatsAppFormModal from './WhatsAppFormModal';

interface FinalCTASectionProps {
  onStartQuiz: () => void;
}

const FinalCTASection = ({ onStartQuiz }: FinalCTASectionProps) => {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);

  return (
    <section className="py-16 sm:py-24 bg-white text-slate-900 font-poppins">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 tracking-tight px-2">
            Está pronto para <span className="text-cyan-600">virar o jogo financeiro?</span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-12 leading-relaxed text-slate-700 font-medium px-2">
            Preencha o formulário e receba sua análise personalizada ou fale direto conosco no WhatsApp!
          </p>

          <div className="flex flex-col gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4 max-w-md sm:max-w-none mx-auto">
            <Button 
              onClick={onStartQuiz}
              className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 min-h-[48px] sm:min-h-[56px]"
            >
              <span className="block sm:hidden text-center leading-tight">
                LIBERAR PRÉ-ANÁLISE<br />GRATUITA
              </span>
              <span className="hidden sm:block">
                LIBERAR MINHA PRÉ-ANÁLISE GRATUITA
              </span>
            </Button>
            
            <Button 
              onClick={() => setShowWhatsAppModal(true)}
              variant="outline"
              className="w-full sm:w-auto border-2 border-cyan-600 bg-transparent text-cyan-600 hover:bg-cyan-600 hover:text-white px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-bold rounded-lg transition-all duration-300 min-h-[48px] sm:min-h-[56px]"
            >
              <span className="block sm:hidden text-center leading-tight">
                FALAR COM<br />ESPECIALISTA
              </span>
              <span className="hidden sm:block">
                FALAR COM UM ESPECIALISTA AGORA
              </span>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-4">
            <div className="flex items-center justify-center">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-cyan-600 flex-shrink-0" />
              <span className="font-semibold text-sm sm:text-base text-slate-700">Análise Rápida</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-cyan-600 flex-shrink-0" />
              <span className="font-semibold text-sm sm:text-base text-slate-700">100% Gratuito</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-cyan-600 flex-shrink-0" />
              <span className="font-semibold text-sm sm:text-base text-slate-700">Atendimento Humano</span>
            </div>
          </div>
        </div>
      </div>

      {/* Rodapé com informações legais */}
      <footer className="bg-slate-50 border-t border-slate-200 py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-slate-600 space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-1 text-sm">
              <span>Copyright 2025 © ELITE CAPITAL ESC LTDA – Todos os direitos reservados.</span>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
              <span>CNPJ: 42.837.586/0001-93</span>
              <span className="hidden sm:block">•</span>
              <a 
                href="https://instagram.com/elitecapitalx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-600 hover:text-cyan-700 transition-colors"
              >
                Instagram: @elitecapitalx
              </a>
              <span className="hidden sm:block">•</span>
              <Link 
                to="/politica-privacidade"
                className="text-cyan-600 hover:text-cyan-700 transition-colors"
              >
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppFormModal 
        isOpen={showWhatsAppModal}
        onClose={() => setShowWhatsAppModal(false)}
      />
    </section>
  );
};

export default FinalCTASection;
