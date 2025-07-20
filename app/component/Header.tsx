import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 w-full bg-slate-800 p-4 text-white">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className='text-xl font-bold'>Portofolioku</Link>
        <div className="flex gap-4">
          <Link href="/project" className='hover:text-slate-300'>Proyek</Link>
          <Link href="/contact" className='hover:text-slate-300'>Kontak</Link>
        </div>
      </nav>
    </header>
  )
}