"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

export default function ProjectScroll() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const spotlightSection = containerRef.current;
        if (!spotlightSection) return;

        const projectIndex = spotlightSection.querySelector(".project-index h1") as HTMLElement;
        const projectImgs = spotlightSection.querySelectorAll(".project-img");
        const projectImagesContainer = spotlightSection.querySelector(".project-images") as HTMLElement;
        const projectNames = spotlightSection.querySelectorAll(".project-names p");
        const projectNamesContainer = spotlightSection.querySelector(".project-names") as HTMLElement;

        if (!projectIndex || !projectImagesContainer || !projectNamesContainer) return;

        const totalProjectCount = projectNames.length;

        // Calculations
        const spotlightSectionHeight = spotlightSection.offsetHeight;
        const spotlightSectionPadding = parseFloat(
            getComputedStyle(spotlightSection).paddingTop // Assuming uniform vertical padding or top is enough usually, but script used 'padding' which returns string like "10px 20px" or "" in some browsers if not set explicitly. computedStyle.padding works in most modern browsers if set. script used just .padding. Safest is to check both or assume vertical. Let's try .padding first matching script.
        ) || 0; // Fallback if parse fails

        // Note: getComputedStyle(el).padding might return empty string in some browsers if sides differ.
        // Script used `getComputedStyle(spotlightSection).padding`.
        // Let's rely on standard logic but maybe better to verify. For now, strictly following logic but ensuring safety.
        // If padding is "", parseFloat("") is NaN.
        // Let's use paddingBottom + paddingTop if we want vertical.
        // Script did: `spotlightSectionHeight - spotlightSectionPadding * 2` implying uniform padding or just top/bottom same.
        // I will use just paddingTop for safety or try capturing the string.
        // Let's stick effectively to what the script tried, but handle the generic padding string parsing if possible or fallback to 0.
        // Actually, let's just use 0 if it fails, or maybe 50vh as per CSS?
        // CSS says: .project-images { padding: 50svh 0; }
        // The container .spotlight (section) doesn't have explicit padding in the CSS snippet provided in Step 14.
        // Wait, Step 14 CSS doesn't show .spotlight padding.
        // The script calculates `spotlightSectionHeight - spotlightSectionPadding * 2`.
        // If padding is 0, then it uses full height.

        const projectIndexHeight = projectIndex.offsetHeight;
        const imagesHeight = projectImagesContainer.scrollHeight || projectImagesContainer.offsetHeight;

        // Calculate heights safely
        const containerHeight = projectNamesContainer.scrollHeight || projectNamesContainer.offsetHeight;
        // Last item height or average
        const lastItemHeight = (projectNames[projectNames.length - 1] as HTMLElement)?.offsetHeight || 30;

        // Distance to scroll the list so the last item ends up at the previous top position of the first item
        const moveDistanceNames = containerHeight - lastItemHeight;

        // Account for padding so index doesn't hit the very edge/cutoff
        const moveDistanceIndex = spotlightSectionHeight - projectIndexHeight - (spotlightSectionPadding * 2);

        const moveDistanceImages = window.innerHeight - imagesHeight;
        const imgActivationThreshold = window.innerHeight / 2;

        ScrollTrigger.create({
            trigger: spotlightSection,
            start: "top top",
            end: `+=${window.innerHeight * 3}px`, // Reduced scroll duration
            pin: true,
            pinSpacing: true,
            scrub: 1,
            onUpdate: (self) => {
                const progress = self.progress;
                const currentIndex = Math.min(
                    Math.floor(progress * totalProjectCount) + 1,
                    totalProjectCount
                );

                // Update Index Text
                projectIndex.textContent = `${String(currentIndex).padStart(2, "0")}/${String(totalProjectCount).padStart(2, "0")}`;

                // Move Index
                gsap.set(projectIndex, {
                    y: progress * moveDistanceIndex
                });

                // Move Images
                gsap.set(projectImagesContainer, {
                    y: progress * moveDistanceImages,
                    xPercent: -50,
                    x: 0
                });

                // Move Names (Individually as requested, effectively scrolling the list)
                projectNames.forEach((p, index) => {
                    // Move all names up by the calculated distance based on global progress
                    gsap.set(p, {
                        y: -progress * moveDistanceNames
                    });

                    // Highlight logic
                    const startProgress = index / totalProjectCount;
                    const endProgress = (index + 1) / totalProjectCount;
                    const isActive = progress >= startProgress && progress < endProgress;

                    if (isActive) {
                        gsap.set(p, { color: "#fff", opacity: 1, fontSize: "1.7rem" });
                    } else {
                        gsap.set(p, { color: "#4a4a4a", opacity: 1, fontSize: "1.5rem" });
                    }
                });

                // Images Opacity logic remains...
                projectImgs.forEach((img) => {
                    const imgRect = img.getBoundingClientRect();
                    const imgTop = imgRect.top;
                    const imgBottom = imgRect.bottom;

                    if (
                        imgTop <= imgActivationThreshold &&
                        imgBottom >= imgActivationThreshold
                    ) {
                        gsap.set(img, { opacity: 1 });
                    } else {
                        gsap.set(img, { opacity: 0.5 });
                    }
                });
            }
        });

    }, { scope: containerRef });

    const projects = [
        "SaaS Fitness Platform",
        "HealthView",
        "National Veterinary Research",
        "Samsung Petrochemical Forecast",
        "Stock Management Systems"
    ];

    return (
        <section className="project-scroll">
            <div className="flex justify-between items-center text-s tracking-widest text-gray-500 uppercase mb-16 border-b border-gray-800 pb-4">
                <span>PROJECTS</span>
                <span></span>
            </div>
            <div ref={containerRef} className="spotlight">
                <div className="project-index">
                    <h1>01/{String(projects.length).padStart(2, '0')}</h1>
                </div>

                <div className="project-images">
                    {projects.map((project, index) => (
                        <div key={index} className="project-img">
                            <img src={`/projects/img${index + 1}.jpg`} alt={project} />
                        </div>
                    ))}
                </div>

                <div className="project-names">
                    {projects.map((project, index) => (
                        <p key={index}>{project}</p>
                    ))}
                </div>
            </div>


        </section>
    );
}