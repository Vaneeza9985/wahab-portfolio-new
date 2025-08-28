export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: string;
  year: string;
  status: string;
  results: string[];
  techStack: string[];
}

export interface Experience {
  id: number;
  company: string;
  location: string;
  position: string;
  duration: string;
  period: string;
  description: string;
  highlights: string[];
  tags: string[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  items: Skill[];
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  year: string;
  pdfUrl: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}