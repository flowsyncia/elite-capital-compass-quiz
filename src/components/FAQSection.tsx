
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Quem é Pedro Barbosa?",
      answer: "Especialista em crédito com +10 anos de experiência. Atua ajudando pessoas e empresas a acessarem crédito com inteligência e segurança."
    },
    {
      question: "O que é a Elite Capital?",
      answer: "Empresa especializada em crédito, oferecendo soluções financeiras personalizadas com ou sem garantia, para PF e PJ."
    },
    {
      question: "Posso solicitar crédito mesmo negativado?",
      answer: "Sim. Em muitos casos conseguimos aprovação mesmo com restrições, especialmente quando há garantia."
    },
    {
      question: "Quais tipos de crédito vocês oferecem?",
      answer: "Crédito pessoal, financiamento imobiliário e de veículos, empréstimos com garantia, crédito PJ (antecipação de recebíveis, conta garantida), soluções para negativados e intermediação com bancos/fintechs."
    },
    {
      question: "Existe valor mínimo ou máximo?",
      answer: "Não há um limite fixo. Cada caso é avaliado individualmente."
    },
    {
      question: "Preciso ter nome limpo?",
      answer: "Não necessariamente. Levamos vários fatores em conta."
    },
    {
      question: "Vocês são um banco?",
      answer: "Não. Somos uma Empresa Simples de Crédito (ESC), com operação própria e parcerias."
    },
    {
      question: "Os juros são altos?",
      answer: "As taxas são ajustadas ao risco da operação. Sempre buscamos as melhores condições possíveis."
    },
    {
      question: "Como funciona o processo?",
      answer: "Preencha → Contato WhatsApp → Pré-análise → Proposta → Contratação."
    },
    {
      question: "É seguro contratar com vocês?",
      answer: "Sim. Trabalhamos com contratos formais, transparência total e somos uma ESC regularizada."
    },
    {
      question: "Como entro em contato?",
      answer: "Formulário + WhatsApp. Retornamos o mais rápido possível."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            FAQ - <span className="text-cyan-400">Perguntas Frequentes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tire suas dúvidas sobre nossos serviços e processo
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-slate-800 rounded-lg border border-slate-700 px-6"
              >
                <AccordionTrigger className="text-white hover:text-cyan-400 text-left py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
