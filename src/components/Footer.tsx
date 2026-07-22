'use client';

import React from 'react';
import { Building2, Mail, Phone, MapPin, Globe, Share2, ExternalLink, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/25">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white font-sans">
                  ACCREDIAN
                </span>
                <span className="ml-2 bg-gradient-to-r from-blue-400 to-cyan-400 text-slate-950 font-black text-[10px] px-1.5 py-0.5 rounded uppercase tracking-wider">
                  Enterprise
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Accredian Enterprise partners with Fortune 500 corporations and fast-growing tech teams to deliver custom capability transformation in Generative AI, Data Science, and Executive Leadership.
            </p>

            <div className="pt-2 flex items-center gap-3 text-slate-400">
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-blue-400 hover:border-blue-500/40 transition-colors" title="Global Portal">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-blue-400 hover:border-blue-500/40 transition-colors" title="Social Connect">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-blue-400 hover:border-blue-500/40 transition-colors" title="Enterprise Network">
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Enterprise Solutions
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#programs" className="hover:text-blue-400 transition-colors">GenAI Masterclass</a></li>
              <li><a href="#programs" className="hover:text-blue-400 transition-colors">MLOps & Data Science</a></li>
              <li><a href="#programs" className="hover:text-blue-400 transition-colors">AI-First Product Management</a></li>
              <li><a href="#programs" className="hover:text-blue-400 transition-colors">Digital Transformation</a></li>
              <li><a href="#framework" className="hover:text-blue-400 transition-colors">CAT Assessment Framework</a></li>
            </ul>
          </div>

          {/* Platform & Trust */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Platform & Trust
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#calculator" className="hover:text-blue-400 transition-colors">C-Suite ROI Estimator</a></li>
              <li><a href="#features" className="hover:text-blue-400 transition-colors">Executive Dashboard</a></li>
              <li><a href="#features" className="hover:text-blue-400 transition-colors">SSO & LMS Integrations</a></li>
              <li><a href="#features" className="hover:text-blue-400 transition-colors">IIT / IIM Certifications</a></li>
              <li><a href="#faq" className="hover:text-blue-400 transition-colors">Enterprise FAQs</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Corporate Office
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>enterprise@accredian.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>+1 (800) 555-ACCREDIAN</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>Tech Park Tower B, Cyber City, Global Innovation Hub</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Accredian Enterprise Solutions. All rights reserved. Recreated for Developer Assignment.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <button 
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
