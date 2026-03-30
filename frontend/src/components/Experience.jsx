import React from 'react';
import { Building2, Calendar, TrendingUp, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { portfolioData } from '../mock';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-slate-600">
            Building brands and driving growth across fast-moving startups and agencies.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <Card
              key={exp.id}
              className="border-2 border-slate-200 hover:border-teal-400 hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <CardHeader className="bg-gradient-to-r from-blue-50 to-teal-50 border-b-2 border-slate-200">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Building2 className="w-5 h-5 text-teal-600" />
                      <h3 className="text-2xl font-bold text-slate-900">{exp.company}</h3>
                    </div>
                    <p className="text-lg font-semibold text-blue-600">{exp.role}</p>
                    <p className="text-sm text-slate-600">{exp.description}</p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 flex-shrink-0">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                {/* Metrics */}
                {exp.metrics && exp.metrics.length > 0 && (
                  <div className="mb-6 flex flex-wrap gap-4">
                    {exp.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="bg-white border-2 border-slate-200 rounded-lg px-4 py-3 group-hover:border-teal-400 transition-colors"
                      >
                        <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                        <div className="text-xs text-slate-600 font-medium">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Achievements */}
                <div className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                      <p className="text-slate-700 leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;