import { SocialMedia } from "./social-media";

const currentYear = new Date().getFullYear();

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={className}>
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left section */}
        <SocialMedia />

        {/* Right section */}
        <div className="flex items-center gap-6">
          <p className="text-sm text-current/70">
            <span className="font-semibold">Muhammad Ismail</span> ©{" "}
            {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
