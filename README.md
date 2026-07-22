# Accredian Enterprise - Workforce Upskilling Platform (Partial Clone)

An enterprise-grade, high-converting landing page and lead capture platform recreating **[Accredian Enterprise](https://enterprise.accredian.com/)**. Built with **Next.js (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and custom **API route integration**.

---

## 🚀 Key Features & Scope Implemented

- **Landing Page Sections**:
  - **Header & Responsive Navigation**: Desktop & Mobile drawer navigation with active links, "Schedule Demo" trigger, and live API lead counter.
  - **Hero Section**: Value proposition headline, trust badges (50,000+ professionals upskilled, 200+ clients), key CTAs, and an interactive **Live Accredian Suite Preview Card** (Skill Gap, AI Roadmap, ROI Matrix).
  - **Academic & Enterprise Marquee**: Displaying premier academic partners (IIT Delhi, IIM Ahmedabad, XLRI, SP Jain) and enterprise client badges.
  - **Accredian CAT Framework**: Interactive 3-step breakdown (*Capability Gap Assessment*, *Customized Training Delivery*, *Real-Time Executive ROI*).
  - **Filterable Program Portfolio**: Categorized curriculum cards (*GenAI*, *Data Science*, *Executive Leadership*, *Product & UX*) with detailed competency tags and syllabus request triggers.
  - **C-Suite ROI Calculator**: Interactive calculator allowing L&D leaders to slide cohort sizes, salary baselines, and target productivity lift to compute annual financial savings and projected net ROI %.
  - **Enterprise Platform Features**: Security grid covering ROI dashboards, Okta/Azure AD SSO, SOC2 compliance, custom capstones, and dedicated L&D success leads.
  - **Social Proof & Testimonials**: Verified case study quotes from VPs of Engineering and CHROs.
  - **Lead Capture Form (Embedded & Modal)**: Real-time form with corporate email validation, cohort size selector, program interest dropdown, and API integration.
  - **Interactive FAQ Accordion**: Answering core questions regarding customization, LMS integrations, and cohort sizing.
  - **Submitted Leads Drawer**: Live evaluation panel allowing reviewers to view leads stored via the Next.js API route.

---

## 🛠️ Tech Stack & Requirements

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (Vanilla CSS variables + utility classes)
- **Icons**: `lucide-react`
- **API Routes**: Next.js Route Handlers (`src/app/api/leads/route.ts`)
- **State Management**: React Hooks (`useState`, `useEffect`)

---

## 📥 Setup Instructions (Local Development)

Follow these steps to run the application locally on your machine:

### 1. Prerequisites
Ensure you have **Node.js** (v18.0 or higher) and **npm** installed.

```bash
node -v
npm -v
```

### 2. Clone the Repository
```bash
git clone https://github.com/TECH-RAJVARDHAN782/accredian-enterprise.git
cd accredian-enterprise
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run the Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 5. Build & Test Production Bundle
```bash
npm run build
npm run start
```

---

## 🔌 API Route Integration (`/api/leads`)

The app includes a fully functional Next.js API route at `POST /api/leads` and `GET /api/leads`.

### `POST /api/leads`
- **Description**: Receives lead capture form inquiries from both the modal and embedded page section.
- **Validation**: Checks for full name (min 2 chars), valid corporate email (`@`), company name, and program selection.
- **Persistence**: Stores leads in memory (serverless environment safe) and appends to local `data/leads.json` file when writable.
- **Response**: Returns `201 Created` with created lead object and SLA response message.

### `GET /api/leads`
- **Description**: Returns all stored leads for live verification in the "Leads API" drawer in the header.

---

## 🤖 AI Usage Disclosure (Submission Requirement)

### Where AI Helped
1. **Initial Boilerplate & Component Architecture**: AI assisted in scaffolding modular Next.js functional components (`CATFramework`, `RoiCalculator`, `ProgramCatalog`, `LeadsDrawer`) with proper TypeScript interfaces.
2. **Interactive Calculator Logic**: Assisted in modeling real-world enterprise ROI equations (working hours per year, time reclamation factors, seat cost calculations).
3. **Structured Dataset Generation**: Generated realistic data for academic partners (IITs, IIMs), course offerings, enterprise features, and comprehensive FAQs.

### What Was Modified & Improved Manually
1. **Design Systems & Glassmorphism Aesthetics**: Fine-tuned color palettes (deep Slate background `#020617`, royal blue highlights `#2563EB`, cyan accents `#06B6D4`, and emerald metric badges) to create a premium enterprise experience.
2. **Validation & API Error Handling**: Enhanced form state handling, ensuring robust corporate email checks, inline error banners, toast states, and graceful fallback when serverless storage is read-only.
3. **Accessibility & Responsive Polish**: Handled mobile drawer transitions, modal backdrop scroll locks, ESC key event listeners, and clean keyboard focus accessibility.

---

## 🔮 Future Improvements (With More Time)

1. **Database Integration**: Connect Next.js API route to a cloud database (Prisma + PostgreSQL / Supabase or MongoDB Atlas) for persistent multi-region lead storage.
2. **Email Notification Trigger**: Integrate SendGrid or Resend API to automatically dispatch a customized enterprise syllabus PDF to the user's corporate email upon submission.
3. **Interactive Demo Sandbox**: Build an interactive sandbox allowing L&D leaders to test a sample AI coding lab environment directly inside the browser.
4. **Multi-language Support (i18n)**: Add localization support for global enterprise clients across US, EU, and APAC regions.

---

