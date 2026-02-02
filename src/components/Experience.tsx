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

    const experiences = [
        {
            company: "Metron Innovation Group Silicon Valley, USA (Remote)",
            position: "Full Stack Developer",
            role: "Design, build, and maintain production-grade web features using React, Next, Node.js, and Express.",
            year_range: "July 2014 - Present"
        },
        {
            company: "Tieto Global Oy — Cebu, Philippines",
            position: "Java Development Engineer / Scrum Master/ APO",
            role: "Part of a development team responsible for 3G/4G radio network element integrations in a network management system.",
            year_range: "October 2012 – July 2014"
        },
        {
            company: "SystemixG",
            position: "Application Developer",
            role: "Integrated System Dynamics models into web applications for forecasting and decision-support systems.",
            year_range: "October 2009 – October 2012"
        },
        {
            company: "N-PAX / Beeline Cebu",
            position: "Software Engineer",
            role: "Part of the team responsible for maintaining and enhancing the user experience of a legacy system built with ASP.NET, C#, JavaScript/jQuery, and MS SQL.",
            year_range: "2008-2009"
        },
        {
            company: "Taiyo Yuden (Philippines), Inc",
            position: "Software Engineer",
            role: "Responsible for developing and maintaining applications using PowerBuilder 8/10 and MS SQL Server 2000. Primarily worked on Stock Management Systems",
            year_range: "2002-2008"
        }
    ];

    return (
        <section ref={containerRef} id="about" className="experiences spotlight relative w-full py-12 px-6 md:px-12 bg-background text-white min-h-screen flex flex-col justify-center">
            <div className="flex justify-between items-center text-s tracking-widest text-gray-500 uppercase mb-16 border-b border-gray-800 pb-4">
                <span>Experiences</span>
                <span></span>
            </div>

            {experiences.map((exp, index) => (
                <div key={index} className={`relative z-10 grid md:grid-cols-2 gap-12 mb-24 md:mb-0`}>
                    {index % 2 === 0 ? (
                        /* Left Layout */
                        <>
                            <div className="card ex-card ex-card-left flex flex-col items-end text-right md:pr-12 md:pb-24">
                                <h3 className="company text-4xl md:text-5xl font-bold mb-2">{exp.company}</h3>
                                <p className="position text-xl mb-4">{exp.position}</p>
                                <p className="role max-w-md text-sm leading-relaxed mb-4">
                                    {exp.role}
                                </p>
                                <span className="text-xs tracking-widest uppercase">{exp.year_range}</span>
                            </div>
                            <div className="hidden md:block"></div>
                        </>
                    ) : (
                        /* Right Layout */
                        <>
                            <div className="hidden md:block"></div>
                            <div className="card ex-card ex-card-right flex flex-col items-start text-left md:pl-12 md:pb-24">
                                <h3 className="company text-4xl md:text-5xl font-bold mb-2">{exp.company}</h3>
                                <p className="position text-xl mb-4">{exp.position}</p>
                                <p className="role max-w-md text-sm leading-relaxed mb-4">
                                    {exp.role}
                                </p>
                                <span className="text-xs tracking-widest uppercase">{exp.year_range}</span>
                            </div>
                        </>
                    )}
                </div>
            ))}

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
