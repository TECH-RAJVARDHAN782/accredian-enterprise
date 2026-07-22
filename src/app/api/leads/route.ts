import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export interface LeadRecord {
  id: string;
  fullName: string;
  corporateEmail: string;
  companyName: string;
  teamSize: string;
  programInterest: string;
  message?: string;
  submittedAt: string;
  status: 'New' | 'Contacted' | 'Qualified';
}

// In-memory fallback array for serverless runtime support
const memoryLeadsStore: LeadRecord[] = [
  {
    id: 'lead-sample-1',
    fullName: 'Ananya Sharma',
    corporateEmail: 'ananya.s@techcorp.com',
    companyName: 'TechCorp Global',
    teamSize: '100-500',
    programInterest: 'Generative AI for Enterprise Leaders',
    message: 'Looking to upskill 40 engineering leads on LLMs and AI governance.',
    submittedAt: new Date(Date.now() - 86400000).toISOString(),
    status: 'Qualified'
  },
  {
    id: 'lead-sample-2',
    fullName: 'Rajesh Malhotra',
    corporateEmail: 'rmalhotra@apexfin.com',
    companyName: 'Apex Financial Services',
    teamSize: '500+',
    programInterest: 'Advanced Data Science & MLOps Architecture',
    message: 'Interested in a custom 3-month cohort for risk analytics team.',
    submittedAt: new Date(Date.now() - 172800000).toISOString(),
    status: 'New'
  }
];

// Helper to write to JSON file locally if writable
const dataFilePath = path.join(process.cwd(), 'data', 'leads.json');

function getLeads(): LeadRecord[] {
  try {
    if (fs.existsSync(dataFilePath)) {
      const fileData = fs.readFileSync(dataFilePath, 'utf-8');
      const parsed = JSON.parse(fileData);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch {
    // Fall back to memory store
  }
  return memoryLeadsStore;
}

function saveLeads(leads: LeadRecord[]) {
  try {
    const dirPath = path.dirname(dataFilePath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    fs.writeFileSync(dataFilePath, JSON.stringify(leads, null, 2), 'utf-8');
  } catch {
    // Memory store handles serverless environment fallback
  }
}

export async function GET() {
  const leads = getLeads();
  return NextResponse.json({
    success: true,
    totalCount: leads.length,
    leads: leads
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, corporateEmail, companyName, teamSize, programInterest, message } = body;

    // Field validations
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Full name is required (minimum 2 characters).' },
        { status: 400 }
      );
    }

    if (!corporateEmail || typeof corporateEmail !== 'string' || !corporateEmail.includes('@')) {
      return NextResponse.json(
        { success: false, error: 'Valid corporate email address is required.' },
        { status: 400 }
      );
    }

    if (!companyName || typeof companyName !== 'string' || companyName.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Company/Organization name is required.' },
        { status: 400 }
      );
    }

    const newLead: LeadRecord = {
      id: `lead-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      fullName: fullName.trim(),
      corporateEmail: corporateEmail.trim().toLowerCase(),
      companyName: companyName.trim(),
      teamSize: teamSize || '20-100',
      programInterest: programInterest || 'Generative AI for Enterprise Leaders',
      message: message ? message.trim() : '',
      submittedAt: new Date().toISOString(),
      status: 'New'
    };

    const currentLeads = getLeads();
    const updatedLeads = [newLead, ...currentLeads];
    
    // Update memory & file
    memoryLeadsStore.unshift(newLead);
    saveLeads(updatedLeads);

    return NextResponse.json(
      {
        success: true,
        message: 'Lead captured successfully! Our Enterprise Director will connect with you within 4 hours.',
        lead: newLead
      },
      { status: 201 }
    );
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown server error';
    return NextResponse.json(
      { success: false, error: `Failed to process lead request: ${errorMessage}` },
      { status: 500 }
    );
  }
}
