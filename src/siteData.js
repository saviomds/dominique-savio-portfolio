// Edit everything here — name, links, projects, timeline.
// Every page reads from this one file.

export const profile = {
  name: "Dominique Savio M",
  role: "Founder & CEO, beoneofus",
  available: true,
  email: "dominiquesavio@beoneofus.work",
  phone: ["+230 54753221", "+250 786731976"],
  github: "https://github.com/saviomds",
  linkedin: "https://www.linkedin.com/in/saviomds/",
  location: "Rwanda",
  birthDate: "2003-01-09",
  heroImage: "/hero-dominique.jpg",
}

export function getAge(dateString) {
  const birth = new Date(dateString)
  const today = new Date()
  let age = today.getFullYear() - birth.getFullYear()
  const hasBirthdayPassed =
    today.getMonth() > birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate())

  if (!hasBirthdayPassed) {
    age -= 1
  }

  return age
}

export const ecosystemLinks = [
  { label: "beoneofus", href: "https://b1overs.com", primary: true },
  { label: "Explore Projects", href: "https://b1overs.com/Explore_Projects" },
  { label: "For Institutions", href: "https://b1overs.com/for-institutions" },
  { label: "Get Started", href: "https://b1overs.com/auth?next=%2Fdash" },
  { label: "Docs", href: "https://b1overs.com/docs" },
]

export const stack = [
  { key: "focus", value: "Global opportunity ecosystem" },
  { key: "platform", value: "AI-native jobs, mentorship, networking, and skills infrastructure" },
  { key: "impact", value: "Verified connections for people, companies, and institutions" },
  { key: "reach", value: "Across Africa and the global professional network" },
]

export const projects = [
  {
    slug: "beoneofus-platform",
    year: "2026",
    title: "beoneofus",
    description:
      "AI-native global opportunity ecosystem connecting individuals, institutions, and professionals through verified opportunities, communities, and growth pathways.",
    tags: ["AI", "Career", "Community"],
    link: "https://b1overs.com",
    logo: "/favicon.ico",
  },
  {
    slug: "techninja",
    year: "2025",
    title: "Techninja",
    description:
      "A modern digital platform for business and talent discovery, designed to strengthen trust, visibility, and professional growth in technology ecosystems.",
    tags: ["Brand", "Technology", "Platform"],
    link: "https://techninja.mu/",
    logo: "/techninja.jpg",
  },
  {
    slug: "vibro",
    year: "2025",
    title: "Vibro",
    description:
      "A digital product experience focused on connection, engagement, and high-impact online interaction through a modern, streamlined interface.",
    tags: ["Digital Product", "UX", "Engagement"],
    link: "https://vibro-two.vercel.app/",
    logo: "/vibro.png",
  },
]

export const timeline = [
  {
    year: "2026—Now",
    title: "Owner, beoneofus",
    description: "Leading a digital ecosystem designed to connect opportunities, communities, and talent across borders.",
  },
  {
    year: "2025—2026",
    title: "Software engineer shaped by Rwanda and Mauritius",
    description: "I went to Mauritius in 2025, but my software engineering journey began earlier through hands-on work, problem solving, and real experience in different professional environments.",
  },
  {
    year: "2024—2025",
    title: "Self-taught developer and product builder",
    description: "Learning through practical work, experimentation, and building tools that solve real problems for people and organizations.",
  },
  {
    year: "2024",
    title: "Youth-driven technology journey",
    description: "Growing through persistence, curiosity, and a mission to use technology to improve lives and build a better world.",
  },
]

export const skills = [
  "Strategy",
  "Business growth",
  "Leadership",
  "Partnerships",
  "Mentorship",
  "Community building",
  "AI-native platforms",
  "Career ecosystems",
  "Global networking",
  "Professional development",
  "Trust & verification",
  "Opportunity design",
]
