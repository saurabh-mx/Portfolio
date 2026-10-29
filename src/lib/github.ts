import { Project, portfolioData } from "@/data/portfolio-data";

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  fork: boolean;
  stargazers_count: number;
  updated_at: string;
}

// Known curated project metadata to enrich GitHub repos with high-res screenshots and deep README highlights
const curatedProjectsMeta: Record<
  string,
  {
    title: string;
    description: string;
    category: "Full Stack" | "Frontend" | "Web Apps";
    tags: string[];
    image: string;
    liveUrl: string;
    featured: boolean;
    highlights: string[];
  }
> = {
  "upi-stream-overlay": {
    title: "UPI Stream Overlay",
    description:
      "A full-stack streamer dashboard with workspace-scoped RBAC, embeddable OBS widgets (animated goals, marathon countdown timer, leaderboard rankings), and real-time Socket.IO synchronization.",
    category: "Full Stack",
    tags: ["React 19", "Vite", "Tailwind CSS v4", "Node.js", "Express 5", "PostgreSQL", "Drizzle ORM", "Socket.IO", "JWT + bcrypt"],
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80",
    liveUrl: "https://upi-stream-overlay-client-seven.vercel.app",
    featured: true,
    highlights: [
      "Workspace-scoped RBAC: workspace owners manage moderator roles and access permissions with JWT & bcrypt.",
      "OBS Embeddable Goal Widgets: live animated progress bars and circles for stream donations.",
      "Marathon Timer & Leaderboard: server-authoritative countdown with real-time donation bonuses and period-filtered rankings.",
    ],
  },
  "HR-Management-Portal": {
    title: "HR Management Portal",
    description:
      "Centralized HR portal interface with drag-and-drop workflow pipelines (@dnd-kit), TanStack React Query cache synchronization, Supabase SSR backend, employee QR code generator, and ID card export.",
    category: "Full Stack",
    tags: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "TanStack Query", "@dnd-kit", "Radix UI"],
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80",
    liveUrl: "https://hr-management-portal-beryl.vercel.app",
    featured: true,
    highlights: [
      "Drag-and-Drop Workflow Management: interactive department workflows with @dnd-kit sortable.",
      "Supabase Integration: robust employee directory, authentication, and TanStack Query state caching.",
      "Utilities: CSV employee import/export with PapaParse and dynamic QR code generation.",
    ],
  },
  "laxmann-phool-bhandar": {
    title: "Laxman Phool Bhandar",
    description:
      "Responsive floral-business web platform with service catalog, visual wedding/event gallery, automated customer inquiry journeys to WhatsApp, and Supabase Row-Level Security storage.",
    category: "Frontend",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase RLS", "WhatsApp API"],
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1000&q=80",
    liveUrl: "https://laxmann-phool-bhandar.vercel.app",
    featured: true,
    highlights: [
      "Prefilled WhatsApp Customer Flow: converts client bookings and event requirements directly to WhatsApp messages.",
      "Visual Event Catalog: high-performance responsive gallery for flower and decoration showcases.",
      "Supabase Booking Storage: stores incoming inquiries in a structured database protected by Row Level Security.",
    ],
  },
  "race-bidding": {
    title: "Race Bidding Platform",
    description:
      "Live interactive race-bidding web app built with Next.js 16 and React 19, featuring live video streaming (React-Player), interactive odds and betting analytics charts (Recharts), and Supabase real-time data.",
    category: "Full Stack",
    tags: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Recharts", "React-Player", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1000&q=80",
    liveUrl: "https://race-bidding.vercel.app",
    featured: true,
    highlights: [
      "Real-Time Betting Engine: powered by Supabase for responsive bid synchronization.",
      "Live Race Video Integration: smooth race playback and live streams using React-Player.",
      "Betting Trends & Odds Charts: visual analytics and odds tracking built with Recharts.",
    ],
  },
  "portfolio": {
    title: "Engineering Portfolio",
    description:
      "Interactive full-stack portfolio built with Next.js 16 App Router & React 19 RSC, featuring 3D hardware-accelerated tilt cards, kinetic glowing border animations, dynamic GitHub live sync, and automated 1-page ATS-compliant CV export.",
    category: "Full Stack",
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Turbopack", "Lucide"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
    liveUrl: "https://portfolio-tau-flax-72.vercel.app",
    featured: true,
    highlights: [
      "Sub-Second Turbopack Rendering: Architected with Next.js 16 App Router and React Server Components.",
      "Hardware-Accelerated 3D Motion: Physics-based 3D spring tilt, laser border beams, and 60fps micro-interactions.",
      "Deterministic 1-Page ATS CV: Print layout isolation engine generating strictly 1-page executive PDFs.",
    ],
  },
};

export async function fetchGitHubProjects(): Promise<Project[]> {
  try {
    const res = await fetch("https://api.github.com/users/saurabh-mx/repos?sort=updated&per_page=100", {
      headers: {
        "User-Agent": "Portfolio-App",
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 3600 }, // Auto-revalidate every hour
    });

    if (!res.ok) {
      console.warn("GitHub API error, using static projects fallback:", res.status);
      return portfolioData.projects;
    }

    const repos: GitHubRepo[] = await res.json();

    // Map all non-fork repositories into Project format
    const projects: Project[] = repos
      .filter((repo) => !repo.fork)
      .map((repo) => {
        const repoKey = Object.keys(curatedProjectsMeta).find(
          (k) => k.toLowerCase() === repo.name.toLowerCase()
        );
        const curated = repoKey ? curatedProjectsMeta[repoKey] : null;

        if (curated) {
          return {
            id: repo.name.toLowerCase(),
            title: curated.title,
            description: curated.description,
            category: curated.category,
            tags: curated.tags,
            image: curated.image,
            liveUrl: repo.homepage || curated.liveUrl,
            githubUrl: repo.html_url,
            featured: curated.featured,
            highlights: curated.highlights,
          };
        }

        // Automatic fallback for any NEW repository added to GitHub
        const cleanName = repo.name
          .replace(/[-_]/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase());

        return {
          id: repo.name.toLowerCase(),
          title: cleanName,
          description: repo.description || `Modern web application repository created by Saurabh Bhai Patel.`,
          category: (repo.language === "TypeScript" || repo.language === "JavaScript"
            ? "Full Stack"
            : "Web Apps") as "Full Stack" | "Frontend" | "Web Apps",
          tags: [repo.language || "TypeScript", ...repo.topics].filter(Boolean),
          image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
          liveUrl: repo.homepage || repo.html_url,
          githubUrl: repo.html_url,
          featured: false,
          highlights: [
            `Built with ${repo.language || "TypeScript"}.`,
            `Source code publicly available on GitHub at saurabh-mx/${repo.name}.`,
          ],
        };
      });

    // Sort with curated priority order
    const priorityOrder = [
      "upi-stream-overlay",
      "hr-management-portal",
      "race-bidding",
      "laxmann-phool-bhandar",
      "portfolio",
    ];

    projects.sort((a, b) => {
      const aIdx = priorityOrder.indexOf(a.id.toLowerCase());
      const bIdx = priorityOrder.indexOf(b.id.toLowerCase());
      if (aIdx !== -1 && bIdx !== -1) return aIdx - bIdx;
      if (aIdx !== -1) return -1;
      if (bIdx !== -1) return 1;
      return 0;
    });

    return projects.length > 0 ? projects : portfolioData.projects;
  } catch (error) {
    console.error("Failed to fetch projects from GitHub:", error);
    return portfolioData.projects;
  }
}
