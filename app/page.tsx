// import Image from "next/image";

export default function Home() {
  const links = [
    { name: "GitHub", url: "https://github.com/mi-web-89" },
    { name: "LinkedIn", url: "https://linkedin.com/in/muhammad-ismaill-0698a824b/" },
    { name: "Facebook", url: "https://facebook.com/muhammad.ismail.7758235" },
  ];

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-8">
        <div className="text-center">
          <div className="mx-auto mb-6 h-32 w-32 rounded-full bg-slate-300"></div>

          <h1 className="text-4xl font-bold">Muhammad Ismail</h1>
          <p className="mt-2 text-slate-500">
            Frontend Developer | Tech Enthusiast | Coffee Lover
          </p>

          <div className="mt-8 flex flex-col gap-4 w-full max-w-xs mx-auto">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                 className="bg-slate-800 text-white p-4 rounded-lg font-semibold text-center hover:bg-slate-700 hover:scale-105 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}