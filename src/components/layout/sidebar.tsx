
import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface SidebarLink {
  name: string;
  href: string;
  icon: JSX.Element;
}

interface SidebarProps {
  links: SidebarLink[];
}

const Sidebar: FC<SidebarProps> = ({ links }) => {
  const location = useLocation();

  return (
    <div className="hidden md:flex h-screen w-64 flex-col bg-card border-r border-white/10 fixed left-0 top-0 z-30 pt-16">
      <div className="flex-1 px-3 py-4">
        <ul className="space-y-1">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                className={cn(
                  "flex items-center rounded-md px-3 py-2 text-sm transition-colors",
                  location.pathname === link.href
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                )}
              >
                <span className="mr-3">{link.icon}</span>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="px-3 py-4 border-t border-white/10">
        <div className="text-xs text-muted-foreground mb-2">
          Helpful Links
        </div>
        <ul className="space-y-1">
          <li>
            <a
              href="#"
              className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-muted transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                />
              </svg>
              Documentation
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-muted transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              Support
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
