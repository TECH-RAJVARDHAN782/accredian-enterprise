'use client';

import React from 'react';
import { 
  ShieldCheck, 
  BarChart4, 
  Layers, 
  Users, 
  GraduationCap, 
  Lock, 
  Workflow, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface EnterpriseFeaturesProps {
  onOpenDemoModal: (programTitle?: string) => void;
}

export const EnterpriseFeatures: React.FC<EnterpriseFeaturesProps> = ({ onOpenDemoModal }) => {
  const features = [
    {
      icon: BarChart4,
      title: 'Executive ROI & Skill Dashboards',
      description: 'Track real-time employee engagement, module completion rates, diagnostic skill scores, and project submissions through a centralized C-Suite dashboard.',
      badge: 'Analytics'
    },
    {
      icon: Lock,
      title: 'Enterprise SSO & LMS Integration',
      description: 'Seamless integration with Okta, Azure AD, Workday, Degreed, and LTI-compliant enterprise learning portals for single sign-on access.',
      badge: 'Security & SSO'
    },
    {
      icon: Workflow,
      title: 'Contextual Capstone Projects',
      description: 'We build capstone projects directly using your enterprise codebase, synthetic datasets, and API specs so learnings convert into production solutions.',
      badge: 'Customization'
    },
    {
      icon: GraduationCap,
      title: 'Premier Institute Certifications',
      description: 'Participants receive executive certificates recognized by top institutions (IITs, IIMs, XLRI) validating technical competence.',
      badge: 'Credentialing'
    },
    {
      icon: Users,
      title: 'Dedicated Enterprise Success Lead',
      description: 'Direct access to an assigned L&D Account Director providing weekly attendance reporting, learner nudges, and 1-on-1 coaching support.',
      badge: 'Support'
    },
    {
      icon: ShieldCheck,
      title: 'SOC2 & ISO Compliant Security',
      description: 'Enterprise data privacy controls ensuring your proprietary company data, IP, and code remain fully protected throughout training.',
      badge: 'Compliance'
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-4 h-4 text-indigo-400" />
            Built for Global Scale
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Enterprise-Grade <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">Infrastructure & Platform</span>
          </h2>
          <p className="text-slate-300 text-base">
            Everything your L&D and technology leaders need to manage, scale, and measure workforce upskilling.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-950 rounded-2xl border border-slate-800 p-6 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-950/60 border border-indigo-800/40 text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-900">
                  <button
                    onClick={() => onOpenDemoModal(item.title)}
                    className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Learn platform details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
