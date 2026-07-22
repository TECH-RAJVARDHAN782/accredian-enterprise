'use client';

import React from 'react';
import { UNIVERSITY_PARTNERS, ENTERPRISE_CLIENTS } from '@/data/partners';
import { GraduationCap, Building, ShieldCheck, Award } from 'lucide-react';

export const PartnersMarquee: React.FC = () => {
  return (
    <section className="bg-slate-900 border-y border-slate-800 py-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center justify-center gap-1.5">
            <Award className="w-4 h-4 text-cyan-400" />
            Academic Partners & Enterprise Clients
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white">
            Trusted by Top Premier Institutes & Global Enterprises
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Co-designed certifications and workforce transformation with world-class faculty.
          </p>
        </div>

        {/* University Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {UNIVERSITY_PARTNERS.map((partner) => (
            <div
              key={partner.id}
              className="bg-slate-950/80 hover:bg-slate-950 border border-slate-800 hover:border-blue-500/50 rounded-xl p-4 transition-all flex flex-col items-center justify-center text-center group shadow-md"
            >
              <div className="w-10 h-10 rounded-full bg-blue-900/30 text-blue-400 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center mb-2 transition-colors">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="font-bold text-sm text-slate-100 group-hover:text-blue-300 transition-colors">
                {partner.name}
              </div>
              {partner.badge && (
                <div className="text-[10px] text-slate-400 mt-1 font-medium bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                  {partner.badge}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Enterprise Logos Bar */}
        <div className="bg-slate-950/50 rounded-2xl border border-slate-800/80 p-6">
          <div className="text-xs text-center text-slate-400 font-medium mb-4 uppercase tracking-widest">
            Empowering Teams At Industry Leaders
          </div>
          <div className="flex flex-wrap items-center justify-around gap-6 text-slate-400 font-bold text-sm sm:text-base">
            {ENTERPRISE_CLIENTS.map((client) => (
              <div 
                key={client.id} 
                className="flex items-center gap-2 hover:text-white transition-colors opacity-80 hover:opacity-100"
              >
                <Building className="w-4 h-4 text-indigo-400" />
                <span>{client.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
