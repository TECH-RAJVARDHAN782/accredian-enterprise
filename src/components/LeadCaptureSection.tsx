'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Building2, Mail, User, Users, Sparkles, PhoneCall } from 'lucide-react';

interface LeadCaptureSectionProps {
  defaultProgram?: string;
  onSuccess?: () => void;
}

export const LeadCaptureSection: React.FC<LeadCaptureSectionProps> = ({ 
  defaultProgram = 'Generative AI for Enterprise Leaders',
  onSuccess 
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    corporateEmail: '',
    companyName: '',
    teamSize: '20-100',
    programInterest: defaultProgram,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    // Client-side validations
    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      setIsSubmitting(false);
      return;
    }

    if (!formData.corporateEmail.trim() || !formData.corporateEmail.includes('@')) {
      setErrorMessage('Please enter a valid corporate email address.');
      setIsSubmitting(false);
      return;
    }

    if (!formData.companyName.trim()) {
      setErrorMessage('Please enter your company or organization name.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit lead inquiry.');
      }

      setSuccessMessage(data.message || 'Inquiry submitted successfully!');
      
      // Reset form
      setFormData({
        fullName: '',
        corporateEmail: '',
        companyName: '',
        teamSize: '20-100',
        programInterest: defaultProgram,
        message: ''
      });

      if (onSuccess) {
        onSuccess();
      }
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setErrorMessage(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="lead-form" className="py-20 bg-slate-900 text-white border-t border-slate-800 relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <PhoneCall className="w-3.5 h-3.5" />
              Schedule Enterprise Consultation
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Transform Your <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Enterprise Workforce?</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Connect with an Accredian Enterprise Solutions Director to receive a customized curriculum proposal, sample diagnostic reports, and cohort pricing.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-800 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">4-Hour Response SLA</div>
                  <div className="text-xs text-slate-400">Our senior enterprise leads respond within 4 business hours.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-950 border border-indigo-800 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Free Capability Assessment</div>
                  <div className="text-xs text-slate-400">Includes complimentary skill diagnostic evaluation for your cohort.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-800 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Custom Capstone Preview</div>
                  <div className="text-xs text-slate-400">Tailored around your organization tech stack and API requirements.</div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400 font-medium">
              🔒 <span className="text-slate-200">Strict Data Privacy:</span> Your corporate details are protected under NDA and SOC2 security standards.
            </div>
          </div>

          {/* Right Column Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl relative">
              
              <div className="mb-6 pb-4 border-b border-slate-800">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-400" />
                  Request Enterprise Proposal & Demo
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Fill in your corporate details to receive a custom solution deck.
                </p>
              </div>

              {/* Status Alert Messages */}
              {errorMessage && (
                <div className="mb-6 p-4 rounded-xl bg-red-950/80 border border-red-800 text-red-300 text-xs flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {successMessage && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/90 border border-emerald-700 text-emerald-200 text-xs flex items-start gap-3 shadow-lg">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-sm text-white mb-1">Request Received!</div>
                    <div>{successMessage}</div>
                  </div>
                </div>
              )}

              {/* Form Controls */}
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-blue-400" />
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Ananya Sharma"
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 focus:border-blue-500 focus:outline-none text-white text-sm placeholder-slate-500 transition-colors"
                    />
                  </div>

                  {/* Corporate Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-blue-400" />
                      Corporate Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="corporateEmail"
                      value={formData.corporateEmail}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 focus:border-blue-500 focus:outline-none text-white text-sm placeholder-slate-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Company Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-blue-400" />
                      Company / Organization <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="e.g. Acme Corp"
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 focus:border-blue-500 focus:outline-none text-white text-sm placeholder-slate-500 transition-colors"
                    />
                  </div>

                  {/* Team Size */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-blue-400" />
                      Target Cohort Size
                    </label>
                    <select
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 focus:border-blue-500 focus:outline-none text-white text-sm transition-colors"
                    >
                      <option value="5-20">5 to 20 Employees</option>
                      <option value="20-100">20 to 100 Employees</option>
                      <option value="100-500">100 to 500 Employees</option>
                      <option value="500+">500+ Enterprise Wide</option>
                    </select>
                  </div>
                </div>

                {/* Program Interest */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Primary Upskilling Interest
                  </label>
                  <select
                    name="programInterest"
                    value={formData.programInterest}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 focus:border-blue-500 focus:outline-none text-white text-sm transition-colors"
                  >
                    <option value="Generative AI for Enterprise Leaders">Generative AI for Enterprise Leaders</option>
                    <option value="Advanced Data Science & MLOps Architecture">Advanced Data Science & MLOps Architecture</option>
                    <option value="AI-First Product Management & Design">AI-First Product Management & Design</option>
                    <option value="Digital Enterprise & Strategic Innovation">Digital Enterprise & Strategic Innovation</option>
                    <option value="Executive Business Analytics & BI Dashboards">Executive Business Analytics & BI Dashboards</option>
                    <option value="Custom Enterprise Capability Track">Custom Tailored Enterprise Bootcamp</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Specific Learning Goals / Requirements (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your team's current stack, goals, or preferred timeline..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 focus:border-blue-500 focus:outline-none text-white text-sm placeholder-slate-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-sm shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Enterprise Request (Stores via API)</span>
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
