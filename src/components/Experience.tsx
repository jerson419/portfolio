export default function Experience() {
    return (
        <section id="about" className="relative w-full py-24 px-6 md:px-12 bg-background text-white min-h-screen flex flex-col justify-center">
            <div className="timeline-line absolute left-1/2 top-0 bottom-0 w-px bg-gray-800 transform -translate-x-1/2 hidden md:block"></div>

            {/* Item 1 - Left */}
            <div className="relative z-10 grid md:grid-cols-2 gap-12 mb-24 md:mb-0">
                <div className="flex flex-col items-end text-right md:pr-12 md:pb-24">
                    <h3 className="text-4xl md:text-5xl font-bold mb-2">Metron Innovation Group</h3>
                    <p className="text-xl text-gray-400 mb-4">Full Stack Developer (Remote)</p>
                    <p className="max-w-md text-gray-500 text-sm leading-relaxed mb-4">
                        Building and maintaining Techivation&apos;s full web and SaaS ecosystem
                        powering audio plugin licensing and management.
                    </p>
                    <span className="text-xs tracking-widest text-gray-600 uppercase">May 2023 - Present</span>
                </div>
                <div className="hidden md:block"></div>
            </div>

            {/* Item 2 - Right */}
            <div className="relative z-10 grid md:grid-cols-2 gap-12">
                <div className="hidden md:block"></div>
                <div className="flex flex-col items-start text-left md:pl-12 md:pt-24">
                    <h3 className="text-4xl md:text-5xl font-bold mb-2">Tieto Global Oy</h3>
                    <p className="text-xl text-gray-400 mb-4">Software Engineer</p>
                    <p className="max-w-md text-gray-500 text-sm leading-relaxed mb-4">
                        Developing an AI-powered SaaS platform with real-time collaboration,
                        billing systems, and intelligent document management.
                    </p>
                    <span className="text-xs tracking-widest text-gray-600 uppercase">Jun 2024 - Present</span>
                </div>
            </div>

            {/* Center Decor at intersection? */}
            <div className="timeline-dot absolute left-1/2 top-1/2 w-4 h-4 bg-background border-2 border-gray-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 hidden md:block"></div>
        </section>
    );
}
