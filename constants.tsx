
import { Experience, Project, Endorsement, TechItem } from './types';

export const EXPERIENCES: Experience[] = [
  {
    role: "Senior ML Engineer",
    company: "TechCorp Solutions",
    period: "2022 - Present",
    description: "Leading the NLP division, architecting LLM-based customer support agents. Reduced query resolution time by 40% through RAG implementation.",
    skills: ["Python", "PyTorch", "AWS"]
  },
  {
    role: "ML Engineer",
    company: "DataFlow Inc.",
    period: "2020 - 2022",
    description: "Developed computer vision pipelines for automated quality control in manufacturing. Deployed edge models on NVIDIA Jetson devices with 95% accuracy.",
    skills: ["TensorFlow", "OpenCV", "Docker"]
  },
  {
    role: "Data Scientist",
    company: "FinTech Innovators",
    period: "2018 - 2020",
    description: "Built predictive models for credit risk assessment. Collaborated with stakeholders to interpret model outputs and ensure regulatory compliance.",
    skills: ["Scikit-learn", "Pandas", "SQL"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "LLM Fine-tuning Dashboard",
    description: "A React-based dashboard for visualizing training metrics, hyperparameter tuning, and resource utilization in real-time using WebSocket connections.",
    tags: ["React", "FastAPI", "Redis"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "dashboard",
    isWide: true
  },
  {
    title: "Vision Pipeline",
    description: "End-to-end object detection pipeline optimized for edge devices. Processes 4k video streams at 30FPS.",
    tags: ["C++", "CUDA"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=600&h=1000",
    icon: "visibility",
    isHigh: true
  },
  {
    title: "Transformer Architecture Deep Dive",
    description: "Technical article explaining attention mechanisms.",
    tags: [],
    image: "",
    icon: "article"
  },
  {
    title: "Open Source Python NLP Library",
    description: "A lightweight python library for text preprocessing.",
    tags: [],
    image: "",
    icon: "folder_open"
  }
];

export const ENDORSEMENTS: Endorsement[] = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp",
    text: "JD's ability to translate complex research papers into production-grade code is unmatched. The RAG system he architected transformed our customer support.",
    avatar: "https://picsum.photos/id/64/100/100"
  },
  {
    name: "David Kim",
    role: "Lead Researcher, AI Lab",
    text: "The depth of knowledge in reinforcement learning displayed here is world-class. A true expert in the field.",
    avatar: "https://picsum.photos/id/91/100/100"
  },
  {
    name: "Mark Chen",
    role: "Lead Engineer, DataFlow",
    text: "One of the strongest engineers I've worked with. His work on the vision pipeline optimization saved us 50% in cloud compute costs. Absolutely brilliant mind.",
    avatar: "https://picsum.photos/id/101/100/100",
    featured: true
  },
  {
    name: "Elena Rodriguez",
    role: "VP Product, Nexus AI",
    text: "Robust architecture that scales effortlessly. A rare combination of theoretical understanding and practical engineering.",
    avatar: "https://picsum.photos/id/102/100/100"
  },
  {
    name: "Emily Davis",
    role: "PM, FinTech Inc",
    text: "Incredibly thorough and data-driven. JD doesn't just build models; he builds solutions that solve real business problems.",
    avatar: "https://picsum.photos/id/103/100/100"
  },
  {
    name: "Alex Thorne",
    role: "Director, FutureTech",
    text: "JD delivered the MVP in record time, and the performance metrics were better than we dared to hope for.",
    avatar: "https://picsum.photos/id/104/100/100"
  }
];

export const TECH_STACK: TechItem[] = [
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
];
