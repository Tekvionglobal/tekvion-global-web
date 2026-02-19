import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { Badge } from './ui/badge';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200 px-4 py-1 text-sm font-medium">
              Trusted Global Technology Partner
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Your Growth Partner in IT Support
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Trusted global technology partner empowering businesses through innovation, agility, and scalable digital solutions that drive sustainable growth and lasting impact.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                onClick={() => scrollToSection('services')}
                variant="outline" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-lg transition-all duration-300"
              >
                Explore Services
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">25+</div>
                <div className="text-sm text-gray-600 mt-1">Expert Resources</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600 mt-1">Tech Support</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">5+</div>
                <div className="text-sm text-gray-600 mt-1">Service Domains</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600 mt-1">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          {/* Right Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-12 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="bg-white/20 backdrop-blur-lg rounded-full p-8">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_agent-demo-form/artifacts/io7q9bdj_Human%20%26%20AI%20Connection%20%E2%80%93%20The%20Future%20of%20Technology.jpg.jpeg" 
                    alt="Innovation" 
                    className="h-20 w-20 object-contain"
                  />
                </div>
                <h3 className="text-3xl font-bold text-white">Innovation Driven</h3>
                <p className="text-lg text-blue-50">Empowering Digital Transformation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;