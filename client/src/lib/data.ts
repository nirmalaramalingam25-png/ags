import logo from '@assets/ags_logo_1765437000270.png';
import imgIT from '@assets/generated_images/it_professionals_collaborating_in_modern_office.png';
import imgHealth from '@assets/generated_images/healthcare_professionals_in_hospital_setting.png';
import imgFinance from '@assets/generated_images/finance_professionals_in_meeting.png';
import imgEngineering from '@assets/generated_images/engineers_at_construction_site.png';
import imgCEO from '@assets/generated_images/professional_ceo_headshot.png';
import imgDirector from '@assets/generated_images/professional_director_headshot.png';
import imgHR from '@assets/generated_images/professional_hr_manager_headshot.png';

export const companyInfo = {
  name: "AGS Staffing Agency",
  logo: logo,
  email: "contact@ags-staffing.com",
  phone: "+1 (555) 123-4567",
  address: "123 Corporate Blvd, Business District, NY 10001",
  socials: {
    linkedin: "#",
    twitter: "#",
    facebook: "#",
    instagram: "#"
  }
};

export const specializations = [
  {
    id: "it",
    title: "Information Technology",
    description: "Connect with top-tier developers, architects, and IT managers.",
    image: imgIT,
    details: "Our IT staffing division specializes in finding the perfect match for your technical needs, from software development to cybersecurity.",
    roles: ["Software Engineers", "DevOps Specialists", "Data Scientists", "Product Managers"]
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description: "Qualified doctors, nurses, and allied health professionals.",
    image: imgHealth,
    details: "We provide staffing solutions for hospitals, clinics, and research facilities with highly qualified medical professionals.",
    roles: ["Registered Nurses", "Physicians", "Medical Technicians", "Administrative Staff"]
  },
  {
    id: "finance",
    title: "Finance & Accounts",
    description: "Expert accountants, analysts, and financial advisors.",
    image: imgFinance,
    details: "From CPAs to Financial Analysts, we help you build a robust financial team to manage your assets and growth.",
    roles: ["Accountants", "Financial Analysts", "Auditors", "Tax Specialists"]
  },
  {
    id: "engineering",
    title: "Engineering & Logistics",
    description: "Skilled engineers and logistics experts for your projects.",
    image: imgEngineering,
    details: "We source talent for civil, mechanical, and electrical engineering projects as well as supply chain management.",
    roles: ["Civil Engineers", "Project Managers", "Logistics Coordinators", "Site Supervisors"]
  }
];

export const teamMembers = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    image: imgCEO,
    bio: "With over 20 years in the recruitment industry, John leads AGS with a vision of connecting potential with opportunity."
  },
  {
    name: "Sarah Johnson",
    role: "Director of Operations",
    image: imgDirector,
    bio: "Sarah ensures our operations run smoothly and that every client receives our signature white-glove service."
  },
  {
    name: "Michael Chen",
    role: "HR Manager",
    image: imgHR,
    bio: "Michael heads our internal HR and culture initiatives, making AGS a great place to work and grow."
  }
];

export const testimonials = {
  clients: [
    {
      id: 1,
      name: "TechSolutions Inc.",
      content: "AGS found us the perfect Lead Developer within 48 hours. Their understanding of our technical requirements was impressive.",
      role: "CTO"
    },
    {
      id: 2,
      name: "City General Hospital",
      content: "Reliable, professional, and fast. AGS is our go-to partner for nursing staff requirements.",
      role: "HR Director"
    }
  ],
  candidates: [
    {
      id: 1,
      name: "David W.",
      content: "They didn't just find me a job; they found me a career path that matched my ambitions perfectly.",
      role: "Software Engineer"
    },
    {
      id: 2,
      name: "Elena R.",
      content: "The support I received during the interview process was outstanding. Highly recommended!",
      role: "Financial Analyst"
    }
  ]
};
