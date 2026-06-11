import {
  BookOpen,
  BriefcaseBusiness,
  Building2,
  Car,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Laptop,
  Languages,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Rocket,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Store,
  Timer,
  Wrench
} from "lucide-react";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Project", href: "#project" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export const profileHighlights = [
  { label: "KTU Software Systems", icon: GraduationCap },
  { label: "Real Business Website", icon: Store },
  { label: "Internship Ready", icon: Rocket }
];

export const aboutItems = [
  { title: "Student", text: "First-year Software Systems student at KTU.", icon: BookOpen },
  {
    title: "Career Focus",
    text: "Looking for internship and junior developer opportunities.",
    icon: BriefcaseBusiness
  },
  {
    title: "Interests",
    text: "Software engineering, web development, and programming.",
    icon: Laptop
  },
  { title: "Driving License", text: "Category B driving license.", icon: Car },
  {
    title: "Work Style",
    text: "Experience working independently and managing responsibilities.",
    icon: ShieldCheck
  }
];

export const skillGroups = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["C#", "C++", "Python", "JavaScript"]
  },
  {
    title: "Technologies",
    icon: ServerCog,
    skills: ["Node.js", "WordPress", "Git", "HTML", "CSS"]
  }
];

export const learningItems = [
  "React",
  "TypeScript",
  "Advanced WordPress Development",
  "Software Engineering"
];

export const projectTech = [
  "WordPress",
  "CSS",
  "Hostinger",
  "Website Design",
  "Content Management"
];

export const projectMetrics = [
  { value: "TBD", label: "Monthly visitors" },
  { value: "TBD", label: "Products organized" },
  { value: "TBD", label: "Conversion rate" },
  { value: "TBD", label: "Maintenance updates" }
];

export const caseStudyPoints = [
  {
    title: "Business Need",
    text: "Doraseda Butikas needed a polished online storefront where Lithuanian customers could browse diamond painting kits, creative sets, and related products."
  },
  {
    title: "Responsibilities",
    text: "Danielius handled setup, design customization, content management, product organization, category structure, and ongoing improvements."
  },
  {
    title: "Result",
    text: "The store now supports product browsing, category navigation, and online shopping functionality for customers across Lithuania."
  }
];

export const timeline = [
  {
    title: "Bolt Food Courier",
    subtitle: "Independent work experience",
    body: "Developed strong time management, customer service, responsibility, and problem-solving skills while working independently in a fast-paced environment.",
    icon: Timer
  },
  {
    title: "Kaunas University of Technology (KTU)",
    subtitle: "Software Systems | 2025 - Present",
    body: "Building a foundation in programming, software systems, and structured problem solving.",
    icon: GraduationCap
  }
];

export const languages = [
  { name: "Lithuanian", level: "Native", icon: MapPin },
  { name: "English", level: "Professional Working Proficiency", icon: Languages }
];

export const contactLinks = [
  {
    label: "Email",
    value: "danieliusandr@gmail.com",
    href: "mailto:danieliusandr@gmail.com",
    icon: Mail
  },
  {
    label: "Phone",
    value: "+37069454702",
    href: "tel:+37069454702",
    icon: Phone
  },
  {
    label: "GitHub",
    value: "GitHub placeholder",
    href: "#",
    icon: Github
  },
  {
    label: "LinkedIn",
    value: "LinkedIn placeholder",
    href: "#",
    icon: Linkedin
  }
];

export const quickStats = [
  { label: "Primary Project", value: "E-commerce", icon: Store },
  { label: "Core Platform", value: "WordPress", icon: Wrench },
  { label: "Target Role", value: "Internship", icon: Building2 },
  { label: "Focus", value: "Practical builds", icon: Layers3 }
];

export const projectLinks = {
  live: "https://doraseda.lt",
  label: "Visit Website",
  icon: ExternalLink
};

export const decorative = {
  sparkle: Sparkles
};
