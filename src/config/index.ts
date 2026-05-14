import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Obinna Ezeka - Software Engineer",
  author: "Obinna Ezeka",
  description:
    "Software Engineer focused on building full-stack web applications with JavaScript, React, Node.js, Express, MongoDB, and Python.",
  lang: "en",
  siteLogo: "/Headshot.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/obinnaezeka/" },
    { text: "GitHub", href: "https://github.com/Obi815" },
    { text: "BlueSky", href: "https://bsky.app/profile/obiezeka.bsky.social" }
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://obinna-portfolio.vercel.app",
};
export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Obinna Ezeka",
    specialty: "Software Engineer",
    summary:
      "I build full-stack web applications with JavaScript, React, Node.js, Express, MongoDB, and Python, with a focus on clean UI, APIs, and practical user experiences.",
        email: "ObinnaEzeka815@gmail.com",
  },
  experience: [
    {
      company: "100Devs",
      position: "Software Engineer",
      startDate: "Jan 2023",
      endDate: "Present",
      summary: [
        "Built and maintained full-stack web applications using JavaScript, React, Node.js, Express, and MongoDB.",
        "Designed and integrated APIs, handled dynamic data rendering, and improved user-facing functionality across multiple projects.",
        "Collaborated in Agile-style team environments, debugging issues, writing maintainable code, and shipping features end-to-end.",
      ],
    },
    {
      company: "Personal Projects",
      position: "Full-Stack Developer",
      startDate: "2023",
      endDate: "Present",
      summary: [
        "Built portfolio projects that use third-party APIs, dynamic front-end rendering, and responsive UI design.",
        "Worked on backend functionality, database planning, and deployment using tools like Netlify, Render, and GitHub.",
      ],
    },
  ],
  projects: [
    {
      name: "Song of the Day",
      summary:
        "A music discovery app that lets users search songs with the iTunes API and explore daily song picks through a clean interactive interface.",
      linkPreview: "https://song-of-the-day-qzok.onrender.com/",
      linkSource: "https://github.com/Obi815/song-of-the-day-",
      image: "/SOTD.png",
    },
    {
      name: "Story Books *soon*",
      summary:
        "StoryBooks is a full-stack storytelling app built with Node.js, Express, MongoDB, and Passport.js where users can create, manage, and share public or private stories through a personalized dashboard",
      linkPreview: "https://obinna-portfolio.vercel.app/",
      linkSource: "https://obinna-portfolio.vercel.app/",
      image: "/sbProjectimg.png",
    },
    {
      name: "Movie Junkie",
      summary:
        "A movie search app powered by the TMDB API that helps users quickly find films, posters, and overviews in a responsive interface.",
      linkPreview: "https://moviejunkies.netlify.app/",
      linkSource: "https://github.com/Obi815/movieJunkie",
      image: "/movieJunkie.png",
    },
    {
      name: "Fantasy Draft Lotto",
      summary:
        "A fantasy sports lottery simulator that generates draft odds based on league settings and user inputs with a dynamic front-end experience.",
      linkPreview: "https://fantasydraftlotto.netlify.app/",
      linkSource: "https://github.com/Obi815/mega-millions",
      image: "/fantasy-draft-lotto.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Obinna Ezeka, a Software Engineer with a strong interest in building clean, user-focused web applications and growing as a full-stack developer.

      I’ve worked on projects using JavaScript, React, Node.js, Express, MongoDB, and Python, with experience integrating APIs, building responsive interfaces, and improving backend functionality. I enjoy turning ideas into real applications and strengthening my skills through hands-on projects that solve practical problems.

      Right now, I’m focused on opportunities where I can keep growing as an engineer, contribute to meaningful products, and continue building strong technical foundations across both frontend and backend development.
    `,
    image: "/Headshot.png",
  },
};

// #5755ff