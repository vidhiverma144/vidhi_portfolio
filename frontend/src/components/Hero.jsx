import React from 'react';
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { portfolioData } from '../mock';

const Hero = () => {
  const { personal, whyTrustMe } = portfolioData;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-200 px-4 py-2 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2 inline" />
              Open to Opportunities
            </Badge>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Hey, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  {personal.name}
                </span>
              </h1>
              <p className="text-2xl lg:text-3xl font-semibold text-slate-700">
                {personal.tagline}
              </p>
            </div>

            {/* Bio */}
            <p className="text-lg text-slate-600 leading-relaxed">
              {personal.bio}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {whyTrustMe.highlights.map((highlight, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-3xl font-bold text-blue-600">{highlight.metric}</div>
                  <div className="text-sm text-slate-600">{highlight.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection('projects')}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8"
              >
                View My Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                variant="outline"
                className="border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 px-8"
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Right Content - Floating Card */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6 border border-slate-200 hover:shadow-3xl transition-shadow duration-300">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Impact Highlights</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">1.5-2M Monthly Impressions</div>
                    <div className="text-sm text-slate-600">Leading global Twitter/X for Avail</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-teal-500 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">200% Engagement Increase</div>
                    <div className="text-sm text-slate-600">Through content strategy optimization</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">0 to 7K YouTube Subscribers</div>
                    <div className="text-sm text-slate-600">Built channel from scratch</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 top-10 -right-10 w-72 h-72 bg-teal-200 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;