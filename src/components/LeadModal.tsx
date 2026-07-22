'use client';

import React, { useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';
import { LeadCaptureSection } from './LeadCaptureSection';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  programTitle?: string;
  onLeadSuccess?: () => void;
}

export const LeadModal: React.FC<LeadModalProps> = ({ 
  isOpen, 
  onClose, 
  programTitle,
  onLeadSuccess 
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      
      <div 
        className="relative w-full max-w-4xl bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content */}
        <div className="p-2 sm:p-6">
          <LeadCaptureSection 
            defaultProgram={programTitle || 'Generative AI for Enterprise Leaders'}
            onSuccess={() => {
              if (onLeadSuccess) onLeadSuccess();
              setTimeout(() => {
                onClose();
              }, 2500);
            }}
          />
        </div>

      </div>

    </div>
  );
};
