import Image from 'next/image'
import { Navbar } from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Projects from './components/Projects';
import dynamic from "next/dynamic";


export default function Home() {
  return (
    <main className="bg-[#161927]">
      <Navbar/>
      <Hero/>
      <Skills/>
      <About/>
      <Projects/>
      <Footer/>
    </main>
  );
}

// export default dynamic(() => Promise.resolve(page), { ssr: false });
