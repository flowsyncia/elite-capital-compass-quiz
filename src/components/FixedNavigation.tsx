
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const FixedNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img 
              src="/lovable-uploads/bf334ad0-2034-4cab-b691-71558bb72ff5.png" 
              alt="Elite Capital" 
              className="h-6 sm:h-8 md:h-10"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button
              onClick={() => scrollToSection('como-funciona')}
              className="text-slate-700 hover:text-cyan-600 font-medium transition-colors text-sm lg:text-base"
            >
              Como Funciona
            </button>
            <button
              onClick={() => scrollToSection('depoimentos')}
              className="text-slate-700 hover:text-cyan-600 font-medium transition-colors text-sm lg:text-base"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection('sobre-nos')}
              className="text-slate-700 hover:text-cyan-600 font-medium transition-colors text-sm lg:text-base"
            >
              Sobre Nós
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-slate-700 hover:text-cyan-600 font-medium transition-colors text-sm lg:text-base"
            >
              FAQ
            </button>
            <Button
              onClick={() => scrollToSection('contato')}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-sm lg:text-base px-4 lg:px-6 py-2"
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="py-3 space-y-1">
              <button
                onClick={() => scrollToSection('como-funciona')}
                className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-gray-50 font-medium"
              >
                Como Funciona
              </button>
              <button
                onClick={() => scrollToSection('depoimentos')}
                className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-gray-50 font-medium"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection('sobre-nos')}
                className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-gray-50 font-medium"
              >
                Sobre Nós
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-gray-50 font-medium"
              >
                FAQ
              </button>
              <div className="px-4 pt-2 pb-3">
                <Button
                  onClick={() => scrollToSection('contato')}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 py-3 font-medium"
                >
                  Fale Conosco
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default FixedNavigation;
