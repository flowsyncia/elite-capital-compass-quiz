
import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import AuthoritySection from '../components/AuthoritySection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
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
      <HeroSection onStartQuiz={handleStartQuiz} />
      <AuthoritySection />
      <ServicesSection onStartQuiz={handleStartQuiz} />
      <TestimonialsSection />
      <FinalCTASection onStartQuiz={handleStartQuiz} />
      
      {showQuiz && <Quiz onClose={handleCloseQuiz} />}
    </div>
  );
};

export default Index;
