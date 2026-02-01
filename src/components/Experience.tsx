import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

export default function Experience() {
    const containerRef = useRef<HTMLElement>(null);
    const pathRef = useRef<SVGPathElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const lenis = new Lenis();
        lenis.on('scroll', ScrollTrigger.update);

        const ticker = (time: number) => {
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(ticker);
        gsap.ticker.lagSmoothing(0);

        const path = pathRef.current;
        if (path) {
            const pathLength = path.getTotalLength();
            path.style.strokeDasharray = `${pathLength}`;
            path.style.strokeDashoffset = `${pathLength}`;

            // Glassmorphism card effect
            gsap.utils.toArray('.card').forEach((card) => {
                const element = card as Element;
                ScrollTrigger.create({
                    trigger: element,
                    start: "top 60%",
                    onEnter: () => element.classList.add("card-glass"),
                    onLeaveBack: () => element.classList.remove("card-glass"),
                });
            });

            const t = gsap.to(path, {
                strokeDashoffset: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 40%",
                    end: "bottom bottom",
                    scrub: true
                    //markers: true,
                },
            });

            return () => {
                gsap.ticker.remove(ticker);
                lenis.destroy();
                t.kill();
                ScrollTrigger.getAll().forEach(t => t.kill());
            };
        }

        return () => {
            gsap.ticker.remove(ticker);
            lenis.destroy();
        };

    }, []);

    return (
        <section ref={containerRef} id="about" className="spotlight relative w-full py-12 px-6 md:px-12 bg-background text-white min-h-screen flex flex-col justify-center">
            <div className="flex justify-between items-center text-xs tracking-widest text-gray-500 uppercase mb-16 border-b border-gray-800 pb-4">
                <span>Experiences</span>
                <span></span>
            </div>

            {/* Item 1 - Left */}
            <div className="relative z-10 grid md:grid-cols-2 gap-12 mb-24 md:mb-0 ">
                <div className="card ex-card ex-card-left flex flex-col items-end text-right md:pr-12 md:pb-24">
                    <h3 className="text-4xl md:text-5xl font-bold mb-2">Metron Innovation Group</h3>
                    <p className="text-xl  mb-4">Full Stack Developer (Remote)</p>
                    <p className="max-w-md  text-sm leading-relaxed mb-4">
                        Building and maintaining Techivation&apos;s full web and SaaS ecosystem
                        powering audio plugin licensing and management.
                    </p>
                    <span className="text-xs tracking-widest uppercase">May 2023 - Present</span>
                </div>
                <div className="hidden md:block"></div>
            </div>

            {/* Item 2 - Right */}
            <div className="relative z-10 grid md:grid-cols-2 gap-12">
                <div className="hidden md:block"></div>
                <div className="card ex-card ex-card-right flex flex-col items-start text-left md:pl-12 md:pb-24">
                    <h3 className="text-4xl md:text-5xl font-bold mb-2">Tieto Global Oy</h3>
                    <p className="text-xl mb-4">Software Engineer</p>
                    <p className="max-w-md text-sm leading-relaxed mb-4">
                        Developing an AI-powered SaaS platform with real-time collaboration,
                        billing systems, and intelligent document management.
                    </p>
                    <span className="text-xs tracking-widest uppercase">Jun 2024 - Present</span>
                </div>
            </div>


            {/* Item 1 - Left */}
            <div className="relative z-10 grid md:grid-cols-2 gap-12 mb-24 md:mb-0 ">
                <div className="card ex-card ex-card-left flex flex-col items-end text-right md:pr-12 md:pb-24">
                    <h3 className="text-4xl md:text-5xl font-bold mb-2">Metron Innovation Group</h3>
                    <p className="text-xl  mb-4">Full Stack Developer (Remote)</p>
                    <p className="max-w-md  text-sm leading-relaxed mb-4">
                        Building and maintaining Techivation&apos;s full web and SaaS ecosystem
                        powering audio plugin licensing and management.
                    </p>
                    <span className="text-xs tracking-widest  uppercase">May 2023 - Present</span>
                </div>
                <div className="hidden md:block"></div>
            </div>

            {/* Item 2 - Right */}
            <div className="relative z-10 grid md:grid-cols-2 gap-12">
                <div className="hidden md:block"></div>
                <div className="card ex-card ex-card-right flex flex-col items-start text-left md:pl-12">
                    <h3 className="text-4xl md:text-5xl font-bold mb-2">Tieto Global Oy</h3>
                    <p className="text-xl  mb-4">Software Engineer</p>
                    <p className="max-w-md  text-sm leading-relaxed mb-4">
                        Developing an AI-powered SaaS platform with real-time collaboration,
                        billing systems, and intelligent document management.
                    </p>
                    <span className="text-xs tracking-widest  uppercase">Jun 2024 - Present</span>
                </div>
            </div>

            <div className="svg-path">
                <svg
                    viewBox="0 0 1378 2760"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMin meet"
                >
                    <path
                        ref={pathRef}
                        id="stroke-path"
                        d="M639.668 100C639.668 100 105.669 100 199.669 601.503C293.669 1103.01 1277.17 691.502 1277.17 1399.5C1277.17 2107.5 -155.332 1968 140.168 1438.5C435.669 909.002 1442.66 2093.5 713.168 2659.5"
                        stroke="#ff4d4d"
                        strokeWidth="200"
                        strokeLinecap="round"
                    />
                </svg>
            </div>
        </section>
    );
}
