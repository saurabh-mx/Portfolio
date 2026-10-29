import React from "react";

interface TechIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
}

// React Icon (Cyan Atom)
export function ReactIcon({ className = "w-5 h-5", size = 20, ...props }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" fill="none" className={className} {...props}>
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

// Next.js Icon (Modern Stylized N)
export function NextjsIcon({ className = "w-5 h-5", size = 20, ...props }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 180 180" fill="none" className={className} {...props}>
      <mask id="next-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: "alpha" }}>
        <circle cx="90" cy="90" r="90" fill="black" />
      </mask>
      <g mask="url(#next-mask)">
        <circle cx="90" cy="90" r="90" fill="#000000" stroke="#333" strokeWidth="4" />
        <path
          d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
          fill="url(#next-grad-1)"
        />
        <rect x="115" y="54" width="12" height="72" fill="url(#next-grad-2)" />
      </g>
      <defs>
        <linearGradient id="next-grad-1" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="next-grad-2" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// TypeScript Icon
export function TypescriptIcon({ className = "w-5 h-5", size = 20, ...props }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path
        d="M11.75 14.25H9.25V7.75H7.5V6.25H13.5V7.75H11.75V14.25ZM18.25 8C18.25 7.45 18.05 7.02 17.65 6.72C17.25 6.4 16.65 6.25 15.85 6.25C15.08 6.25 14.43 6.4 13.9 6.7C13.38 7 13.08 7.42 13 7.95L14.65 8.28C14.7 8.05 14.83 7.85 15.05 7.7C15.28 7.55 15.55 7.48 15.88 7.48C16.23 7.48 16.48 7.55 16.63 7.68C16.78 7.8 16.85 7.95 16.85 8.13C16.85 8.35 16.73 8.53 16.48 8.68C16.23 8.83 15.75 9.02 15.05 9.25C14.15 9.55 13.52 9.88 13.15 10.25C12.78 10.62 12.6 11.13 12.6 11.8C12.6 12.58 12.88 13.2 13.43 13.65C13.98 14.1 14.73 14.33 15.68 14.33C16.5 14.33 17.18 14.15 17.73 13.8V12.18C17.25 12.5 16.73 12.67 16.15 12.67C15.68 12.67 15.35 12.58 15.15 12.4C14.95 12.22 14.85 11.97 14.85 11.65C14.85 11.4 14.98 11.2 15.25 11.05C15.53 10.9 16.03 10.72 16.75 10.5C17.5 10.27 18.03 9.95 18.35 9.55C18.68 9.15 18.25 8.63 18.25 8Z"
        fill="white"
      />
    </svg>
  );
}

// JavaScript Icon
export function JavascriptIcon({ className = "w-5 h-5", size = 20, ...props }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path
        d="M7.5 17.5C8.3 17.5 8.9 17.2 9.3 16.6C9.7 16 9.8 15.2 9.8 14.1V8.5H8.2V14.1C8.2 14.7 8.1 15.1 7.9 15.4C7.7 15.7 7.4 15.8 6.9 15.8C6.6 15.8 6.2 15.7 5.9 15.5L5.4 16.8C5.9 17.2 6.6 17.5 7.5 17.5ZM13.8 17.5C14.8 17.5 15.6 17.2 16.2 16.6C16.8 16 17.1 15.2 17.1 14.2C17.1 13.4 16.9 12.8 16.4 12.3C15.9 11.8 15.1 11.4 14.2 11.1L13.7 10.9C13.2 10.7 12.8 10.5 12.6 10.3C12.4 10.1 12.3 9.8 12.3 9.4C12.3 9 12.4 8.7 12.7 8.4C13 8.1 13.4 8 13.9 8C14.4 8 14.8 8.1 15.2 8.4L15.7 7.1C15.2 6.8 14.6 6.7 13.8 6.7C12.9 6.7 12.2 7 11.6 7.6C11 8.2 10.7 8.9 10.7 9.8C10.7 10.6 11 11.3 11.5 11.7C12 12.1 12.7 12.5 13.6 12.8L14.1 13C14.6 13.2 15.1 13.4 15.3 13.7C15.5 14 15.6 14.3 15.6 14.8C15.6 15.2 15.4 15.6 15.1 15.9C14.8 16.2 14.3 16.3 13.7 16.3C13 16.3 12.5 16.1 12 15.6L11.4 16.9C12 17.3 12.8 17.5 13.8 17.5Z"
        fill="#000000"
      />
    </svg>
  );
}

// Tailwind CSS Icon
export function TailwindIcon({ className = "w-5 h-5", size = 20, ...props }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <path
        d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"
        fill="#38BDF8"
      />
    </svg>
  );
}

// Vite Icon
export function ViteIcon({ className = "w-5 h-5", size = 20, ...props }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <path
        d="M21.72 3.65a.6.6 0 0 0-.6-.33l-8.54.9a.6.6 0 0 0-.53.48L9.93 15.65 5.57 5.12a.6.6 0 0 0-.55-.37L2.4 4.86a.6.6 0 0 0-.54.83l8.6 16.36a.6.6 0 0 0 1.06 0l10.2-17.92a.6.6 0 0 0 0-.48z"
        fill="url(#vite-grad-1)"
      />
      <path
        d="M15.42 1.5a.6.6 0 0 0-.74-.32L7.3 4.2a.6.6 0 0 0-.4.54l-.45 6.72a.6.6 0 0 0 .8.6l2.35-.9-.55 4.8a.6.6 0 0 0 1 .45l6.3-7.55a.6.6 0 0 0-.44-1l-2.58-.08 1.44-5.28z"
        fill="url(#vite-grad-2)"
      />
      <defs>
        <linearGradient id="vite-grad-1" x1="2.4" y1="4.86" x2="20.5" y2="18.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#41D1FF" />
          <stop offset="1" stopColor="#BD34FE" />
        </linearGradient>
        <linearGradient id="vite-grad-2" x1="8" y1="2" x2="16" y2="15" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFEA83" />
          <stop offset="1" stopColor="#FFDD35" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Node.js Icon (Hexagon Node)
export function NodeIcon({ className = "w-5 h-5", size = 20, ...props }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <path
        d="M12 2L3.5 6.9V17.1L12 22L20.5 17.1V6.9L12 2Z"
        fill="#339933"
        stroke="#5FA04E"
        strokeWidth="1.5"
      />
      <path
        d="M12 6.5C10.5 6.5 9.5 7.5 9.5 9V15C9.5 16.5 10.5 17.5 12 17.5C13.5 17.5 14.5 16.5 14.5 15V13.5H12.5V15C12.5 15.3 12.3 15.5 12 15.5C11.7 15.5 11.5 15.3 11.5 15V9C11.5 8.7 11.7 8.5 12 8.5C12.3 8.5 12.5 8.7 12.5 9V10.5H14.5V9C14.5 7.5 13.5 6.5 12 6.5Z"
        fill="white"
      />
    </svg>
  );
}

// Express Icon
export function ExpressIcon({ className = "w-5 h-5", size = 20, ...props }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <rect width="24" height="24" rx="4" fill="#1E293B" stroke="#475569" strokeWidth="1" />
      <path
        d="M6 8H12V9.5H8V11.2H11.5V12.7H8V14.5H12V16H6V8ZM14.2 8H16L17.5 11L19 8H20.8L18.5 12L21 16H19.2L17.5 13L15.8 16H14L16.5 12L14.2 8Z"
        fill="#F8FAFC"
      />
    </svg>
  );
}

// PostgreSQL Icon
export function PostgreSqlIcon({ className = "w-5 h-5", size = 20, ...props }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
        fill="#336791"
      />
      <path
        d="M16.5 8.5C16.5 8.5 15.5 6 12 6C8.5 6 7 8 7 9.5C7 11.5 8.5 12 9.5 12.5C10.5 13 11 13.5 11 14.5C11 15.5 10 16 9 16C8 16 7 15.5 6.5 14.5L5.5 15.5C6.5 17 8 17.5 9.5 17.5C11.5 17.5 13 16.5 13 14.5C13 12.5 11.5 12 10.5 11.5C9.5 11 9 10.5 9 9.5C9 8.5 10 7.5 11.5 7.5C13.5 7.5 14.5 9 14.5 9L16.5 8.5Z"
        fill="white"
      />
      <circle cx="16" cy="11" r="1.5" fill="#41B883" />
    </svg>
  );
}

// Prisma ORM Icon
export function PrismaIcon({ className = "w-5 h-5", size = 20, ...props }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <path
        d="M4.5 19.5L12 2.5L19.5 19.5H4.5Z"
        fill="#5A67D8"
        stroke="#A5B4FC"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M12 2.5L7 19.5" stroke="#FFFFFF" strokeWidth="1.2" />
      <path d="M12 2.5L15 19.5" stroke="#312E81" strokeWidth="1.2" />
    </svg>
  );
}

// Supabase Icon
export function SupabaseIcon({ className = "w-5 h-5", size = 20, ...props }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <path
        d="M13.4 2.1C13-0.7 9-0.7 8.6 2.1L4.2 13.3C3.8 14.3 4.6 15.4 5.7 15.4H11.5L10.6 21.9C11 24.7 15 24.7 15.4 21.9L19.8 10.7C20.2 9.7 19.4 8.6 18.3 8.6H12.5L13.4 2.1Z"
        fill="#3ECF8E"
      />
    </svg>
  );
}

// Socket.IO Icon
export function SocketIoIcon({ className = "w-5 h-5", size = 20, ...props }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <circle cx="12" cy="12" r="10" fill="#000000" stroke="#FFFFFF" strokeWidth="1.5" />
      <path
        d="M13.5 4.5L7.5 13.5H12L10.5 19.5L16.5 10.5H12L13.5 4.5Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// HTML5 Icon
export function Html5Icon({ className = "w-5 h-5", size = 20, ...props }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <path d="M3 2L5 20L12 22L19 20L21 2H3Z" fill="#E34F26" />
      <path d="M12 3.8V20.2L17.4 18.7L19 3.8H12Z" fill="#EF652A" />
      <path
        d="M12 7.6H7.8L8.1 10.8H12V13.8L9.5 13.1L9.3 11.5H6.2L6.7 15.6L12 17.1V7.6ZM12 7.6H16.2L15.9 10.8H12V13.8L14.5 13.1L14.7 10.8H17.8L17.3 15.6L12 17.1V7.6Z"
        fill="white"
      />
    </svg>
  );
}

// CSS3 Icon
export function Css3Icon({ className = "w-5 h-5", size = 20, ...props }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <path d="M3 2L5 20L12 22L19 20L21 2H3Z" fill="#1572B6" />
      <path d="M12 3.8V20.2L17.4 18.7L19 3.8H12Z" fill="#33A9DC" />
      <path
        d="M12 7.6H7.8L8.1 10.8H12V13.8L9.5 13.1L9.3 11.5H6.2L6.7 15.6L12 17.1V7.6ZM12 7.6H16.2L15.9 10.8H12V13.8L14.5 13.1L14.7 10.8H17.8L17.3 15.6L12 17.1V7.6Z"
        fill="white"
      />
    </svg>
  );
}

// Python Icon
export function PythonIcon({ className = "w-5 h-5", size = 20, ...props }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <path
        d="M11.9 2C8.7 2 6.8 3.4 6.8 6.1V8.2H12.2V9.2H4.4C2.3 9.2 1 10.7 1 13.3C1 15.9 2.1 17.3 4.8 17.3H6.4V14.8C6.4 12.8 7.8 11.4 10.1 11.4H14.4C15.8 11.4 16.9 10.3 16.9 8.8V4.6C16.9 3 15.3 2 11.9 2ZM9.5 4.1C10.2 4.1 10.7 4.6 10.7 5.3C10.7 6 10.2 6.5 9.5 6.5C8.8 6.5 8.3 6 8.3 5.3C8.3 4.6 8.8 4.1 9.5 4.1Z"
        fill="#3776AB"
      />
      <path
        d="M12.1 22C15.3 22 17.2 20.6 17.2 17.9V15.8H11.8V14.8H19.6C21.7 14.8 23 13.3 23 10.7C23 8.1 21.9 6.7 19.2 6.7H17.6V9.2C17.6 11.2 16.2 12.6 13.9 12.6H9.6C8.2 12.6 7.1 13.7 7.1 15.2V19.4C7.1 21 8.7 22 12.1 22ZM14.5 19.9C13.8 19.9 13.3 19.4 13.3 18.7C13.3 18 13.8 17.5 14.5 17.5C15.2 17.5 15.7 18 15.7 18.7C15.7 19.4 15.2 19.9 14.5 19.9Z"
        fill="#FFD43B"
      />
    </svg>
  );
}

// SQL Icon
export function SqlIcon({ className = "w-5 h-5", size = 20, ...props }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <ellipse cx="12" cy="6" rx="9" ry="3" fill="#00758F" />
      <path d="M3 6V12C3 13.66 7.03 15 12 15C16.97 15 21 13.66 21 12V6" stroke="#00758F" strokeWidth="2" fill="none" />
      <path d="M3 12V18C3 19.66 7.03 21 12 21C16.97 21 21 19.66 21 18V12" stroke="#00758F" strokeWidth="2" fill="none" />
      <path d="M8 12L16 12" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// REST APIs Icon
export function RestApiIcon({ className = "w-5 h-5", size = 20, ...props }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <rect width="24" height="24" rx="4" fill="#A855F7" />
      <circle cx="6.5" cy="12" r="2.5" fill="white" />
      <circle cx="17.5" cy="7.5" r="2.5" fill="white" />
      <circle cx="17.5" cy="16.5" r="2.5" fill="white" />
      <path d="M9 12H12M12 12L15 8M12 12L15 16" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// JWT Authentication Icon
export function JwtIcon({ className = "w-5 h-5", size = 20, ...props }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <path
        d="M12 2L4 6V12C4 17.5 7.4 21.6 12 23C16.6 21.6 20 17.5 20 12V6L12 2Z"
        fill="#FB015B"
      />
      <circle cx="12" cy="11" r="3" fill="white" />
      <path d="M12 14V17" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Git Icon
export function GitIcon({ className = "w-5 h-5", size = 20, ...props }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <path
        d="M21.6 10.7L13.3 2.4C12.5 1.6 11.2 1.6 10.4 2.4L8.7 4.1L11.5 6.9C12.1 6.7 12.8 6.9 13.3 7.4C13.8 7.9 14 8.7 13.8 9.3L16.4 11.9C17 11.7 17.8 11.9 18.3 12.4C19.1 13.2 19.1 14.5 18.3 15.3C17.5 16.1 16.2 16.1 15.4 15.3C14.9 14.8 14.7 14 14.9 13.4L12.5 11V16.8C12.7 17.1 12.8 17.5 12.8 17.9C12.8 19.2 11.7 20.2 10.4 20.2C9.1 20.2 8 19.2 8 17.9C8 16.9 8.7 16 9.7 15.7V9.7C8.7 9.4 8 8.5 8 7.5C8 7 8.2 6.6 8.5 6.3L2.4 12.4C1.6 13.2 1.6 14.5 2.4 15.3L10.7 23.6C11.5 24.4 12.8 24.4 13.6 23.6L21.6 15.6C22.4 14.8 22.4 13.5 21.6 12.7V10.7Z"
        fill="#F05032"
      />
    </svg>
  );
}

// Responsive UI Design Icon
export function ResponsiveUiIcon({ className = "w-5 h-5", size = 20, ...props }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <rect x="2" y="3" width="20" height="13" rx="2" stroke="#38BDF8" strokeWidth="2" />
      <path d="M8 21H16M12 16V21" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
      <rect x="15" y="8" width="6" height="11" rx="1" fill="#0284C7" stroke="#BAE6FD" strokeWidth="1.5" />
    </svg>
  );
}
