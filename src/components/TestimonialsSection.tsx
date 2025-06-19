
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      result: "Conseguiu crédito de R$ 150.000 para reformar sua casa",
      quote: "Consegui crédito mesmo com score baixo, graças ao atendimento da Elite Capital.",
      placeholder: "Print WhatsApp 1"
    },
    {
      name: "João Santos", 
      result: "Financiamento de veículo aprovado em 24h",
      quote: "Pedro me ajudou a encontrar a melhor solução mesmo com meu nome restrito.",
      placeholder: "Print WhatsApp 2"
    },
    {
      name: "Ana Costa",
      result: "Empréstimo consignado com as melhores taxas do mercado",
      quote: "Atendimento rápido, claro e sem enrolação!",
      placeholder: "Print WhatsApp 3"
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white font-poppins">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tight">
            O que dizem <span className="text-cyan-400">nossos clientes</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-medium">
            Histórias reais de quem já transformou sua vida financeira conosco
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-slate-800 p-10 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-slate-700"
            >
              {/* Placeholder para imagem do depoimento */}
              <div className="w-full h-56 bg-slate-700 rounded-xl flex items-center justify-center mb-8">
                <span className="text-slate-300 font-medium text-center text-lg">
                  {testimonial.placeholder}
                </span>
              </div>
              
              {/* Quote */}
              <div className="mb-6">
                <p className="text-gray-300 text-lg leading-relaxed italic font-medium">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">
                {testimonial.name}
              </h3>
              
              <p className="text-cyan-400 font-semibold mb-4">
                {testimonial.result}
              </p>
              
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-2xl">⭐</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
