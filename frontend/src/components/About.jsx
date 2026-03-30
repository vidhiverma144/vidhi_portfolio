import React from 'react';
import { Target, Users, Lightbulb, BarChart3 } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { portfolioData } from '../mock';

const About = () => {
  const { whyTrustMe } = portfolioData;

  const strengths = [
    {
      icon: Target,
      title: "Content That Scales",
      description: "Expert in creating high-engagement social content that resonates and drives virality across platforms."
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Building and nurturing engaged communities through authentic storytelling and consistent brand voice."
    },
    {
      icon: Lightbulb,
      title: "Trend Spotting",
      description: "Quick to identify and leverage cultural trends, memes, and moments to amplify brand visibility."
    },
    {
      icon: BarChart3,
      title: "Data-Driven Strategy",
      description: "Combining creative experimentation with performance analysis to optimize engagement and growth."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            {whyTrustMe.title}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {whyTrustMe.description}
          </p>
        </div>

        {/* Strengths Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;
            return (
              <Card
                key={index}
                className="border-2 border-slate-200 hover:border-teal-400 hover:shadow-lg transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-slate-900">{strength.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{strength.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {whyTrustMe.highlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {highlight.metric}
                </div>
                <div className="text-blue-100 font-medium">{highlight.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;