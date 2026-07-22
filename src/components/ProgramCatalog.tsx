'use client';

import React, { useState } from 'react';
import { ENTERPRISE_PROGRAMS, Program } from '@/data/programs';
import { 
  Sparkles, 
  Clock, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  GraduationCap,
  Layers,
  Brain,
  BarChart2,
  Sliders,
  Briefcase
} from 'lucide-react';

interface ProgramCatalogProps {
  onOpenDemoModal: (programTitle?: string) => void;
}

export const ProgramCatalog: React.FC<ProgramCatalogProps> = ({ onOpenDemoModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Programs', icon: Layers },
    { id: 'genai', label: 'Generative AI', icon: Brain },
    { id: 'datascience', label: 'Data & Analytics', icon: BarChart2 },
    { id: 'leadership', label: 'Executive Leadership', icon: Briefcase },
    { id: 'product', label: 'Product & UX', icon: Sliders },
  ];

  const filteredPrograms = selectedCategory === 'all' 
    ? ENTERPRISE_PROGRAMS 
    : ENTERPRISE_PROGRAMS.filter(p => p.category === selectedCategory);

  return (
    <section id="programs" className="py-20 bg-slate-900 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            Curriculum Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Enterprise Upskilling <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">Programs</span>
          </h2>
          <p className="text-slate-300 text-base">
            Role-tailored masterclasses, certification tracks, and capability bootcamps designed for enterprise scale.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const IconComp = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 ring-2 ring-blue-400/50'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
                }`}
              >
                <IconComp className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-slate-950 rounded-2xl border border-slate-800 hover:border-blue-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-blue-900/10 group relative"
            >
              <div>
                {/* Header Tag & Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {program.badge}
                  </span>
                  {program.popular && (
                    <span className="text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Most Requested
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors leading-snug">
                  {program.title}
                </h3>

                {/* Info Pills */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-4 pb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <Users className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{program.format}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-xs leading-relaxed mb-5">
                  {program.description}
                </p>

                {/* Target Audience */}
                <div className="mb-5 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Target Cohort
                  </div>
                  <div className="text-xs font-semibold text-slate-200">
                    {program.targetAudience}
                  </div>
                </div>

                {/* Key Skills Tags */}
                <div className="mb-6">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Key Competencies
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {program.keySkills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-medium bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-4 border-t border-slate-800">
                <button
                  onClick={() => onOpenDemoModal(program.title)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <span>Request Cohort Syllabus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
