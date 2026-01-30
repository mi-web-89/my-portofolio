import { PROJECTS } from "../data/projects";

export function Projects({className}: {className?: string}) {
  return (
    <section id="projects" className={`${className ?? ""} scroll-mt-20 md:scroll-mt-24`}>
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-4">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="group relative h-full transition-all duration-300"
          >
            {/* Top accent border */}
            <div className="absolute -top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            
            {/* Card container */}
            <div className="relative h-full flex flex-col border border-current/10 rounded-lg overflow-hidden transition-all duration-300 group-hover:border-current/25 group-hover:shadow-lg dark:group-hover:shadow-blue-500/10">
              {/* Background shift */}
              <div className="absolute inset-0 bg-gradient-to-br from-current/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl" />
              
              {/* Content */}
              <div className="relative z-10 p-4 md:p-6 flex flex-col h-full">
                {/* Project Number Badge */}
                <div className="mb-3 md:mb-4 flex items-start justify-between">
                  <span className="text-xs font-bold text-current/50 uppercase tracking-widest">Project {String(index + 1).padStart(2, '0')}</span>
                </div>
                
                {/* Project Name */}
                <h3 className="text-base md:text-lg font-bold text-current mb-2 md:mb-3 group-hover:text-current transition-colors duration-300">
                  {project.name}
                </h3>
                
                {/* Description */}
                <p className="text-xs md:text-sm leading-relaxed text-current/70 mb-3 md:mb-4 flex-grow">
                  {project.description}
                </p>
                
                {/* Tech Stack - Horizontal list */}
                <div className="mb-3 md:mb-4">
                  <p className="text-xs font-semibold text-current/60 mb-2">TECH STACK</p>
                  <div className="flex flex-wrap gap-1 md:gap-1.5">
                    {project.stack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs font-mono px-2 md:px-2.5 py-0.5 md:py-1 rounded border border-current/15 text-current/70 bg-current/3 group-hover:border-current/30 group-hover:text-current/80 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Link if available */}
                {project.link && (
                  <div className="mt-auto pt-3 md:pt-4 border-t border-current/5">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold uppercase tracking-widest text-current/60 hover:text-current transition-colors duration-200 inline-flex items-center gap-2"
                    >
                      Visit →
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
