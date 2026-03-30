import React, { useState } from 'react';
import { Mail, Linkedin, Twitter, Send, CheckCircle, Heart, Coffee } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { portfolioData } from '../mock';

const Connect = () => {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email Me',
      value: personal.email,
      href: `mailto:${personal.email}`,
      color: 'bg-cherry',
      description: 'Best for: Project inquiries & collaborations'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/vidhiverma2002',
      href: personal.linkedin,
      color: 'bg-blue-600',
      description: 'Best for: Professional networking'
    },
    {
      icon: Twitter,
      label: 'X (Twitter)',
      value: '@0xvidhi',
      href: personal.twitter,
      color: 'bg-black',
      description: 'Best for: Quick chats & hot takes'
    }
  ];

  return (
    <section id="connect" className="py-24 bg-gradient-to-br from-cherry-50 via-white to-brown-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-cherry-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-brown-200 rounded-full blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-cherry font-display font-semibold text-lg">// Let's Connect</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-black mb-6">
            Work With Me
          </h2>
          <p className="text-xl text-black/70 max-w-2xl mx-auto">
            Looking for someone who can turn your brand into a story people actually want to follow? Let's talk.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-3 border-black/10 shadow-xl bg-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-bold text-black mb-6">Drop Me a Message</h3>
              
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-cherry rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-black">Message Sent!</h4>
                  <p className="text-black/70 text-center">Thanks for reaching out! I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      required
                      className="border-2 border-black/10 focus:border-cherry"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      required
                      className="border-2 border-black/10 focus:border-cherry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
                      What's on your mind?
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, opportunity, or just say hi..."
                      required
                      rows={5}
                      className="border-2 border-black/10 focus:border-cherry"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-cherry hover:bg-cherry-600 text-white py-6 text-lg font-semibold"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Social Links & Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-bold text-black mb-6">Or Find Me Here</h3>
            
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <Card className="border-2 border-black/10 hover:border-cherry/50 hover:shadow-xl transition-all duration-300 bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 rounded-xl ${social.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-black text-lg mb-1">{social.label}</div>
                          <div className="text-sm text-black/60 mb-2">{social.value}</div>
                          <div className="text-xs text-black/50">{social.description}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              );
            })}

            {/* Fun CTA Box */}
            <div className="bg-gradient-to-r from-cherry to-brown rounded-2xl p-8 text-white mt-8">
              <div className="flex items-center gap-3 mb-4">
                <Coffee className="w-8 h-8" />
                <h4 className="text-xl font-display font-bold">Coffee Chat?</h4>
              </div>
              <p className="text-white/90 mb-4">
                I'm always up for a good conversation about growth marketing, content strategy, or the latest internet trends.
              </p>
              <p className="text-sm text-white/80">
                Open to: Full-time roles, Freelance projects, Consulting, Speaking
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;