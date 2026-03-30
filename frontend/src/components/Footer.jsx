import React from 'react';
import { Heart } from 'lucide-react';
import { portfolioData } from '../mock';

const Footer = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left - Brand */}
          <div className="space-y-3">
            <h3 className="text-2xl font-display font-bold">Vidhi Verma</h3>
            <p className="text-white/70">Growth Marketer & Content Strategist</p>
            <p className="text-white/60 text-sm">
              Turning brands into stories people actually care about.
            </p>
          </div>

          {/* Center - Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-cherry">Quick Links</h4>
            <div className="space-y-2">
              <a href="#work" className="block text-white/70 hover:text-cherry transition-colors">
                Featured Work
              </a>
              <a href="#about" className="block text-white/70 hover:text-cherry transition-colors">
                About Me
              </a>
              <a href="#content" className="block text-white/70 hover:text-cherry transition-colors">
                Content Wall
              </a>
              <a href="#connect" className="block text-white/70 hover:text-cherry transition-colors">
                Let's Connect
              </a>
            </div>
          </div>

          {/* Right - Social */}
          <div>
            <h4 className="font-bold mb-4 text-cherry">Connect</h4>
            <div className="space-y-2">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/70 hover:text-cherry transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={personal.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/70 hover:text-cherry transition-colors"
              >
                Twitter/X
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="block text-white/70 hover:text-cherry transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm flex items-center gap-2">
              © {currentYear} Vidhi Verma. Crafted with <Heart className="w-4 h-4 text-cherry" fill="currentColor" /> and way too much coffee.
            </p>
            <p className="text-white/40 text-xs">
              Built to showcase, designed to impress.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;