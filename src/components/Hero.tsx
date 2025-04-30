import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-4">
      <div className="max-w-4xl">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Code Nakshatra 2025
        </h1>
        <p className="text-xl md:text-2xl mb-8">24 Hours of Innovation, Creativity, and Code</p>
        <div className="flex flex-wrap justify-center items-center px-4 gap-6 mb-12">
          <div className="flex items-center space-x-2 bg-purple-900/20 p-3 rounded-lg">
            <Calendar className="w-5 h-5 text-purple-400" />
            <span>May 2-3, 2025</span>
          </div>
          <div className="flex items-center space-x-2 bg-purple-900/20 p-3 rounded-lg">
            <Clock className="w-5 h-5 text-purple-400" />
            <span>48 Hours</span>
          </div>
          <div className="flex items-center space-x-2 bg-purple-900/20 p-3 rounded-lg">
            <MapPin className="w-5 h-5 text-purple-400" />
            <span>Offline Event</span>
          </div>
        </div>
        <div className="flex justify-center">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScwyVSBMygyxq8xU8un8SrsHcXXlhsvbPd14gWvFEKvplKsBA/viewform?usp=sharing">
            <button className="px-8 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors">
              Register Now
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;