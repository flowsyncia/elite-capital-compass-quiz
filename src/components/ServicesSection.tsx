
import { Button } from "@/components/ui/button";
import { 
  Coins, 
  Users, 
  Home, 
  Car, 
  FileText, 
  Shield, 
  Calendar, 
  Briefcase 
} from "lucide-react";

interface ServicesSectionProps {
  onStartQuiz: () => void;
}

const ServicesSection = ({ onStartQuiz }: ServicesSectionProps) => {
  const services = [
    { icon: Coins, title: "Crédito Pessoal", color: "from-blue-500 to-blue-600" },
    { icon: Users, title: "Empréstimo Consignado", color: "from-green-500 to-green-600" },
    { icon: Home, title: "Financiamento Imobiliário", color: "from-purple-500 to-purple-600" },
    { icon: Home, title: "Crédito com Garantia de Imóvel", color: "from-indigo-500 to-indigo-600" },
    { icon: Car, title: "Financiamento de Veículos", color: "from-red-500 to-red-600" },
    { icon: Car, title: "Crédito com Garantia de Veículo", color: "from-orange-500 to-orange-600" },
    { icon: FileText, title: "Antecipação de Recebíveis", color: "from-teal-500 to-teal-600" },
    { icon: Shield, title: "Seguros", color: "from-cyan-500 to-cyan-600" },
    { icon: Users, title: "Consórcio", color: "from-pink-500 to-pink-600" },
    { icon: Briefcase, title: "Mercado Livre de Energia", color: "from-yellow-500 to-yellow-600" },
    { icon: Coins, title: "Câmbio", color: "from-emerald-500 to-emerald-600" },
    { icon: Calendar, title: "Previdência Privada", color: "from-violet-500 to-violet-600" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Soluções Completas Para Cada <span className="text-blue-600">Momento da Sua Vida</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de produtos financeiros para atender suas necessidades específicas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm">
                Condições especiais e atendimento personalizado
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={onStartQuiz}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-12 py-4 text-xl font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            QUERO DESCOBRIR QUAL É IDEAL PARA MIM
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
