import { EXPERIENCES } from "../data/experiences";

export function Experiences({className}: {className?: string}) {
  return (
    <section id="experience" className={`${className ?? ""} scroll-mt-20 md:scroll-mt-24`}>
      <h2 className="text-3xl font-bold mb-8">Experiences</h2>
      
      <div className="space-y-4">
        {EXPERIENCES.map((exp, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg border border-current/10 transition-all duration-300 hover:border-current/30"
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-current/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            
            {/* Premium Glow Effect */}
            <div className="absolute -top-1/2 -right-1/2 h-full w-full rounded-full bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
            
            {/* Content */}
            <div className="relative z-10 p-6 backdrop-blur-sm">
              {/* Header with Company and Role */}
              <div className="flex flex-col justify-between gap-2 mb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-current">{exp.company}</h3>
                    <p className="text-sm font-semibold text-current/70 mt-1">{exp.role}</p>
                  </div>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-transparent border border-current/20 text-current/80 whitespace-nowrap">
                    {exp.duration}
                  </span>
                </div>
              </div>
              
              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-current/20 via-current/10 to-transparent mb-3" />
              
              {/* Description */}
              <p className="text-sm leading-relaxed text-current/75">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
