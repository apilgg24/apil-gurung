import type { SiteData } from "../types/site"

export const siteData: SiteData = {
  profile: {
    name: "Apil Gurung",
    headline: "Software Developer",
    summary:
      "Software developer specializing in Angular, React, TypeScript, and enterprise web applications. Experienced building scalable UI features and integrating APIs.",
  },

  links: {
    github: "https://github.com/apilgg24",
    linkedin: "https://www.linkedin.com/in/apilgg/",
    upwork: "https://www.upwork.com/freelancers/~0185b53ce7f3d7e8a7",
    email: "apil.gurung@gmail.com",
    // resume: "/Apil_Gurung_Resume.pdf", // TODO(apil): drop a PDF in /public and uncomment
  },

  skills: {
    frontend: ["Angular", "React", "TypeScript", "RxJS", "Tailwind"],
    backend: ["Java", "Spring Boot"],
    tools: ["Git", "Figma", "REST APIs"],
  },

  experience: [
    {
      company: "Xcelerate Restoration Software",
      role: "Angular Frontend Developer",
      period: "Feb 2025 – Apr 2026",
      highlights: [
        "Develop enterprise UI features using Angular",
        "Implement REST API integrations",
        "Collaborate with product and backend teams",
      ],
      tech: ["Angular", "TypeScript", "RxJS", "REST APIs"],
    },
  ],

  projects: [
    {
      name: "RapidPhotoFlow",
      description:
        "A full-stack workflow concept for AI-assisted image prompt and processing flows.",
      tech: ["React", "Spring Boot"],
      link: "#",
      category: "Full-Stack",
      featured: true,
      // github: "https://github.com/apilgg24/rapidphotoflow", // uncomment when repo is public
    },
  ],
}