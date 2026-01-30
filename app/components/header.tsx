import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-2 border-b border-current/10 bg-current/2 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
        <span className="text-sm font-semibold uppercase tracking-widest text-current/70">
          Portfolio
        </span>
      </div>
      <ThemeToggle />
    </header>
  );
}
