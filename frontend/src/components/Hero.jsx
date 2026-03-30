import React from 'react';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { portfolioData } from '../mock';

const Hero = () => {
  const { personal, achievements } = portfolioData;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-cherry-50 to-brown-50 pt-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-cherry-200 rounded-full blur-3xl opacity-40 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-brown-200 rounded-full blur-3xl opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <Badge className="bg-cherry text-white hover:bg-cherry-600 px-4 py-2 text-sm font-semibold mb-8">
            <Sparkles className="w-4 h-4 mr-2 inline" />
            Available for new opportunities
          </Badge>

          {/* Main Heading */}
          <h1 className="text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-black leading-tight mb-8">
            I turn ideas into
            <span className="block mt-2">
              <span className="text-cherry">viral content</span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl lg:text-2xl text-black/70 mb-12 max-w-2xl leading-relaxed">
            {personal.shortIntro}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <Button
              onClick={() => scrollToSection('work')}
              size="lg"
              className="bg-cherry hover:bg-cherry-600 text-white px-8 py-6 text-lg font-semibold"
            >
              See My Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => scrollToSection('about')}
              size="lg"
              variant="outline"
              className="border-2 border-black hover:bg-black hover:text-white px-8 py-6 text-lg font-semibold"
            >
              About Me
            </Button>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-black/5 hover:border-cherry/30 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl font-display font-bold text-cherry mb-2">
                  {achievement.metric}
                </div>
                <div className="text-sm font-semibold text-black mb-1">{achievement.label}</div>
                <div className="text-xs text-black/60">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;