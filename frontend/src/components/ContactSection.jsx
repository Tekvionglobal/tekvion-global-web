import React from 'react';
import { Button } from './ui/button';
import { Phone, Mail } from 'lucide-react';

const ContactSection = ({ onBookDemo }) => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-600 to-cyan-500">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-blue-50 mb-12">
          Let's discuss how we can help you achieve your goals
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a
            href="tel:+916380351931"
            className="flex items-center space-x-3 bg-white text-blue-600 px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <Phone className="h-5 w-5" />
            <div className="text-left">
              <div className="text-sm font-medium">Call Us</div>
              <div className="text-lg font-bold">+91 6380351931</div>
            </div>
          </a>
          
          <a
            href="mailto:connect@tekvionglobal.com"
            className="flex items-center space-x-3 bg-white text-blue-600 px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <Mail className="h-5 w-5" />
            <div className="text-left">
              <div className="text-sm font-medium">Email Us</div>
              <div className="text-lg font-bold">connect@tekvionglobal.com</div>
            </div>
          </a>
        </div>
        
        <Button
          onClick={onBookDemo}
          className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-6 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 font-semibold"
        >
          Book a Call
        </Button>
      </div>
    </section>
  );
};

export default ContactSection;