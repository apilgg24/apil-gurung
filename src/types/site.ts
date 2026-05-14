export type ExperienceItem = {
  company: string
  role: string
  period: string
  highlights: string[]
  tech?: string[]
  location?: string
}

export type ProjectItem = {
  name: string
  description: string
  tech: string[]
  link: string
  github?: string
  screenshot?: string
  category?: string
  featured?: boolean
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
