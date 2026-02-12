export interface PortfolioData {
  meta: Meta;
  cover: Cover;
  introduction: Introduction;
  career: Career;
  skills: Skills;
  projects: Project[];
  education: Education;
  closing: Closing;
}

export interface Meta {
  version: string;
  lastUpdated: string;
  targetCompany: string;
  language: "ko" | "en";
}

export interface Cover {
  title: string;
  subtitle: string;
  author: {
    name: string;
    title: string;
    email: string;
    phone: string;
    github?: string;
    linkedin?: string;
    website?: string;
  };
  date: string;
  targetCompany: string;
}

export interface Introduction {
  headline: string;
  summary: string[];
  highlights: Highlight[];
}

export interface Highlight {
  metric: string;
  label: string;
  description: string;
}

export interface Career {
  entries: CareerEntry[];
}

export interface CareerEntry {
  company: string;
  position: string;
  department?: string;
  period: { start: string; end: string };
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Skills {
  categories: SkillCategory[];
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
  yearsOfExperience?: number;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: { start: string; end: string };
  role: string;
  teamSize?: number;
  overview: string;
  background: string;
  objectives: string[];
  architecture?: {
    description: string;
    components: {
      name: string;
      description: string;
      technologies: string[];
    }[];
  };
  implementation: {
    highlights: { title: string; description: string }[];
  };
  results: {
    metric: string;
    before?: string;
    after: string;
    improvement?: string;
  }[];
  technologies: string[];
  lessonsLearned?: string[];
}

export interface Education {
  degrees: {
    institution: string;
    degree: string;
    major: string;
    period: { start: string; end: string };
    gpa?: string;
    note?: string;
  }[];
  certifications: { name: string; issuer: string; date: string }[];
  courses?: { name: string; provider: string; date: string }[];
}

export interface Closing {
  message: string[];
  coreValues: { title: string; description: string }[];
  callToAction: string;
}
