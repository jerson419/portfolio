import Link from 'next/link';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

export default function Contact() {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%", // Animate when top of section hits 80% viewport height
                toggleActions: "play none none reverse"
            }
        });

        tl.from(".project-count", {
            textContent: 0,
            duration: 2,
            ease: "power1.out",
            snap: { textContent: 1 },
            stagger: 1,
        }, 0)
            .from(".client-stat", {
                textContent: 0,
                duration: 2,
                ease: "power1.out",
                snap: { textContent: 1 },
                stagger: 1,
            }, 0);

    }, { scope: containerRef });

    return (
        <section ref={containerRef} id="contact" className="relative py-12 px-6 md:px-12 bg-background text-white">
            <div className="text-center max-w-4xl mx-auto mb-20">
                <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-snug">
                    <span className="text-gray-500">open to exciting projects, collaborations, and creative ideas. 🎨</span>
                    <br />
                    <span className="text-white">Whether it&apos;s a branding project, illustration work, or a new web interface — let&apos;s talk!</span>
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {/* Card 1: Hire Now */}
                <div className="bg-gray-900/50 p-8 rounded-2xl flex flex-col justify-between aspect-square md:aspect-auto md:min-h-[400px] hover:bg-gray-900 transition-colors">
                    <div className="w-max"><span className="waving-hand text-6xl">👋</span></div>

                    <div>
                        <h3 className="text-2xl font-bold mb-8">— Ready to bring your ideas to life?</h3>
                        <Link href="mailto:jerson419@gmail.com" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors">
                            Let&apos;s Connect &rarr;
                        </Link>
                    </div>
                </div>

                {/* Card 2: Stats */}
                <div className="bg-[#e0d9fc] text-black p-8 rounded-2xl flex flex-col justify-between aspect-square md:aspect-auto md:min-h-[400px]">
                    <div>
                        <h3 className="text-6xl font-bold mb-2"><span className="project-count">30</span>+</h3>
                        <p className="text-sm font-medium opacity-70">Projects Completed</p>
                    </div>

                    <div>
                        <h3 className="text-6xl font-bold mb-2"><span className="client-stat">99</span>%</h3>
                        <p className="text-sm font-medium opacity-70">Clients Satisfaction</p>
                    </div>
                </div>

                {/* Card 3: Philosophy */}
                <div className="bg-gray-900/50 p-8 rounded-2xl flex flex-col justify-end aspect-square md:aspect-auto md:min-h-[400px] hover:bg-gray-900 transition-colors">
                    <p className="text-lg font-medium mb-12">
                        Collaborative, and designed to make you feel confident at every stage.
                    </p>
                    <div className="text-right">
                        <Link href="https://linkedin.com/in/jerson-sabellano-33112b57" target="_blank" rel="noopener noreferrer" className="text-xs font-bold hover:underline">Learn More &rarr;</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
