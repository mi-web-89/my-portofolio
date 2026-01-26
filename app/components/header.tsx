import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  return (
    <header className="flex justify-end px-4 py-1 bg-background-dark dark:border-b">
      <ThemeToggle />
    </header>
  );
}
