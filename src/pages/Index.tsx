
import { useState } from 'react';
import FixedNavigation from '../components/FixedNavigation';
import HeroSection from '../components/HeroSection';
import TrustBar from '../components/TrustBar';
import AuthoritySection from '../components/AuthoritySection';
import HowItWorksSection from '../components/HowItWorksSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import FinalCTASection from '../components/FinalCTASection';
import Quiz from '../components/Quiz';

const Index = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  const handleCloseQuiz = () => {
    setShowQuiz(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <FixedNavigation />
      <div className="pt-16">
        <HeroSection onStartQuiz={handleStartQuiz} />
        <TrustBar />
        <div id="sobre-nos">
          <AuthoritySection />
        </div>
        <HowItWorksSection />
        <ServicesSection onStartQuiz={handleStartQuiz} />
        <div id="depoimentos">
          <TestimonialsSection />
        </div>
        <FAQSection />
        <div id="contato">
          <FinalCTASection onStartQuiz={handleStartQuiz} />
        </div>
      </div>
      
      {showQuiz && <Quiz onClose={handleCloseQuiz} />}
    </div>
  );
};

export default Index;
