'use client';

import React from 'react';
import { Star, Quote, Building2, Award } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      quote: "Accredian transformed our engineering team's GenAI capabilities. The custom capstone built around our internal API specs allowed us to deploy 3 LLM features into production within 6 weeks.",
      author: "Vikramaditya Roy",
      role: "VP of Engineering & AI",
      company: "Apex Global Financial",
      metrics: "3.8x ROI within 90 days"
    },
    {
      quote: "The combination of top-tier university academic rigor and practical industry focus is unmatched. Our L&D team loved the live executive analytics dashboard for tracking cohort readiness.",
      author: "Meera Subramanian",
      role: "Chief Human Resources Officer",
      company: "Strata Cloud Systems",
      metrics: "94% Course Completion Rate"
    },
    {
      quote: "Up-skilling 120 senior data analysts with Accredian was the single best investment we made this year. The CAT diagnostic gap assessment laid out exactly where our team needed growth.",
      author: "Siddharth Mehta",
      role: "Head of Data & Analytics",
      company: "OmniRetail Technologies",
      metrics: "40% Increase in Deployments"
    }
  ];

  return (
    <section className="py-20 bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4 text-amber-400" />
            Client Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Loved by <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">Enterprise L&D Leaders</span>
          </h2>
          <p className="text-slate-300 text-base">
            See how leading organizations leverage Accredian Enterprise to build future-ready teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-slate-900 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between shadow-xl relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-700" />
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{review.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-2">
                <div className="text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-1 rounded w-fit">
                  Impact: {review.metrics}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{review.author}</div>
                  <div className="text-xs text-slate-400">{review.role} • <span className="text-blue-400">{review.company}</span></div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
