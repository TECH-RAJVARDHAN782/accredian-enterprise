export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Customization' | 'Integration' | 'Pricing & ROI';
}

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'How does Accredian Enterprise differ from standard retail courses?',
    answer: 'Accredian Enterprise programs are engineered specifically for corporate cohorts. We co-create custom learning paths aligned with your technology stack, business objectives, and internal data frameworks, supported by dedicated enterprise success managers and real-time ROI tracking.'
  },
  {
    id: 'faq-2',
    category: 'Customization',
    question: 'Can the curriculum be customized to match our proprietary tech stack?',
    answer: 'Yes! Through our CAT (Capability Assessment & Training) framework, our academic leads and industry experts tailor capstone projects, lab environments, and case studies around your proprietary workflows, APIs, and security guidelines.'
  },
  {
    id: 'faq-3',
    category: 'Integration',
    question: 'Does Accredian integrate with enterprise LMS and SSO platforms?',
    answer: 'Absolutely. We support seamless SSO (SAML 2.0, OAuth, Azure AD, Okta) and LTI-compliant integration with major enterprise Learning Management Systems including Workday, Cornerstone, Degreed, and SuccessFactors.'
  },
  {
    id: 'faq-4',
    category: 'Pricing & ROI',
    question: 'How do you measure and report the ROI of upskilling programs?',
    answer: 'Every enterprise partner receives access to our live Executive Analytics Dashboard. We track competency progression, pre- vs post-assessment benchmarks, project completion metrics, and operational productivity output gains to provide quantitative ROI metrics.'
  },
  {
    id: 'faq-5',
    category: 'General',
    question: 'What format are the enterprise sessions conducted in?',
    answer: 'We offer flexible blended delivery modes including live interactive virtual masterclasses, self-paced modular labs, instructor-led hackathons, and on-site executive immersion bootcamps depending on team availability and geographic distribution.'
  },
  {
    id: 'faq-6',
    category: 'Pricing & ROI',
    question: 'What is the minimum team size required for enterprise programs?',
    answer: 'While our enterprise solutions are optimized for teams of 10 to 1,000+ professionals, we also accommodate smaller specialized executive cohorts of 5+ senior leaders looking for targeted masterclasses.'
  }
];
