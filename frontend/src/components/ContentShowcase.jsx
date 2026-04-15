import React from 'react';
import { Play, Image as ImageIcon, FileText } from 'lucide-react';
import { portfolioData } from '../mock';

const ContentShowcase = () => {
  const { contentShowcase } = portfolioData;

  const getIcon = (type) => {
    switch (type) {
      case 'video':
        return <Play className="w-6 h-6" />;
      case 'post':
        return <ImageIcon className="w-6 h-6" />;
      case 'reel':
        return <Play className="w-6 h-6" />;
      default:
        return <FileText className="w-6 h-6" />;
    }
  };

  return (
    <section id="content" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-4">
            <span className="text-cherry font-display font-semibold text-lg">// Content Wall</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-black mb-6">
            Content That Connects
          </h2>
          <p className="text-xl text-black/70 max-w-2xl mx-auto">
            A glimpse into the videos, posts, and campaigns that drove real engagement.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {contentShowcase.map((item, index) => {
            // Determine card size - make first card span 2 columns
            const isLarge = index === 0;
            const gridClass = isLarge ? 'md:col-span-2' : '';

            return (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-hidden rounded-2xl border-3 border-black/10 hover:border-cherry/50 transition-all duration-300 hover:shadow-2xl cursor-pointer bg-black ${gridClass}`}
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-cherry rounded-full flex items-center justify-center">
                          {getIcon(item.type)}
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider">{item.platform}</span>
                      </div>
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-sm text-white/80">{item.metric}</p>
                    </div>
                  </div>

                  {/* Platform badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-black shadow-lg">
                      {item.platform}
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-cherry-50 to-brown-50 rounded-2xl p-8 border-2 border-black/5">
            <h3 className="text-2xl font-display font-bold text-black mb-3">
              Want to see more?
            </h3>
            <p className="text-black/70 mb-6">
              I've got case studies, scripts, and behind-the-scenes content to share.
            </p>
            <a
              href="#connect"
              className="inline-flex items-center gap-2 bg-cherry hover:bg-cherry-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Let's connect and I'll show you more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentShowcase;