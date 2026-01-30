import { Avatar } from "./avatar";
import defaultAvatar from "../../public/hero_setup.png";

export function Profile() {
  return (
    <>
      <div className="flex flex-col items-center space-y-4 md:space-y-6 w-full">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative rounded-full border-2 border-current/20 p-1 hover:border-current/40 transition-all duration-300">
            <Avatar src={defaultAvatar} size={180} alt="User Avatar" />
          </div>
        </div>
        <div className="text-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold">Muhammad Ismail</h1>
          <p className="text-xs font-semibold uppercase tracking-widest text-current/50">
            Frontend Developer
          </p>
        </div>
      </div>

      <p className="mt-5 leading-relaxed text-current/70 text-justify">
        Building beautiful and functional web experiences with modern
        technologies. Keep learning and keep building.
      </p>
    </>
  );
}
