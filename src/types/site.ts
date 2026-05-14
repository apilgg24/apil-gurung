export type ExperienceItem = {
  company: string
  role: string
  period: string
  highlights: string[]
}

export type ProjectItem = {
  name: string
  description: string
  tech: string[]
  link: string
  screenshot?: string  // optional: path to a preview image
}

export type SiteData = {
  profile: {
    name: string
    headline: string
    summary: string
    location?: string
  }
  links: {
    github: string
    linkedin: string
    upwork: string
    email?: string
    resume?: string
  }
  skills: {
    frontend: string[]
    backend: string[]
    tools: string[]
  }
  experience: ExperienceItem[]
  projects: ProjectItem[]
}