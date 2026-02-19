import React from 'react';
import { Card, CardContent } from './ui/card';
import { Users, Zap, Gauge, Globe, Shield, Star, Layers, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Users,
      title: 'Client-First Approach',
      description: 'Your goals drive our solutions.',
    },
    {
      icon: Zap,
      title: 'Strong Technical Expertise',
      description: 'Skilled across leading tech stacks and cloud platforms.',
    },
    {
      icon: Gauge,
      title: 'Agile Delivery',
      description: 'Fast, transparent, and adaptable to change.',
    },
    {
      icon: Globe,
      title: 'Global Delivery Model',
      description: 'On-site collaboration with offshore efficiency.',
    },
    {
      icon: Shield,
      title: 'End-to-End Ownership',
      description: 'From strategy to support under one roof.',
    },
    {
      icon: Star,
      title: 'Quality & Reliability',
      description: 'Rigorously tested, performance-driven outcomes.',
    },
    {
      icon: Layers,
      title: 'Flexible Engagement Models',
      description: 'Scalable teams that fit your needs and budget.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation-Focused',
      description: 'Empowering digital transformation and continuous growth.',
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          <p className="text-xl text-gray-600">Partner with us for excellence, innovation, and results</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white"
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;