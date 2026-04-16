import React from 'react';
import { Heart, Sparkles, Target } from 'lucide-react';
import { portfolioData } from '../mock';

const About = () => {
  const { personal, skills } = portfolioData;

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brown-100 rounded-full blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="relative z-10">
              <div className="w-full aspect-square bg-gradient-to-br from-cherry-100 to-brown-100 rounded-3xl overflow-hidden border-4 border-black shadow-2xl">
                <img
                  src={personal.image}
                  alt={personal.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-cherry rounded-2xl -z-10 rotate-12"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brown rounded-2xl -z-10 -rotate-12"></div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-block mb-4">
                <span className="text-cherry font-display font-semibold text-lg">// About Me</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-black mb-6 leading-tight">
                Hey, I'm {personal.name}
              </h2>
            </div>

            <p className="text-lg text-black/70 leading-relaxed">
              {personal.story}
            </p>

            {/* Skills Tags */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-black/60 uppercase tracking-wider mb-3">Core Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.core.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-cherry/10 border-2 border-cherry/20 rounded-full text-cherry font-semibold text-sm hover:bg-cherry hover:text-white transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-black/60 uppercase tracking-wider mb-3">Standout Skills</h3>
                <div className="relative overflow-hidden">
                  <div className="flex gap-2 animate-scroll">
                    {[...skills.special, ...skills.special].map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-brown/10 border-2 border-brown/20 rounded-full text-brown font-semibold text-sm hover:bg-brown hover:text-white transition-all duration-300 whitespace-nowrap"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Fun fact */}
            <div className="bg-gradient-to-r from-cherry-50 to-brown-50 rounded-2xl p-6 border-2 border-black/5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cherry rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2">What I Believe</h4>
                  <p className="text-black/70 text-sm">
                    Storytelling over selling. Relationships over transactions. Data that tells a story worth sharing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;