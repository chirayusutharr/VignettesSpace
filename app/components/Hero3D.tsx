"use client";

import { useEffect, useState } from "react";

const slides = [
    {
        eyebrow: "THOUGHTFUL INTERIOR DESIGN",
        title: ["Spaces That", "Feel Like Home"],
        description:
            "Thoughtfully designed interiors that bring comfort, style, and meaning together.",
        image:
            "https://images.pexels.com/photos/35419450/pexels-photo-35419450.jpeg",
        button: "Explore Projects",
    },
    {
        eyebrow: "DESIGNED AROUND YOU",
        title: ["A Better Way", "To Live"],
        description:
            "Discover considered spaces where natural textures, timeless details, and everyday living come together.",
        image:
            "https://images.pexels.com/photos/7027771/pexels-photo-7027771.jpeg",
        button: "Discover Our Approach",
    },
];

export default function Hero3D() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const element = document.getElementById("home-hero");
            if (!element) return;

            const rect = element.getBoundingClientRect();
            const scrollableDistance = element.offsetHeight - window.innerHeight;

            const nextProgress =
                scrollableDistance > 0
                    ? Math.min(
                        1,
                        Math.max(0, -rect.top / scrollableDistance)
                    )
                    : 0;

            setProgress(nextProgress);
        };

        updateProgress();
        window.addEventListener("scroll", updateProgress, { passive: true });
        window.addEventListener("resize", updateProgress);

        return () => {
            window.removeEventListener("scroll", updateProgress);
            window.removeEventListener("resize", updateProgress);
        };
    }, []);

    // Crossfade from the first photo to the second.
    const secondOpacity = Math.min(
        1,
        Math.max(0, (progress - 0.45) / 0.4)
    );
    return (
        <section
            id="home-hero"
            className="relative h-[200vh] w-full bg-[#F8F7F3]"
        >
            <div className="sticky top-0 h-screen w-full">
                <div className="relative h-full w-full overflow-hidden">
                    {/* First image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url("${slides[0].image}")`,
                            opacity: 1 - secondOpacity,
                            transform: `scale(${1 + progress * 0.04})`,
                            transition: "opacity 150ms linear",
                        }}
                    />

                    {/* Second image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url("${slides[1].image}")`,
                            opacity: secondOpacity,
                            transform: `scale(${1 + progress * 0.04})`,
                            transition: "opacity 150ms linear",
                        }}
                    />

                    {/* Readability overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#17241d]/70 via-[#17241d]/35 to-transparent" />

                    {/* First headline */}
                    <div
                        className="absolute inset-0 z-10 flex items-center px-6 sm:px-12 lg:px-16"
                        style={{
                            opacity: 1 - secondOpacity,
                            transform: `translateY(${-secondOpacity * 25}px)`,
                            transition: "opacity 200ms linear, transform 200ms linear",
                            pointerEvents: secondOpacity > 0.95 ? "none" : "auto",
                        }}
                    >
                        <div className="max-w-2xl text-white">
                            <p className="mb-5 text-xs tracking-[0.35em] text-[#E0C1A3] sm:text-sm">
                                {slides[0].eyebrow}
                            </p>
                            <h1 className="font-serif text-5xl leading-[1.08] sm:text-6xl lg:text-7xl">
                                {slides[0].title[0]}
                                <br />
                                {slides[0].title[1]}
                            </h1>
                            <p className="mt-6 max-w-md text-sm leading-7 text-white/85 sm:text-base">
                                {slides[0].description}
                            </p>
                            <a
                                href="#projects"
                                className="mt-8 inline-flex items-center gap-5 bg-[#A77B51] px-6 py-4 text-xs uppercase tracking-[0.16em] transition hover:bg-[#8D6542]"
                            >
                                {slides[0].button} <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>

                    {/* Second headline */}
                    <div
                        className="absolute inset-0 z-10 flex items-center px-6 sm:px-12 lg:px-16"
                        style={{
                            opacity: secondOpacity,
                            transform: `translateY(${(1 - secondOpacity) * 25}px)`,
                            transition: "opacity 200ms linear, transform 200ms linear",
                            pointerEvents: secondOpacity < 0.05 ? "none" : "auto",
                        }}
                    >
                        <div className="max-w-2xl text-white">
                            <p className="mb-5 text-xs tracking-[0.35em] text-[#E0C1A3] sm:text-sm">
                                {slides[1].eyebrow}
                            </p>
                            <h2 className="font-serif text-5xl leading-[1.08] sm:text-6xl lg:text-7xl">
                                {slides[1].title[0]}
                                <br />
                                {slides[1].title[1]}
                            </h2>
                            <p className="mt-6 max-w-md text-sm leading-7 text-white/85 sm:text-base">
                                {slides[1].description}
                            </p>
                            <a
                                href="#projects"
                                className="mt-8 inline-flex items-center gap-5 bg-[#A77B51] px-6 py-4 text-xs uppercase tracking-[0.16em] transition hover:bg-[#8D6542]"
                            >
                                {slides[1].button} <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>

                    {/* Scroll progress indicator */}
                    <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white">
                        Scroll to explore
                        <div className="h-10 w-px overflow-hidden bg-white/40">
                            <div
                                className="w-full bg-white"
                                style={{ height: `${Math.max(12, progress * 100)}%` }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
