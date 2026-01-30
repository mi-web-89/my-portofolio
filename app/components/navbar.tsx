const MENU_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Project", href: "#projects" },
];

export function Navbar({ className }: { className?: string }) {
  return (
    <nav className={className}>
      <ul className="space-y-2">
        {MENU_ITEMS.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              className="relative group text-sm font-medium text-current/70 hover:text-current transition-colors duration-300 inline-flex items-center gap-2"
            >
              <span className="h-0.5 w-4 bg-gradient-to-r from-purple-500 to-purple-400 group-hover:w-8 transition-all duration-300" />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
