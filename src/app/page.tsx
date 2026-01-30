import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-500 selection:text-white">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
