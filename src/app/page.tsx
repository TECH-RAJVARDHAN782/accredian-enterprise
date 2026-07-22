'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { PartnersMarquee } from '@/components/PartnersMarquee';
import { CATFramework } from '@/components/CATFramework';
import { ProgramCatalog } from '@/components/ProgramCatalog';
import { RoiCalculator } from '@/components/RoiCalculator';
import { EnterpriseFeatures } from '@/components/EnterpriseFeatures';
import { Testimonials } from '@/components/Testimonials';
import { LeadCaptureSection } from '@/components/LeadCaptureSection';
import { FaqSection } from '@/components/FaqSection';
import { Footer } from '@/components/Footer';
import { LeadModal } from '@/components/LeadModal';
import { LeadsDrawer } from '@/components/LeadsDrawer';

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedProgramTitle, setSelectedProgramTitle] = useState<string | undefined>(undefined);
  const [isLeadsDrawerOpen, setIsLeadsDrawerOpen] = useState(false);
  const [leadsCount, setLeadsCount] = useState(2);

  const fetchLeadsCount = async () => {
    try {
      const res = await fetch('/api/leads');
      const data = await res.json();
      if (data.success && typeof data.totalCount === 'number') {
        setLeadsCount(data.totalCount);
      }
    } catch {
      // Ignore count fetch errors
    }
  };

  useEffect(() => {
    fetchLeadsCount();
  }, []);

  const handleOpenDemoModal = (programTitle?: string) => {
    setSelectedProgramTitle(programTitle);
    setIsDemoModalOpen(true);
  };

  const handleCloseDemoModal = () => {
    setIsDemoModalOpen(false);
    setSelectedProgramTitle(undefined);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white font-sans">
      
      {/* Header Navigation */}
      <Navbar 
        onOpenDemoModal={handleOpenDemoModal} 
        onOpenLeadsDrawer={() => setIsLeadsDrawerOpen(true)}
        leadsCount={leadsCount}
      />

      {/* Main Landing Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenDemoModal={handleOpenDemoModal} />

        {/* Partners & University Marquee */}
        <PartnersMarquee />

        {/* CAT Framework Breakdown */}
        <CATFramework onOpenDemoModal={handleOpenDemoModal} />

        {/* Course Catalog */}
        <ProgramCatalog onOpenDemoModal={handleOpenDemoModal} />

        {/* Interactive Enterprise ROI Calculator */}
        <RoiCalculator onOpenDemoModal={handleOpenDemoModal} />

        {/* Platform Features Grid */}
        <EnterpriseFeatures onOpenDemoModal={handleOpenDemoModal} />

        {/* Client Success Testimonials */}
        <Testimonials />

        {/* Embedded Lead Capture Form Section */}
        <LeadCaptureSection 
          onSuccess={fetchLeadsCount}
        />

        {/* FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modal Dialog for Lead Capture / Demo */}
      <LeadModal
        isOpen={isDemoModalOpen}
        onClose={handleCloseDemoModal}
        programTitle={selectedProgramTitle}
        onLeadSuccess={fetchLeadsCount}
      />

      {/* Slide-over Drawer for API Leads Review */}
      <LeadsDrawer
        isOpen={isLeadsDrawerOpen}
        onClose={() => setIsLeadsDrawerOpen(false)}
      />

    </div>
  );
}
