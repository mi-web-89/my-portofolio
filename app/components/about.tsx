import { ABOUT_ME } from "../data/about-me";

export function About({ className }: { className?: string }) {
  return (
    <section id="about" className={`${className ?? ""} scroll-mt-20 md:scroll-mt-36`}>
      <h2 className="text-3xl font-bold mb-6">About Me</h2>

      {/* Left accent bar with shadow */}
      <div className="group relative rounded-lg shadow-lg dark:shadow-purple-500/10 bg-current/2 hover:shadow-2xl hover:-translate-y-1 transform transition-all duration-300 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-purple-600 to-transparent rounded-l-lg transition-all duration-300 group-hover:w-2" />

        <div className="px-6 py-4">
          <p className="text-sm text-justify leading-relaxed text-current/75 whitespace-pre-line transition-colors duration-200 group-hover:text-current/90">
            {ABOUT_ME}
          </p>
        </div>
      </div>
    </section>
  );
}
