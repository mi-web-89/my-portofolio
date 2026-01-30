import { SOCIAL_MEDIA } from "../data/social-media";
import { Github, Linkedin, Facebook, Mail } from "lucide-react";

export function SocialMedia({className = ""}: {className?: string}) {
  const getIcon = (icon: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      github: <Github size={18} />,
      linkedin: <Linkedin size={18} />,
      twitter: <Facebook size={18} />,
      email: <Mail size={18} />,
    };
    return icons[icon] || null;
  };

  return (
    <div className={className}>
      {/* <p className="text-xs font-semibold uppercase tracking-widest text-current/50 mb-4">
        Connect
      </p> */}
      <div className="flex flex-row gap-3">
        {SOCIAL_MEDIA.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-10 h-10 rounded-lg border border-current/20 text-current/70 hover:text-current hover:border-current/50 transition-all duration-300 hover:bg-current/5"
          >
            {getIcon(social.icon)}
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-current/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {social.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
