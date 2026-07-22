export interface Program {
  id: string;
  title: string;
  category: 'genai' | 'datascience' | 'leadership' | 'product';
  badge: string;
  duration: string;
  format: string;
  targetAudience: string;
  description: string;
  keySkills: string[];
  outcomes: string[];
  partnerLogo?: string;
  popular?: boolean;
}

export const ENTERPRISE_PROGRAMS: Program[] = [
  {
    id: 'genai-exec',
    title: 'Generative AI for Enterprise Leaders',
    category: 'genai',
    badge: 'Flagship Executive',
    duration: '8 Weeks (Live Online)',
    format: 'Executive Masterclass + Capstone',
    targetAudience: 'VPs, CTOs, Tech Directors & Business Unit Heads',
    description: 'Master strategic adoption of LLMs, enterprise GenAI governance, fine-tuning methodologies, and AI ROI frameworks to drive enterprise-wide innovation.',
    keySkills: ['Enterprise LLMs', 'Prompt Engineering', 'AI Architecture', 'AI Ethics & Risk', 'ROI Measurement'],
    outcomes: ['Deploy enterprise LLM workflows', 'Reduce operational friction by 35%', 'Formulate AI governance framework'],
    popular: true,
  },
  {
    id: 'applied-datascience',
    title: 'Advanced Data Science & MLOps Architecture',
    category: 'datascience',
    badge: 'Technical Upskilling',
    duration: '12 Weeks (Hybrid)',
    format: 'Hands-on Labs + Industry Projects',
    targetAudience: 'Senior Engineers, Data Analysts & Systems Architects',
    description: 'Scale machine learning pipelines from experimentation to production. Covers automated MLOps, cloud data lakes, and predictive analytics at scale.',
    keySkills: ['Python & PyTorch', 'MLOps Pipelines', 'Feature Stores', 'Predictive Modeling', 'Kubernetes Deployments'],
    outcomes: ['Automate ML model lifecycle', 'Improve model accuracy by 40%', 'Build robust CI/CD for Data'],
    popular: true,
  },
  {
    id: 'ai-driven-product',
    title: 'AI-First Product Management & Design',
    category: 'product',
    badge: 'Product Elevation',
    duration: '6 Weeks (Live Online)',
    format: 'Product Sprint & UX Labs',
    targetAudience: 'Product Managers, UX Leads & Growth Directors',
    description: 'Transform traditional product lifecycles by embedding artificial intelligence, user feedback loops, and intelligent feature design.',
    keySkills: ['AI User Experience', 'Product Analytics', 'Rapid AI Prototyping', 'Feature Prioritization'],
    outcomes: ['Launch AI-augmented features 2x faster', 'Boost product retention', 'Design intuitive AI interfaces'],
  },
  {
    id: 'digital-leadership',
    title: 'Digital Enterprise & Strategic Innovation',
    category: 'leadership',
    badge: 'Executive Leadership',
    duration: '10 Weeks (Executive Format)',
    format: 'Case Study Immersion + Coaching',
    targetAudience: 'C-Suite, Business Leaders & Operations Directors',
    description: 'Empower executive teams to lead organizational transformation, modernizing legacy systems while cultivating an agile innovation culture.',
    keySkills: ['Digital Transformation', 'Agile Governance', 'Change Management', 'Data-Driven Decision Making'],
    outcomes: ['Align tech initiatives with revenue goals', 'Foster cross-functional agility', 'Eliminate legacy bottlenecks'],
  },
  {
    id: 'business-analytics-exec',
    title: 'Executive Business Analytics & BI Dashboards',
    category: 'datascience',
    badge: 'Business Intelligence',
    duration: '6 Weeks (Live Online)',
    format: 'Workshop & Real-time Dashboards',
    targetAudience: 'Business Analysts, Finance Leads & Operations Managers',
    description: 'Bridge raw enterprise data with strategic insights using modern BI tools, SQL analytics, and automated reporting systems.',
    keySkills: ['SQL Analytics', 'Power BI & Tableau', 'Executive Dashboards', 'Statistical Modeling'],
    outcomes: ['Build live C-Suite KPI dashboards', 'Drive data-backed strategy', 'Reduce reporting latency by 60%'],
  },
  {
    id: 'custom-enterprise-bootcamp',
    title: 'Custom Enterprise Capability Track',
    category: 'genai',
    badge: 'Tailored Solution',
    duration: 'Customizable (1 to 6 Months)',
    format: 'Blended Live + On-Demand + Mentorship',
    targetAudience: 'Cross-functional Enterprise Cohorts (20 to 1,000+ Learners)',
    description: 'Co-created program customized around your organization tech stack, security policies, and domain-specific business goals.',
    keySkills: ['Custom Tech Stacks', 'Enterprise Capstones', 'Internal API Integrations', 'Domain AI Use Cases'],
    outcomes: ['100% contextual business projects', 'Direct team performance lift', 'Guaranteed skill proficiency'],
    popular: true,
  },
];
