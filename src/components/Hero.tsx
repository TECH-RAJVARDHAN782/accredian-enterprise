'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Award, 
  CheckCircle2,
  BarChart3,
  BrainCircuit,
  Zap,
  Play
} from 'lucide-react';

interface HeroProps {
  onOpenDemoModal: (programTitle?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemoModal }) => {
  const [activeTab, setActiveTab] = useState<'assessment' | 'roadmap' | 'roi'>('assessment');

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Glow & Mesh background effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Announcement Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-semibold shadow-inner">
              <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
              <span>Accredian Enterprise Solution 2.0</span>
              <span className="text-slate-500">|</span>
              <span className="text-cyan-400 font-bold">AI & Tech Upskilling</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Empower Your Workforce with <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                Next-Gen AI & Executive
              </span> Excellence
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Accelerate digital transformation with customized capability programs co-designed with premier institutes (IITs, IIMs, XLRI). Measure real-time ROI and bridge critical skill gaps.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onOpenDemoModal()}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-base shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>Schedule Enterprise Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#programs"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-slate-200 font-semibold text-base transition-all flex items-center justify-center gap-2"
              >
                <span>Explore Catalog</span>
              </a>
            </div>

            {/* Key Value Checklist */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-300 font-medium max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>CAT Skill Assessment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Live Executive Masterclasses</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Custom Industry Capstones</span>
              </div>
            </div>

            {/* Key Trust Stats Bar */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">50,000+</div>
                <div className="text-xs text-slate-400 font-medium">Professionals Upskilled</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono">200+</div>
                <div className="text-xs text-slate-400 font-medium">Enterprise Partners</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">85%</div>
                <div className="text-xs text-slate-400 font-medium">Productivity Gain</div>
              </div>
            </div>

          </div>

          {/* Right Column - Interactive Platform Preview Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 shadow-2xl backdrop-blur-xl relative">
              
              {/* Card Header & Tabs */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">Accredian Enterprise Suite</span>
                </div>
                <span className="text-[11px] bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded font-semibold">
                  LIVE DASHBOARD
                </span>
              </div>

              {/* Preview Navigation Tabs */}
              <div className="grid grid-cols-3 gap-1 bg-slate-950 p-1 rounded-lg text-xs font-semibold mb-5">
                <button
                  onClick={() => setActiveTab('assessment')}
                  className={`py-2 rounded-md transition-all ${
                    activeTab === 'assessment' 
                      ? 'bg-blue-600 text-white shadow' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Skill Gap
                </button>
                <button
                  onClick={() => setActiveTab('roadmap')}
                  className={`py-2 rounded-md transition-all ${
                    activeTab === 'roadmap' 
                      ? 'bg-blue-600 text-white shadow' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  AI Roadmap
                </button>
                <button
                  onClick={() => setActiveTab('roi')}
                  className={`py-2 rounded-md transition-all ${
                    activeTab === 'roi' 
                      ? 'bg-blue-600 text-white shadow' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  ROI Matrix
                </button>
              </div>

              {/* Tab Content Display */}
              {activeTab === 'assessment' && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                    <div>
                      <div className="text-xs text-slate-400">Target Enterprise Skill</div>
                      <div className="text-sm font-bold text-white">Generative AI & LLM Deployment</div>
                    </div>
                    <span className="text-xs bg-indigo-500/20 text-indigo-300 font-bold px-2 py-1 rounded">
                      High Priority Gap
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-300">Engineering Team Readiness</span>
                      <span className="text-blue-400 font-mono">78% Target Met</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full w-[78%]" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-300">Data & MLOps Infrastructure</span>
                      <span className="text-emerald-400 font-mono">92% Target Met</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-2 rounded-full w-[92%]" />
                    </div>
                  </div>

                  <div className="p-3 bg-blue-950/40 rounded-xl border border-blue-800/40 flex items-center gap-3">
                    <BrainCircuit className="w-6 h-6 text-blue-400 shrink-0" />
                    <div className="text-xs text-slate-300">
                      <span className="font-bold text-white">CAT Assessment Outcome:</span> Recommended 8-Week GenAI Masterclass cohort to raise team readiness to 95%.
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'roadmap' && (
                <div className="space-y-3">
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs">
                        W1-2
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Core Foundation</div>
                        <div className="text-[11px] text-slate-400">Enterprise LLM Architecture & API Setup</div>
                      </div>
                    </div>
                    <span className="text-xs text-emerald-400 font-semibold">Completed</span>
                  </div>

                  <div className="p-3 bg-slate-950 rounded-xl border border-blue-500/40 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-xs">
                        W3-6
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Capstone Project</div>
                        <div className="text-[11px] text-slate-400">Internal AI Customer Support Bot</div>
                      </div>
                    </div>
                    <span className="text-xs text-blue-400 font-semibold animate-pulse">In Progress</span>
                  </div>

                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 font-bold text-xs">
                        W7-8
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-300">Executive ROI Evaluation</div>
                        <div className="text-[11px] text-slate-400">IIT / Industry Certification Review</div>
                      </div>
                    </div>
                    <span className="text-xs text-slate-500 font-semibold">Upcoming</span>
                  </div>
                </div>
              )}

              {activeTab === 'roi' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                      <div className="text-[11px] text-slate-400">Est. Hours Saved/Yr</div>
                      <div className="text-xl font-bold text-white font-mono">14,200 hrs</div>
                      <div className="text-[10px] text-emerald-400">↑ 34% vs last Qtr</div>
                    </div>
                    <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                      <div className="text-[11px] text-slate-400">Estimated Cost ROI</div>
                      <div className="text-xl font-bold text-blue-400 font-mono">4.2x Returns</div>
                      <div className="text-[10px] text-blue-300">Verified by L&D Analytics</div>
                    </div>
                  </div>

                  <div className="p-3 bg-indigo-950/40 rounded-xl border border-indigo-800/40 text-xs text-slate-300">
                    <div className="font-bold text-white mb-1">C-Suite Impact Summary:</div>
                    Teams upskilled through Accredian reported 45% faster code deployments and 60% reduction in manual data tasks.
                  </div>
                </div>
              )}

              {/* Card Footer Button */}
              <button
                onClick={() => onOpenDemoModal()}
                className="mt-5 w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-blue-400 font-semibold text-xs border border-slate-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Custom Enterprise Assessment Report</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
