import Image from 'next/image';

export default function Hero() {
    return (
        <section className="hero relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-background">
            {/* Background Graphic / Placeholder for Person */}
            <div className="absolute top-0 right-0 w-full h-full md:w-2/3 opacity-40 md:opacity-100 mix-blend-screen pointer-events-none">
                <Image
                    src="/hero-image.jpg"
                    alt="Jerson Sabellano - Software Engineer"
                    fill
                    className="object-contain object-center md:object-right opacity-80"
                    priority
                />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-20">
                <div className="flex flex-col gap-2">
                    <span className="text-sm md:text-base font-medium text-gray-400">Hi there! This is</span>
                    <div className="flex items-baseline gap-2">
                        <h2 className="text-xl md:text-2xl font-bold text-white">Jerson Sabellano</h2>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.9] mt-4 text-white">
                        SOFTWARE <br />
                        ENGINEER
                    </h1>

                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-accent-start to-accent-end">
                        FULLSTACK
                    </h1>
                </div>

                <div className="mt-12 md:mt-20 max-w-md text-sm md:text-base text-gray-400 leading-relaxed">
                    <p>
                        I help startups and SaaS teams ship high-quality features faster using modern web technologies.
                    </p>
                </div>

            </div>

            <div className="absolute bottom-10 left-6 md:left-12 text-xs text-gray-600 animate-bounce">
                (Scroll down)
            </div>
        </section>
    );
}
