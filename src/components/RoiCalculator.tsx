'use client';

import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingUp, Clock, Users, ArrowRight, Sparkles } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenDemoModal: (programTitle?: string) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenDemoModal }) => {
  const [teamSize, setTeamSize] = useState<number>(30);
  const [avgSalary, setAvgSalary] = useState<number>(75000); // $75,000 / year (~$36/hr)
  const [productivityGain, setProductivityGain] = useState<number>(25); // 25% lift

  // Calculation Math
  const workHoursPerYear = 1920; // 40 hrs * 48 weeks
  const hourlyRate = avgSalary / workHoursPerYear;
  
  // Saved hours per employee per year (e.g. 25% of 1920 = 480 hrs)
  const hoursSavedPerEmployee = Math.round(workHoursPerYear * (productivityGain / 100) * 0.35); // conservative 35% time reclamation
  const totalHoursSaved = hoursSavedPerEmployee * teamSize;
  const totalFinancialValue = Math.round(totalHoursSaved * hourlyRate);

  // Program cost estimation (approx $1,200 per seat)
  const estimatedCost = teamSize * 1200;
  const netSavings = totalFinancialValue - estimatedCost;
  const roiPercentage = Math.round((netSavings / estimatedCost) * 100);

  return (
    <section id="calculator" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-4 h-4 text-emerald-400" />
            C-Suite Value Estimator
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Calculate Your <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Enterprise Upskilling ROI</span>
          </h2>
          <p className="text-slate-300 text-base">
            See how upskilling your engineers and business leaders in AI & Data Science yields exponential productivity.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Form (Left) */}
          <div className="lg:col-span-6 bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-400" />
                Input Enterprise Parameters
              </h3>

              {/* Slider 1: Team Size */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <label className="text-slate-300">Cohort Team Size</label>
                  <span className="text-blue-400 font-mono text-base font-bold bg-blue-950 px-3 py-1 rounded border border-blue-800">
                    {teamSize} Employees
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="250"
                  step="5"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>5 seats</span>
                  <span>100 seats</span>
                  <span>250+ seats</span>
                </div>
              </div>

              {/* Slider 2: Average Salary */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <label className="text-slate-300">Avg. Annual Employee Salary ($)</label>
                  <span className="text-indigo-400 font-mono text-base font-bold bg-indigo-950 px-3 py-1 rounded border border-indigo-800">
                    ${avgSalary.toLocaleString()} / yr
                  </span>
                </div>
                <input
                  type="range"
                  min="40000"
                  max="160000"
                  step="5000"
                  value={avgSalary}
                  onChange={(e) => setAvgSalary(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>$40k</span>
                  <span>$100k</span>
                  <span>$160k+</span>
                </div>
              </div>

              {/* Slider 3: Target Productivity Lift */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <label className="text-slate-300">Target Efficiency & AI Speedup (%)</label>
                  <span className="text-emerald-400 font-mono text-base font-bold bg-emerald-950 px-3 py-1 rounded border border-emerald-800">
                    {productivityGain}% Lift
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="50"
                  step="5"
                  value={productivityGain}
                  onChange={(e) => setProductivityGain(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>10% (Modest)</span>
                  <span>25% (Standard)</span>
                  <span>50% (High AI Adoption)</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Calculations based on 1,920 working hours per year with conservative 35% time recovery factor.</span>
            </div>
          </div>

          {/* Results Summary (Right) */}
          <div className="lg:col-span-6 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 rounded-2xl border border-blue-500/30 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-white">Projected Enterprise Returns</h3>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold px-3 py-1 rounded-full">
                  Verified ROI Model
                </span>
              </div>

              {/* Big Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                
                {/* Total Financial Value */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <div className="text-xs text-slate-400 font-medium mb-1">
                    Est. Annual Financial Savings
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
                    ${totalFinancialValue.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    Value reclaimed across {teamSize} seats
                  </div>
                </div>

                {/* Projected ROI */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <div className="text-xs text-slate-400 font-medium mb-1">
                    Projected Net ROI %
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono">
                    +{roiPercentage}% ROI
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    After program seat costs
                  </div>
                </div>

              </div>

              {/* Hours Saved Stats */}
              <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-3 mb-6">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-300">Total Hours Reclaimed / Year:</span>
                  <span className="text-cyan-400 font-mono font-bold text-sm">
                    {totalHoursSaved.toLocaleString()} Hours
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-300">Hours Saved Per Employee:</span>
                  <span className="text-slate-200 font-mono font-bold text-sm">
                    ~{hoursSavedPerEmployee} Hours / yr
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-300">Estimated Seat Investment:</span>
                  <span className="text-slate-400 font-mono text-xs">
                    ${estimatedCost.toLocaleString()} total
                  </span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => onOpenDemoModal(`ROI Calculation for ${teamSize} Employees ($${totalFinancialValue.toLocaleString()} value)`)}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 hover:from-emerald-500 hover:to-blue-500 text-white font-extrabold text-sm shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <span>Get Detailed Enterprise ROI Report</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
