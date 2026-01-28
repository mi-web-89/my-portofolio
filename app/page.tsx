import { Avatar } from "./components/avatar";
import defaultAvatar from "../public/hero_setup.png";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      {/* profile */}
      <section className="flex flex-col items-center justify-center space-y-4 py-4 px-1">
        <Avatar src={defaultAvatar} size={192} alt="User Avatar" />
        <h1 className="text-4xl font-bold">Muhammad Ismail</h1>
        <p className="text-justify">
          Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim
          id veniam aliqua proident excepteur commodo do ea.
        </p>
      </section>

      {/* resume */}
      <section className="border border-amber-800"></section>
    </main>
  );
}
