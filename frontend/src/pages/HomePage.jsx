import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import WhyChooseUs from '../components/WhyChooseUs';
import ServicesSection from '../components/ServicesSection';
import ValueProposition from '../components/ValueProposition';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import BookDemoModal from '../components/BookDemoModal';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header onBookDemo={() => setIsModalOpen(true)} />
      <HeroSection />
      <AboutSection />
      <WhyChooseUs />
      <ServicesSection />
      <ValueProposition />
      <ContactSection onBookDemo={() => setIsModalOpen(true)} />
      <Footer />
      <BookDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default HomePage;