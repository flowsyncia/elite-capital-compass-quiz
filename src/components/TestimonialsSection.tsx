
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      result: "Conseguiu crédito de R$ 150.000 para reformar sua casa",
      placeholder: "Print WhatsApp 1"
    },
    {
      name: "João Santos",
      result: "Financiamento de veículo aprovado em 24h",
      placeholder: "Print WhatsApp 2"
    },
    {
      name: "Ana Costa",
      result: "Empréstimo consignado com as melhores taxas do mercado",
      placeholder: "Print WhatsApp 3"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Histórias de <span className="text-blue-600">Sucesso Reais</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Veja como já transformamos a vida financeira de milhares de brasileiros
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {/* Placeholder para imagem do depoimento */}
              <div className="w-full h-48 bg-slate-200 rounded-lg flex items-center justify-center mb-6">
                <span className="text-slate-600 font-medium text-center">
                  {testimonial.placeholder}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {testimonial.name}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {testimonial.result}
              </p>
              
              <div className="flex text-yellow-400 mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xl">⭐</span>
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
