export interface Project {
  id: string;
  title: string;
  description: string;
  category: "Full Stack" | "Frontend" | "Web Apps";
  tags: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  highlights: string[];
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: string;
  description: string[];
  skills: string[];
  sid?: string;
  certificateUrl?: string;
}

export interface SkillCategory {
  name: string;
  skills: { name: string; level: string; iconName: string }[];
}

export const portfolioData = {
  personal: {
    initials: "SP",
    name: "Saurabh Bhai Patel",
    avatar: "/images/saurabh-patel.jpg",
    avatarFace: "/images/saurabh-patel-face.jpg",
    title: "Experienced Full-Stack Web Developer",
    tagline: "Full-Stack Web Developer • React, Next.js & Node.js Specialist",
    status: "Available for High-Impact Web & Full-Stack Projects",
    bio: "Full-Stack Web Developer with hands-on expertise building production-ready, high-performance web applications. Specializing in modern architectures using React, Next.js, TypeScript, Tailwind CSS, Node.js, and Supabase, I engineer lightning-fast frontends, resilient backend APIs, and seamless interactive user experiences.",
    location: "Patna, India 800014",
    email: "saurabhpatel6935@gmail.com",
    github: "https://github.com/saurabh-mx",
    githubDisplay: "github.com/saurabh-mx",
    portfolioUrl: "https://github.com/saurabh-mx",
    portfolioDisplay: "github.com/saurabh-mx",
    youtube: "https://www.youtube.com/@VenomPlaZzYT",
    kick: "https://kick.com/venomplazzyt",
    discord: "https://discord.gg/yehtgK7fY",
    instagram: "https://www.instagram.com/saurabh_patel_762/",
    steam: "https://steamcommunity.com/profiles/76561199538173443/",
    education: {
      institution: "Rungta College of Engineering and Technology",
      degree: "B.Tech in Computer Science & Engineering",
      expectedDate: "Expected in 07/2027",
    },
    certification: {
      title: "Certificate of Vocational Training in Web Development (React & Node.js)",
      issuer: "KodeZen Technologies",
      sid: "KZTVT20261226",
      duration: "4 Weeks",
      issueDate: "10-Jul-2026",
      period: "4 Weeks Duration (10-Jul-2026)",
      certificateUrl: "/certificates/kodezen-vt-certificate.jpg",
    },
  },
  stats: [
    { label: "Core Stack", value: "Next.js & React" },
    { label: "Backend & Cloud", value: "Node • Supabase" },
    { label: "Production Apps", value: "4+ Shipped" },
    { label: "UI / UX Standard", value: "100% Responsive" },
  ],
  skills: [
    {
      name: "Frontend Development",
      skills: [
        { name: "React", level: "Core", iconName: "Atom" },
        { name: "Next.js", level: "Core", iconName: "Layers" },
        { name: "Vite", level: "Proficient", iconName: "Zap" },
        { name: "Tailwind CSS", level: "Proficient", iconName: "Palette" },
        { name: "HTML5", level: "Proficient", iconName: "FileCode2" },
        { name: "CSS3", level: "Proficient", iconName: "Palette" },
      ],
    },
    {
      name: "Programming Languages",
      skills: [
        { name: "TypeScript", level: "Proficient", iconName: "FileCode2" },
        { name: "JavaScript", level: "Proficient", iconName: "FileCode2" },
        { name: "Python", level: "Familiar", iconName: "Terminal" },
        { name: "SQL", level: "Proficient", iconName: "Database" },
      ],
    },
    {
      name: "Backend & Databases",
      skills: [
        { name: "Node.js", level: "Proficient", iconName: "Server" },
        { name: "Express", level: "Proficient", iconName: "Server" },
        { name: "PostgreSQL", level: "Proficient", iconName: "Database" },
        { name: "Prisma ORM", level: "Proficient", iconName: "Database" },
        { name: "Supabase", level: "Proficient", iconName: "Flame" },
        { name: "Socket.IO", level: "Proficient", iconName: "Network" },
      ],
    },
    {
      name: "API & Web Development",
      skills: [
        { name: "REST APIs", level: "Proficient", iconName: "Network" },
        { name: "JWT Auth (Tokens & bcrypt)", level: "Proficient", iconName: "CheckCircle2" },
        { name: "Responsive UI Design", level: "Proficient", iconName: "Eye" },
        { name: "Git & GitHub", level: "Proficient", iconName: "GitBranch" },
      ],
    },
  ] as SkillCategory[],
  experiences: [
    {
      id: "edu-1",
      role: "B.Tech in Computer Science & Engineering",
      organization: "Rungta College of Engineering and Technology",
      period: "Expected in 07/2027",
      location: "India",
      type: "Education",
      description: [
        "Pursuing Bachelor of Technology in Computer Science & Engineering.",
        "Focusing on building responsive web applications, data structures, algorithms, and database management.",
      ],
      skills: ["Computer Science", "React", "Next.js", "TypeScript", "SQL"],
    },
    {
      id: "cert-1",
      role: "Vocational Training in Web Development (React & Node.js)",
      organization: "KodeZen Technologies",
      period: "4 Weeks • Issued 10-Jul-2026",
      location: "KodeZen Technologies",
      type: "Certification",
      sid: "KZTVT20261226",
      certificateUrl: "/certificates/kodezen-vt-certificate.jpg",
      description: [
        "Awarded Certificate of Vocational Training (SID: KZTVT20261226) in recognition of the successful completion of the Vocational Training Program in Web Development (React & Node.js).",
        "Completed 4 weeks of hands-on technical training on modern full-stack web applications, React component state management, and Node.js REST API architectures.",
      ],
      skills: ["React", "Node.js", "Express", "REST APIs", "JavaScript"],
    },
    {
      id: "proj-exp-1",
      role: "Full-Stack Project Developer",
      organization: "Independent Projects",
      period: "2026 – Present",
      location: "Patna, India",
      type: "Hands-on Development",
      description: [
        "Built production web applications spanning real-time streaming tools, centralized HR management interfaces, and business websites.",
        "Implemented real-time interactions with Socket.IO, secure JWT access/refresh token authentication, and Supabase integration.",
      ],
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Prisma ORM", "Socket.IO"],
    },
  ] as Experience[],
  projects: [
    {
      id: "upi-stream-overlay",
      title: "UPI Stream Overlay",
      description:
        "Full-stack streamer dashboard with workspace-scoped RBAC, embeddable OBS widgets (animated goals, marathon timer, leaderboard), and real-time Socket.IO synchronization.",
      category: "Full Stack",
      tags: ["React 19", "Vite", "Tailwind CSS v4", "Node.js", "Express 5", "PostgreSQL", "Drizzle ORM", "Socket.IO", "JWT + bcrypt"],
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80",
      liveUrl: "https://upi-stream-overlay-client-seven.vercel.app",
      githubUrl: "https://github.com/saurabh-mx/upi-stream-overlay",
      featured: true,
      highlights: [
        "Workspace-scoped RBAC: Owner manages moderator permissions and stream assets with secure JWT & bcrypt authentication.",
        "Embeddable OBS Goal Widgets: Animated progress bars and circles for stream donations, marathon timer, and leaderboard rankings.",
        "Real-Time Socket.IO Server: Sub-second live updates for donation activity, streamer milestones, and moderator workflows.",
      ],
    },
    {
      id: "hr-management-portal",
      title: "HR Management Portal",
      description:
        "Centralized HR portal interface featuring drag-and-drop department workflows (@dnd-kit), TanStack React Query caching, Supabase SSR backend, dynamic QR code generation, and ID badge exports.",
      category: "Full Stack",
      tags: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "TanStack Query", "@dnd-kit", "Radix UI"],
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80",
      liveUrl: "https://hr-management-portal-beryl.vercel.app",
      githubUrl: "https://github.com/saurabh-mx/HR-Management-Portal",
      featured: true,
      highlights: [
        "Drag-and-Drop Department Workflows: Interactive employee pipeline management using @dnd-kit sortable.",
        "Data Caching & Supabase SSR: Instant optimistic updates and caching powered by TanStack React Query.",
        "Employee Toolkit: Dynamic QR code generation, CSV import/export via PapaParse, and HTML-to-image badge exporting.",
      ],
    },
    {
      id: "laxman-phool-bhandar",
      title: "Laxman Phool Bhandar",
      description:
        "Production floral-business web platform featuring a services catalog, responsive wedding/event gallery, automated customer inquiry journeys to WhatsApp, and Supabase Row-Level Security storage.",
      category: "Frontend",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase RLS", "WhatsApp API"],
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1000&q=80",
      liveUrl: "https://laxmann-phool-bhandar.vercel.app",
      githubUrl: "https://github.com/saurabh-mx/laxmann-phool-bhandar",
      featured: true,
      highlights: [
        "Automated WhatsApp Booking Flow: Converts user requests and event criteria into prefilled WhatsApp messages.",
        "Responsive Event Showcase: Mobile-first visual gallery and services pricing catalog.",
        "Supabase Inquiry Storage: Securely persists client booking requests with Row-Level Security (RLS) policies.",
      ],
    },
    {
      id: "race-bidding",
      title: "Race Bidding Platform",
      description:
        "Live interactive race-bidding web app built with Next.js 16 and React 19, featuring live video race streaming (React-Player), interactive odds and betting analytics charts (Recharts), and Supabase real-time data.",
      category: "Full Stack",
      tags: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Recharts", "React-Player", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1000&q=80",
      liveUrl: "https://race-bidding.vercel.app",
      githubUrl: "https://github.com/saurabh-mx/race-bidding",
      featured: false,
      highlights: [
        "Real-Time Bidding Engine: Supabase-backed live state synchronization for race betting flows.",
        "Integrated Video Player: Smooth race video playback powered by React-Player.",
        "Interactive Betting Analytics: Visual odds tracking and betting statistics using Recharts.",
      ],
    },
  ] as Project[],
};
