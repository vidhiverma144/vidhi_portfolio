import React from 'react';
import { Lightbulb, TrendingUp, Rocket } from 'lucide-react';
import { Badge } from './ui/badge';
import { portfolioData } from '../mock';

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-slate-600">
            A diverse toolkit for driving growth through creative and data-driven strategies.
          </p>
        </div>

        {/* Skills Cloud */}
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              className="bg-white border-2 border-slate-200 text-slate-700 hover:border-teal-500 hover:bg-teal-50 hover:text-teal-700 px-6 py-3 text-base font-semibold cursor-default transition-all duration-300 hover:scale-105"
            >
              {skill}
            </Badge>
          ))}
        </div>

        {/* Additional Context */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 md:p-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">How I Work</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center mb-3">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-slate-900">Creative First</h4>
                <p className="text-sm text-slate-600">
                  Starting with bold ideas and experimenting with formats that break through the noise.
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center mb-3">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-slate-900">Data-Driven</h4>
                <p className="text-sm text-slate-600">
                  Using performance insights to iterate, optimize, and scale what works.
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center mb-3">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-slate-900">Growth-Focused</h4>
                <p className="text-sm text-slate-600">
                  Every piece of content is designed to drive engagement, visibility, and community growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;