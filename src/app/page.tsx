"use client";

import { ScrambleTextPlugin } from 'gsap/dist/ScrambleTextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Lenis from 'lenis';
import { useEffect, useRef } from "react";
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
//import Projects from '@/components/Projects';
import ProjectScroll from '@/components/ProjectScroll';
import Contact from '@/components/Contact';
import PageReveal from '@/components/PageReveal';

gsap.registerPlugin(useGSAP, ScrambleTextPlugin, ScrollTrigger);

export default function Home() {
  const container = useRef(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Force scroll to top on load/reload
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
      window.scrollTo(0, 0);
    }

    const lenis = new Lenis();
    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      lenis.destroy();
    };
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();
    const scrambleChars = 'upperAndLowerCase';
    // Init state set in CSS, but GSAP takes over here

    //Scramble Text
    tl.to("#word-1 h1", {
      duration: 1,
      opacity: 1,
      scrambleText: { text: 'Welcome', chars: scrambleChars, revealDelay: 0.5, speed: 1 },
      ease: 'power2.out',
    });

    // Reveal words
    tl.to("#word-1 h1", {
      y: 0,
      duration: 1,
      ease: "power4.out",
    })
      .to("#word-2 h1", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
      })



    // Expand divider
    tl.to(".divider", {
      scaleY: 1,
      duration: 1,
      ease: "power3.inOut",
    }, "-=0.5");

    // Wait a beat
    tl.to({}, { duration: 0.5 });

    // Open the blocks (reveal page)
    tl.to(".block", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 1,
      stagger: 0.1,
      ease: "power4.inOut",
    })
      // Fade out logo and divider as blocks open
      .to(".intro-logo, .divider", {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      }, "<");

    // Remove reveal component from pointer events found in CSS or just hide it
    tl.set(".pagereveal", { pointerEvents: "none", display: "none" });

    // Hero Animations - Start right after blocks open
    tl.from(".hero h1, .hero h2, .hero p, .hero span", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
    }, "-=0.5");

    tl.from(".hero-img", {
      opacity: 0.4,
      duration: 1.5,
      ease: "power2.out",
    }, "<");

    // Reveal Navbar
    tl.from("nav", {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=1");

    //working reference for later
    // Scroll Effects
    // gsap.to(".hero-img", {
    //   x: -150,
    //   ease: "power1.inOut",
    //   scrollTrigger: {
    //     trigger: ".hero-img",
    //     start: "top 10%",
    //     end: "bottom 50%",
    //     scrub: true,
    //     markers: true,
    //   }
    // });

  }, { scope: container });

  return (
    <main ref={container} className="min-h-screen bg-black text-white selection:bg-red-500 selection:text-white">
      <PageReveal />
      <Navbar />
      <Hero />
      <Experience />
      <ProjectScroll />
      <Contact />
    </main>

  );
}
