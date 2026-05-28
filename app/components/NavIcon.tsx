import type { NavKey } from "../lib/nav-links";

type NavIconProps = {
  name: NavKey;
  className?: string;
};

export default function NavIcon({ name, className }: NavIconProps) {
  const common = {
    className,
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "navHome":
      return (
        <svg {...common}>
          <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z" />
        </svg>
      );
    case "navApps":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="7" height="7" rx="1.6" />
          <rect x="13" y="4" width="7" height="7" rx="1.6" />
          <rect x="4" y="13" width="7" height="7" rx="1.6" />
          <rect x="13" y="13" width="7" height="7" rx="1.6" />
        </svg>
      );
    case "navStory":
      return (
        <svg {...common}>
          <circle cx="6.5" cy="6.5" r="2.2" />
          <circle cx="17.5" cy="6.5" r="2.2" />
          <circle cx="12" cy="17.5" r="2.2" />
          <path d="M8.2 7.8 10.5 15" />
          <path d="M15.8 7.8 13.5 15" />
          <path d="M8.7 6.5h6.6" />
        </svg>
      );
    case "navAbout":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3.4" />
          <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
        </svg>
      );
    case "navContact":
      return (
        <svg {...common}>
          <rect x="4" y="6" width="16" height="12" rx="2" />
          <path d="m4.8 7.2 7.2 5.4 7.2-5.4" />
        </svg>
      );
    default:
      return null;
  }
}
