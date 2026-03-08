import type { SiteData } from "../types/site"

export const siteData: SiteData = {
  profile: {
    name: "Apil Gurung",
    headline: "Software Developer",
    summary:
      "Software developer specializing in Angular, React, TypeScript, and enterprise web applications. Experienced building scalable UI features and integrating APIs.",
  },

  links: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-profile",
    upwork: "https://upwork.com/freelancers/your-profile",
  },

  skills: {
    frontend: ["Angular", "React", "TypeScript", "RxJS", "Tailwind"],
    backend: ["Java", "Spring Boot"],
    tools: ["Git", "Figma", "REST APIs"],
  },

  experience: [
    {
      company: "Xcelerate Restoration Software",
      role: "Frontend Developer",
      period: "Feb 2025 – Present",
      highlights: [
        "Develop enterprise UI features using Angular",
        "Implement REST API integrations",
        "Collaborate with product and backend teams",
      ],
    },
  ],

projects: [
  {
    name: "RapidPhotoFlow",
    description:
      "A full-stack workflow concept for AI-assisted image prompt and processing flows.",
    tech: ["React", "Spring Boot"],
    link: "#",
  },
  {
    name: "Personal Resume Website",
    description:
      "A modern personal portfolio website built with React, Vite, TypeScript, and Tailwind CSS.",
    tech: ["React", "Vite", "Tailwind"],
    link: "#",
  },
],
}