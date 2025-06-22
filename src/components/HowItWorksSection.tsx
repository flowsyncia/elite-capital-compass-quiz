
import { FileText, MessageSquare, Search, CheckCircle, Shield } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      icon: FileText,
      title: "Preenchimento do formulário",
      description: "Preencha nosso formulário rápido com suas informações básicas"
    },
    {
      number: 2,
      icon: MessageSquare,
      title: "Contato via WhatsApp",
      description: "Nossa equipe entra em contato imediatamente pelo WhatsApp"
    },
    {
      number: 3,
      icon: Search,
      title: "Pré-análise gratuita",
      description: "Fazemos uma análise completa do seu perfil sem custo"
    },
    {
      number: 4,
      icon: CheckCircle,
      title: "Proposta personalizada",
      description: "Apresentamos as melhores opções de crédito para você"
    },
    {
      number: 5,
      icon: Shield,
      title: "Contratação segura",
      description: "Processo 100% seguro com contratos formais e transparentes"
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900">
            Como Funciona o <span className="text-cyan-600">Processo</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Um processo simples e transparente em 5 passos para você conquistar seu crédito
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center relative">
                  {/* Connecting line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-cyan-200 to-blue-200 -translate-y-1/2 translate-x-1/2 z-0"></div>
                  )}
                  
                  {/* Step content */}
                  <div className="relative z-10">
                    <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    
                    <div className="w-8 h-8 bg-slate-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                      {step.number}
                    </div>
                    
                    <h3 className="text-lg font-bold text-slate-900 mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
