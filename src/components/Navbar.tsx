'use client';

import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Sparkles, 
  Menu, 
  X, 
  PhoneCall, 
  Database,
  ArrowRight,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';

interface NavbarProps {
  onOpenDemoModal: (programTitle?: string) => void;
  onOpenLeadsDrawer: () => void;
  leadsCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenDemoModal, 
  onOpenLeadsDrawer,
  leadsCount = 0 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white text-xs py-2 px-4 text-center font-medium border-b border-blue-800/40 flex items-center justify-center gap-2">
        <span className="bg-blue-500/20 text-blue-300 border border-blue-400/30 px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-semibold">
          2026 Executive L&D Report
        </span>
        <span className="hidden sm:inline text-slate-300">
          Transform workforce performance with custom GenAI & Data Science paths.
        </span>
        <button 
          onClick={() => onOpenDemoModal('2026 Enterprise Upskilling Report')} 
          className="underline hover:text-blue-300 ml-1 inline-flex items-center gap-1 font-semibold cursor-pointer"
        >
          Download Report <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800 shadow-xl py-3' 
          : 'bg-slate-950 border-b border-slate-800/80 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold tracking-tight text-white font-sans">
                    ACCREDIAN
                  </span>
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-slate-950 font-black text-[10px] px-1.5 py-0.5 rounded uppercase tracking-wider">
                    Enterprise
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 font-medium">Workforce Upskilling & AI</span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
              <a href="#programs" className="hover:text-blue-400 transition-colors flex items-center gap-1">
                Programs
              </a>
              <a href="#framework" className="hover:text-blue-400 transition-colors">
                CAT Framework
              </a>
              <a href="#calculator" className="hover:text-blue-400 transition-colors flex items-center gap-1">
                ROI Calculator
              </a>
              <a href="#features" className="hover:text-blue-400 transition-colors">
                Platform Features
              </a>
              <a href="#faq" className="hover:text-blue-400 transition-colors">
                FAQ
              </a>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* View API Captured Leads Drawer button */}
              <button
                onClick={onOpenLeadsDrawer}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer"
                title="View captured leads from Next.js API route"
              >
                <Database className="w-3.5 h-3.5 text-blue-400" />
                <span>Leads API</span>
                <span className="bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                  {leadsCount}
                </span>
              </button>

              <button
                onClick={() => onOpenDemoModal()}
                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-md shadow-blue-600/25 hover:shadow-blue-600/40 transition-all flex items-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Schedule Demo</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={onOpenLeadsDrawer}
                className="p-2 rounded-lg bg-slate-800 text-blue-400 border border-slate-700"
                aria-label="View API Leads"
              >
                <Database className="w-5 h-5" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white bg-slate-800 rounded-lg border border-slate-700"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-4 pb-6 space-y-4">
            <nav className="flex flex-col space-y-3 text-slate-300 font-medium text-base">
              <a 
                href="#programs" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-blue-400 py-1"
              >
                Programs
              </a>
              <a 
                href="#framework" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-blue-400 py-1"
              >
                CAT Framework
              </a>
              <a 
                href="#calculator" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-blue-400 py-1"
              >
                ROI Calculator
              </a>
              <a 
                href="#features" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-blue-400 py-1"
              >
                Platform Features
              </a>
              <a 
                href="#faq" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-blue-400 py-1"
              >
                FAQ
              </a>
            </nav>

            <div className="pt-2 border-t border-slate-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemoModal();
                }}
                className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-center flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                Schedule Demo
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
