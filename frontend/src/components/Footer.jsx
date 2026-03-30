import React from 'react';
import { Heart } from 'lucide-react';
import { portfolioData } from '../mock';

const Footer = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Name/Brand */}
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold">{personal.name}</h3>
            <p className="text-slate-400">{personal.tagline}</p>
          </div>

          {/* Center - Copyright */}
          <div className="text-slate-400 text-sm">
            <p className="flex items-center gap-2">
              © {currentYear} {personal.name}. Built with <Heart className="w-4 h-4 text-red-500" /> and lots of coffee.
            </p>
          </div>

          {/* Right - Quick Links */}
          <div className="flex gap-6">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-teal-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={personal.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-teal-400 transition-colors"
            >
              Twitter
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="text-slate-400 hover:text-teal-400 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;