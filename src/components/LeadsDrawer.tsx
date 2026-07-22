'use client';

import React, { useState, useEffect } from 'react';
import { X, Database, RefreshCw, Mail, Building2, User, Users, Calendar, CheckCircle2 } from 'lucide-react';
import { LeadRecord } from '@/app/api/leads/route';

interface LeadsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadsDrawer: React.FC<LeadsDrawerProps> = ({ isOpen, onClose }) => {
  const [leads, setLeads] = useState<LeadRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchLeads = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/leads');
      const data = await res.json();
      if (data.success && Array.isArray(data.leads)) {
        setLeads(data.leads);
      } else {
        throw new Error('Failed to load leads list.');
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Error fetching API leads';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchLeads();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/70 backdrop-blur-sm">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col justify-between text-white relative z-10">
          
          {/* Drawer Header */}
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                <Database className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-base text-white">Submitted Leads API</h3>
                <div className="text-xs text-slate-400">Endpoint: GET /api/leads</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={fetchLeads}
                disabled={loading}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                title="Refresh leads"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Leads List Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            
            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-xs text-slate-400">
              💡 <span className="text-slate-200 font-semibold">Live Evaluation Panel:</span> Submissions captured via the landing page or demo modal are stored in memory/file and returned by the Next.js API route.
            </div>

            {loading && (
              <div className="py-12 text-center text-slate-400 text-xs flex flex-col items-center gap-2">
                <RefreshCw className="w-6 h-6 animate-spin text-blue-400" />
                <span>Fetching captured leads...</span>
              </div>
            )}

            {error && (
              <div className="p-4 rounded-xl bg-red-950/80 border border-red-800 text-red-300 text-xs">
                {error}
              </div>
            )}

            {!loading && !error && leads.length === 0 && (
              <div className="py-12 text-center text-slate-500 text-xs">
                No lead inquiries recorded yet. Submit the lead form to test!
              </div>
            )}

            {!loading && leads.map((lead) => (
              <div 
                key={lead.id} 
                className="bg-slate-950 rounded-xl border border-slate-800 p-4 space-y-2 hover:border-blue-500/30 transition-all text-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-white flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-blue-400" />
                    {lead.fullName}
                  </span>
                  <span className="text-[10px] bg-blue-500/20 text-blue-300 border border-blue-500/30 px-2 py-0.5 rounded-full font-bold">
                    {lead.status}
                  </span>
                </div>

                <div className="text-slate-300 font-mono text-[11px] flex items-center gap-1.5">
                  <Mail className="w-3 h-3 text-slate-400" />
                  {lead.corporateEmail}
                </div>

                <div className="flex items-center justify-between text-slate-400 text-[11px] pt-1 border-t border-slate-900">
                  <span className="flex items-center gap-1">
                    <Building2 className="w-3 h-3 text-indigo-400" />
                    {lead.companyName} ({lead.teamSize})
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[10px]">
                    <Calendar className="w-3 h-3" />
                    {new Date(lead.submittedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>

                <div className="bg-slate-900 p-2 rounded border border-slate-800 text-slate-300 text-[11px]">
                  <span className="text-slate-400 font-semibold">Interest:</span> {lead.programInterest}
                  {lead.message && (
                    <div className="mt-1 text-slate-400 italic">"{lead.message}"</div>
                  )}
                </div>
              </div>
            ))}

          </div>

          {/* Drawer Footer */}
          <div className="p-4 border-t border-slate-800 bg-slate-950 text-center text-xs text-slate-400">
            Total Leads Captured: <span className="font-bold text-white font-mono">{leads.length}</span>
          </div>

        </div>
      </div>
    </div>
  );
};
