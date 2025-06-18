import { Button } from "@/components/ui/button";
import { Clock, CheckCircle } from "lucide-react";

interface FinalCTASectionProps {
  onStartQuiz: () => void;
}

const FinalCTASection = ({ onStartQuiz }: FinalCTASectionProps) => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Vim através do site da Elite Capital e gostaria de conhecer as opções de crédito disponíveis!";
    const whatsappURL = `https://wa.me/5511940134427?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Descubra Sua Solução Ideal em <span className="text-cyan-200">2 Minutos</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 leading-relaxed opacity-90">
            Nosso quiz inteligente vai identificar exatamente qual produto se encaixa no seu perfil e necessidades. Receba uma proposta personalizada agora mesmo!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button 
              onClick={onStartQuiz}
              className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-4 text-xl font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              FAZER MEU QUIZ PERSONALIZADO
            </Button>
            
            <Button 
              onClick={handleWhatsAppClick}
              variant="outline"
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-blue-600 px-12 py-4 text-xl font-semibold rounded-lg transition-all duration-300"
            >
              FALAR DIRETO NO WHATSAPP
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center md:justify-start">
              <Clock className="w-6 h-6 mr-3 text-cyan-200" />
              <span className="font-medium">Apenas 2 minutos</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <CheckCircle className="w-6 h-6 mr-3 text-cyan-200" />
              <span className="font-medium">100% Gratuito</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <CheckCircle className="w-6 h-6 mr-3 text-cyan-200" />
              <span className="font-medium">Proposta Personalizada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
