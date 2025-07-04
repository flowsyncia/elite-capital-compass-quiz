import { useState, useEffect } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos",
      image: "/lovable-uploads/6202e585-5dcf-41b5-96c5-585b030d152d.png",
      quote: "Consegui meu crédito mesmo com score baixo. Atendimento rápido e transparente. Super recomendo!",
      rating: 5
    },
    {
      name: "Ana",
      image: "/lovable-uploads/f0fc39be-f0f0-4a16-bde8-4d2be86d63e7.png",
      quote: "O Pedro me explicou tudo com muita paciência. Fechei meu financiamento com as melhores condições que encontrei.",
      rating: 5
    },
    {
      name: "Roberto",
      image: "/lovable-uploads/c3a1220c-27dc-4064-9c65-a816c70541f9.png",
      quote: "Fiquei impressionado com a agilidade da Elite Capital. Em menos de 48 horas meu crédito estava aprovado!",
      rating: 5
    },
    {
      name: "Juliana",
      image: "/lovable-uploads/00532e13-53f2-435d-ad0b-bbe6c7471ab9.png",
      quote: "Tive suporte em cada etapa do processo. Senti muita segurança e clareza nas informações.",
      rating: 5
    },
    {
      name: "Rafael",
      image: "/lovable-uploads/9ded1661-e027-42d9-9443-2664a510c7df.png",
      quote: "Mesmo com restrição no nome, consegui uma ótima proposta graças à consultoria personalizada.",
      rating: 5
    },
    {
      name: "Maria",
      image: "/lovable-uploads/d0fcd97b-1cae-4486-a636-8a299aa3784b.png",
      quote: "Já tentei crédito em vários lugares e só na Elite Capital consegui uma análise justa e rápida.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gray-50 font-poppins">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 tracking-tight text-slate-900 px-2">
            O que dizem <span className="text-cyan-600">nossos clientes</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-medium px-2">
            Histórias reais de quem já transformou sua vida financeira conosco
          </p>
        </div>

        {/* Desktop: 3 columns */}
        <div className="hidden md:block max-w-7xl mx-auto relative px-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3">
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white shadow-lg" />
            <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white shadow-lg" />
          </Carousel>
        </div>

        {/* Mobile: 1 column with arrows positioned at extreme edges */}
        <div className="md:hidden relative">
          <div className="px-8">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="basis-full">
                    <TestimonialCard testimonial={testimonial} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute -left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white shadow-lg z-10" />
              <CarouselNext className="absolute -right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white shadow-lg z-10" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-100 h-full">
      {/* Avatar e nome */}
      <div className="flex items-center mb-6">
        <Avatar className="w-12 h-12 sm:w-16 sm:h-16 mr-3 sm:mr-4 flex-shrink-0">
          <AvatarImage 
            src={testimonial.image} 
            alt={testimonial.name}
            className="object-cover"
          />
          <AvatarFallback className="bg-cyan-100 text-cyan-700 font-semibold text-base sm:text-lg">
            {testimonial.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 truncate">
            {testimonial.name}
          </h3>
          <div className="flex text-yellow-400">
            {[...Array(testimonial.rating)].map((_, i) => (
              <span key={i} className="text-base sm:text-lg">⭐</span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Depoimento */}
      <div className="mb-4">
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed italic font-medium">
          "{testimonial.quote}"
        </p>
      </div>
    </div>
  );
};

export default TestimonialsSection;
