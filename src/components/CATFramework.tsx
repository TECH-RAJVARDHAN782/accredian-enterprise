'use client';

import React from 'react';
import { Target, Cpu, TrendingUp, ArrowRight, CheckCircle, BarChart3, Users, Zap } from 'lucide-react';

interface CATFrameworkProps {
  onOpenDemoModal: (programTitle?: string) => void;
}

export const CATFramework: React.FC<CATFrameworkProps> = ({ onOpenDemoModal }) => {
  const steps = [
    {
      num: '01',
      phase: 'ASSESS',
      title: 'Capability Gap Analysis',
      icon: Target,
      color: 'from-blue-500 to-cyan-500',
      borderColor: 'border-blue-500/30',
      glow: 'shadow-blue-500/10',
      description: 'We evaluate your workforce tech readiness using domain-specific diagnostic assessments and competency benchmarks.',
      points: [
        'Role-based skill mapping',
        'AI & Data readiness scoring',
        'Executive diagnostic reports'
      ]
    },
    {
      num: '02',
      phase: 'TRAIN',
      title: 'Customized Program Delivery',
      icon: Cpu,
      color: 'from-indigo-500 to-purple-500',
      borderColor: 'border-indigo-500/30',
      glow: 'shadow-indigo-500/10',
      description: 'Tailored learning paths co-designed with IIT/IIM faculty and industry leaders incorporating your proprietary tech stack.',
      points: [
        'Live masterclasses & labs',
        'Real-world business capstones',
        'Dedicated 1-on-1 mentorship'
      ]
    },
    {
      num: '03',
      phase: 'TRANSFORM',
      title: 'Real-Time Executive ROI',
      icon: TrendingUp,
      color: 'from-emerald-500 to-teal-500',
      borderColor: 'border-emerald-500/30',
      glow: 'shadow-emerald-500/10',
      description: 'Track team progress, project completion rates, and output efficiency gains via our C-Suite Analytics Dashboard.',
      points: [
        'Live L&D ROI dashboard',
        'Skill certification verification',
        'Post-training productivity lift'
      ]
    }
  ];

  return (
    <section id="framework" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            The Accredian Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">CAT Framework</span> for Enterprise Transformation
          </h2>
          <p className="text-slate-300 text-base">
            A proven end-to-end framework engineered to convert skill gaps into competitive business advantages.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.num}
                className={`bg-slate-900/90 rounded-2xl p-6 sm:p-8 border ${step.borderColor} shadow-xl ${step.glow} hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative group`}
              >
                {/* Step Top Bar */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-xs font-black px-2.5 py-1 rounded bg-gradient-to-r ${step.color} text-white tracking-wider`}>
                      PHASE {step.num}: {step.phase}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {step.description}
                  </p>

                  <div className="space-y-2 border-t border-slate-800/80 pt-4">
                    {step.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step Footer Action */}
                <button
                  onClick={() => onOpenDemoModal(`CAT Framework Phase ${step.num}: ${step.title}`)}
                  className="mt-8 w-full py-2.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-xs font-bold text-blue-400 border border-slate-800 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Explore Phase {step.num} Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

              </div>
            );
          })}
        </div>

        {/* Callout box */}
        <div className="mt-12 bg-gradient-to-r from-blue-900/40 via-indigo-900/40 to-slate-900 rounded-2xl border border-blue-500/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">Ready to assess your team's current AI & Data capability?</h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Get a complimentary Enterprise Skill Gap Diagnostic Report for up to 50 employees.
            </p>
          </div>
          <button
            onClick={() => onOpenDemoModal('Complimentary Skill Gap Assessment')}
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 shrink-0 cursor-pointer"
          >
            Claim Diagnostic Report
          </button>
        </div>

      </div>
    </section>
  );
};
