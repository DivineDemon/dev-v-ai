
export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  icon: string;
  link?: string;
  isWide?: boolean;
  isHigh?: boolean;
}

export interface Endorsement {
  name: string;
  role: string;
  text: string;
  avatar: string;
  featured?: boolean;
}

export interface TechItem {
  name: string;
  logo: string;
}
