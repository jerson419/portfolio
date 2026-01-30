import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-6 md:px-12 mix-blend-difference text-white">
      <div className="text-sm font-light tracking-wide opacity-80">
        Good day!
      </div>

      <div className="hidden md:flex gap-8 text-sm font-medium tracking-tight">
        <Link href="/" className="hover:opacity-70 transition-opacity">Home</Link>
        <Link href="#about" className="hover:opacity-70 transition-opacity">Experience</Link>
        <Link href="#projects" className="hover:opacity-70 transition-opacity">Projects</Link>
        <Link href="#contact" className="hover:opacity-70 transition-opacity">Let&apos;s talk!</Link>
      </div>

      <div className="md:hidden">
        {/* Mobile Menu Icon Placeholder */}
        <button className="text-white">Menu</button>
      </div>
    </nav>
  );
}
