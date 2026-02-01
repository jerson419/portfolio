import Image from 'next/image';

export default function Projects() {
    return (
        <section id="projects" className="py-12 bg-black text-white px-6 md:px-12">
            <div className="flex justify-between items-center text-xs tracking-widest text-gray-500 uppercase mb-16 border-b border-gray-800 pb-4">
                <span>Projects</span>
                <span>2021 - Present</span>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Interactive <br /> Web
                    </h2>
                    <p className="text-gray-400 max-w-sm mb-8">
                        Engaging web illustrations for a tech startup.
                    </p>
                    <button className="text-sm border-b border-white pb-1 hover:opacity-70 transition-opacity">
                        View Project
                    </button>
                </div>

                <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden group">
                    {/* Placeholder for project image */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-700 font-mono">
                        [Project Image / Video]
                    </div>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                </div>
            </div>
        </section>
    );
}
