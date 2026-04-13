export const siteConfig = {
  name: "Abdullah O. Mustapha",
  role: "Software Engineer",
  tagline: "<Open Source Winch** />",
  email: "abdullahmu4life@gmail.com",
  sponsorUrl: "https://github.com/sponsors/abdullah4tech",

  location: {
    from: "Lagos",
    current: "Freetown, Sierra Leone",
  },

  focusProjects: [
    { label: "Doks AI", href: "https://doks-ai.vercel.app" },
    { label: "Zenon Router", href: "https://github.com/n8bird-oss/zenon-router" },
  ],

  bio: [
    "Dedicated backend engineer with a track record of shipping production-grade systems. 95% of client projects I've worked on have gone live and stayed live — I build for reliability, not just for demo day.",
    "Scalable, robust, and efficient aren't buzzwords to me — they're hard requirements. I care deeply about good practices and clean, well-structured codebases: the kind that are a pleasure to work in six months later, not a liability.",
    "",
    "",
  ],

  experience: [
    {
      role: "Backend Engineer",
      org: "GenelineX",
      period: "Aug 2024 – Present",
      bullets: [
        "Build and maintain core product backend serving real customers",
        "Develop open-source SDKs clients use to integrate the platform into their own applications",
        "Shipped an embeddable chatbot widget and OpenMOS — a low-resource language evaluation tool",
        "Work closely with design and frontend teams to deliver a seamless end-to-end customer experience",
      ],
    },
    {
      role: "Lecturer",
      org: "College Of Digital Excellence",
      period: "Mar 2024 – Present",
      bullets: [
        "Teach C, C++, JavaScript, Python, HTML/CSS, logic building, and effective problem solving",
        "500+ students taught across multiple cohorts",
      ],
    },
    {
      role: "Team Lead & Co-founder",
      org: "DropX",
      period: "2023 – Present",
      bullets: [
        "Lead the full team across backend, frontend, and product",
        "Own technical direction and delivery — working to ship DropX to market with zero compromise on quality",
      ],
    },
  ],

  socials: [
    { icon: "ph:github-logo-duotone",   href: "https://github.com/abdullah4tech",              label: "GitHub" },
    { icon: "ph:x-logo-duotone",        href: "https://x.com/abdullah4tech_",                   label: "X" },
    { icon: "ph:linkedin-logo-duotone", href: "https://linkedin.com/in/abdullah-mustapha",      label: "LinkedIn" },
    { icon: "ph:discord-logo-duotone",  href: "https://discord.com/users/abdullah4tech",        label: "Discord" },
    { icon: "ph:medium-logo-duotone",   href: "https://medium.com/@abdullahmu4life",            label: "Medium" },
    { icon: "ph:youtube-logo-duotone",  href: "#",                                              label: "YouTube" },
  ],
} as const;
