import React, { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { portfolioData } from '../mock';

const FeaturedWork = () => {
  const { featuredWork } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="py-24 bg-gradient-to-br from-white via-cherry-50/30 to-brown-50/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-block mb-4">
            <span className="text-cherry font-display font-semibold text-lg">// Featured Work</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-black mb-6">
            Campaigns That Made Impact
          </h2>
          <p className="text-xl text-black/70 max-w-2xl">
            From viral YouTube videos to 360° brand campaigns, here's how I turn strategy into results.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {featuredWork.map((project, index) => (
            <Card
              key={project.id}
              className="border-3 border-black/10 hover:border-cherry/30 hover:shadow-2xl transition-all duration-500 overflow-hidden group bg-white"
            >
              <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Image Section */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-video bg-gradient-to-br from-cherry-100 to-brown-100 overflow-hidden">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.objectFit = 'contain';
                        e.target.style.padding = '20px';
                      }}
                    />
                  </div>
                  {/* Floating metric badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {project.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-black/10 shadow-lg"
                      >
                        <span className="font-display font-bold text-cherry text-lg">{metric.value}</span>
                        <span className="text-xs text-black/60 ml-1">{metric.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content Section */}
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    {/* Title */}
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-display font-bold text-black mb-2 group-hover:text-cherry transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-lg text-cherry font-semibold">{project.subtitle}</p>
                    </div>

                    {/* Description */}
                    <p className="text-black/70 leading-relaxed">{project.description}</p>

                    {/* Role */}
                    <div className="bg-gradient-to-r from-cherry-50 to-brown-50 rounded-lg p-4 border-2 border-black/5">
                      <div className="text-xs font-bold text-black/60 uppercase tracking-wider mb-1">My Role</div>
                      <div className="text-sm font-semibold text-black">{project.role}</div>
                    </div>

                    {/* Impact Points */}
                    <div className="space-y-2">
                      {project.impact.slice(0, 3).map((point, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-cherry mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-black/70">{point}</p>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-black/5 text-black hover:bg-cherry hover:text-white transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;