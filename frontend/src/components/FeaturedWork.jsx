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
              <div className="flex flex-col">
                {/* Image Section - Always on Top */}
                {project.images && project.images.length > 0 && (
                  <div className="relative flex flex-col w-full p-8 lg:p-12">
                    {/* Polaroid Stack Layout - Ghostwriting & Performance Ads */}
                    {(project.id === 11 || project.id === 5) ? (
                      <div className="relative w-full h-[600px] mx-auto max-w-3xl">
                        {project.images.map((img, imgIdx) => (
                          <div
                            key={imgIdx}
                            className="absolute bg-white p-3 shadow-2xl rounded-sm"
                            style={{
                              width: imgIdx === 0 ? '90%' : '85%',
                              top: imgIdx === 0 ? '0px' : `${(imgIdx) * 30 + 20}px`,
                              left: imgIdx === 0 ? '5%' : `${(imgIdx) * 12}px`,
                              transform: imgIdx === 0 ? 'rotate(0deg)' : `rotate(${imgIdx % 2 === 0 ? -2 : 2}deg)`,
                              zIndex: project.images.length - imgIdx,
                              border: '8px solid white',
                              boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                            }}
                          >
                            <img
                              src={img}
                              alt={project.id === 11 ? `LinkedIn Post ${imgIdx + 1}` : `Performance Ad ${imgIdx + 1}`}
                              className="w-full h-auto object-contain"
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      /* Regular Image Display */
                      <div className="flex flex-col items-center">
                        <div className="relative w-full max-w-3xl h-full min-h-[400px] bg-white rounded-lg overflow-hidden border-2 border-black/10">
                          <img
                            src={project.images[0]}
                            alt={project.title}
                            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        {/* Metric badges - BELOW IMAGE */}
                        <div className="flex gap-3 mt-6 flex-wrap justify-center">
                          {project.metrics.map((metric, idx) => (
                            <div
                              key={idx}
                              className="bg-white px-5 py-3 rounded-full border-2 border-cherry shadow-md"
                            >
                              <span className="font-display font-bold text-cherry text-xl">{metric.value}</span>
                              <span className="text-sm text-black/70 ml-2">{metric.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Content Section - Always Below */}
                <CardContent className="p-8 lg:p-12 flex flex-col">
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

                    {/* Instagram Links */}
                    {project.instagramLinks && project.instagramLinks.length > 0 && (
                      <div className="mt-6">
                        <div className="flex flex-wrap gap-3">
                          {project.instagramLinks.map((link, idx) => (
                            <a
                              key={idx}
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-3 bg-cherry hover:bg-cherry-600 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                            >
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                              </svg>
                              View on Instagram
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
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