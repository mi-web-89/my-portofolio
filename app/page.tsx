import { About } from "./components/about";
import { Experiences } from "./components/experiences";
import { Projects } from "./components/projects";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Profile } from "./components/profile";

// tailwind -> mengelola duplikasi

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col md:flex-row flex-1 overflow-hidden md:overflow-visible px-1 md:px-0">
        {/* profile section */}
        <section className="w-full md:w-[38%] md:h-screen flex flex-col justify-between py-6 md:py-8 px-4 md:px-6 border-b md:border-b-0 md:border-r border-current/10 flex-shrink-0 bg-gradient-to-b from-current/2 to-transparent overflow-hidden">
          <Profile />

          {/* Bottom section */}
          <Navbar className="my-5" />
        </section>

        {/* resume section */}
        <section className="w-full md:w-[62%] md:h-screen overflow-y-auto px-2">
          <About className="space-y-6 py-6" />
          <Experiences className="space-y-6" />
          <Projects className="space-y-6 mt-12 pb-10" />
        </section>
      </main>

      {/* footer */}
      <Footer className="border-t border-current/10 bg-gradient-to-t from-current/2 to-transparent py-6 px-4 md:px-6" />
    </div>
  );
}
