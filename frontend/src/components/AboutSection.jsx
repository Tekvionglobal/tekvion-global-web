import React from 'react';
import { Card, CardContent } from './ui/card';
import { Target, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">About Us</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed">
                With a blend of advanced technology skills, proven domain experience, and a customer-centric mindset, we create IT solutions that grow with your business.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed">
                Offers end to end services across the digital landscape - consulting, application development, cloud, infrastructure, and modernization.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed">
                Builds long-term partnerships that evolve with client needs and deliver measurable value.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed">
                Driven by excellence, innovation, and trust, empowering businesses to thrive in a dynamic digital world.
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-0 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 rounded-full p-3">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To be a trusted global technology partner empowering businesses through innovation, agility, and scalable digital solutions that drive sustainable growth and lasting impact.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 bg-gradient-to-br from-cyan-50 to-blue-50 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-cyan-600 rounded-full p-3">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Mission</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Deliver transformative tech solutions that empower evolving businesses.</li>
                    <li>• Blend expertise and innovation to create real value.</li>
                    <li>• Foster partnerships built on trust, transparency, and results.</li>
                    <li>• Continuously evolve through learning, collaboration, and excellence.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;