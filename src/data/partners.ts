export interface Partner {
  id: string;
  name: string;
  category: 'university' | 'enterprise';
  location?: string;
  badge?: string;
}

export const UNIVERSITY_PARTNERS: Partner[] = [
  { id: 'iit-delhi', name: 'IIT Delhi', category: 'university', badge: 'Executive Certifications' },
  { id: 'iim-ahmedabad', name: 'IIM Ahmedabad', category: 'university', badge: 'Leadership Excellence' },
  { id: 'xlri', name: 'XLRI Jamshedpur', category: 'university', badge: 'HR & Management' },
  { id: 'sp-jain', name: 'SP Jain Global', category: 'university', badge: 'Digital Business' },
  { id: 'iit-madras', name: 'IIT Madras', category: 'university', badge: 'Data Science & AI' },
  { id: 'iim-calcutta', name: 'IIM Calcutta', category: 'university', badge: 'Executive Strategy' },
];

export const ENTERPRISE_CLIENTS: Partner[] = [
  { id: 'tech-corp', name: 'GlobalTech Solutions', category: 'enterprise' },
  { id: 'fin-bank', name: 'Apex Financial Services', category: 'enterprise' },
  { id: 'health-core', name: 'Novus Health Systems', category: 'enterprise' },
  { id: 'retail-scale', name: 'OmniRetail Group', category: 'enterprise' },
  { id: 'cloud-scale', name: 'Strata Cloud Services', category: 'enterprise' },
  { id: 'data-works', name: 'Insight Analytics Labs', category: 'enterprise' },
];
