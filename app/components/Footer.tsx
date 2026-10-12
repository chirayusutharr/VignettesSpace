
"use client";

import { useState } from "react";
import { useEffect } from "react";

export default function Footer() {
    const [email, setEmail] = useState("");

    const [year, setYear] = useState<number | null>(null);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer
            id="contact"
            className="w-full overflow-hidden bg-[#293D32] text-[#F8F7F3]"
        >
            <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-14">
                {/* Top call to action */}
                <div className="flex flex-col justify-between gap-8 py-14 sm:py-20 md:flex-row md:items-center">
                    <h2 className="font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
                        Creating Spaces That Feel
                        <br />
                        <span className="italic text-[#D7C7B1]">
                            Beautiful, Personal & Timeless
                        </span>
                    </h2>

                    <div className="flex shrink-0 flex-col items-start gap-4 md:items-end">
                        <p className="text-sm text-[#D0CEC5]">
                            Thoughtfully designed. Made for living.
                        </p>

                        <a
                            href="mailto:hello@vignettes.com"
                            className="inline-flex items-center gap-4 rounded-full bg-[#F8F7F3] px-6 py-3 text-sm text-[#293D32] transition hover:bg-[#D7C7B1]"
                        >
                            Start a Conversation
                            <span aria-hidden="true">↗</span>
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/15" />

                {/* Footer information */}
                <div className="grid grid-cols-1 divide-y divide-white/15 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
                    {/* Contact */}
                    <div className="py-8 lg:pr-8">
                        <h3 className="mb-5 text-sm font-medium">Contact</h3>

                        <address className="space-y-4 text-sm not-italic leading-6 text-[#BDBDB3]">
                            <p>Interior design studio</p>
                            <a
                                href="mailto:hello@vignettes.com"
                                className="block transition hover:text-white"
                            >
                                hello@vignettes.com
                            </a>
                            <a
                                href="#contact"
                                className="block transition hover:text-white"
                            >
                                Get in touch →
                            </a>
                        </address>
                    </div>

                    {/* Services */}
                    <div className="py-8 lg:px-8">
                        <h3 className="mb-5 text-sm font-medium">Services</h3>

                        <ul className="space-y-3 text-sm text-[#BDBDB3]">
                            <li>
                                <a href="#projects" className="transition hover:text-white">
                                    Interior Design
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="transition hover:text-white">
                                    Space Planning
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="transition hover:text-white">
                                    Furniture Selection
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="transition hover:text-white">
                                    Styling & Décor
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="py-8 lg:px-8">
                        <h3 className="mb-5 text-sm font-medium">Company</h3>

                        <ul className="space-y-3 text-sm text-[#BDBDB3]">
                            <li>
                                <a href="#about" className="transition hover:text-white">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="transition hover:text-white">
                                    Our Projects
                                </a>
                            </li>
                            <li>
                                <a href="#journal" className="transition hover:text-white">
                                    Design Journal
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="transition hover:text-white">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="py-8 lg:pl-8">
                        <h3 className="mb-5 text-sm font-medium">The Vignettes Edit</h3>

                        <p className="mb-5 text-sm leading-6 text-[#BDBDB3]">
                            Occasional inspiration, thoughtful spaces, and ideas for
                            better living.
                        </p>

                        <form
                            onSubmit={(event) => {
                                event.preventDefault();
                                // Connect this form to your newsletter service to subscribe.
                            }}
                            className="flex items-center rounded-full border border-white/25 p-1"
                        >
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="Your email address"
                                aria-label="Your email address"
                                className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-[#999A90]"
                            />

                            <button
                                type="submit"
                                aria-label="Subscribe to newsletter"
                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F8F7F3] text-lg text-[#293D32] transition hover:bg-[#D7C7B1]"
                            >
                                →
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/15" />

                {/* Bottom brand area */}
                <div className="grid grid-cols-1 items-end gap-8 pt-8 sm:pt-10 md:grid-cols-[1.5fr_1fr]">
                    <a
                        href="#home"
                        aria-label="Vignettes home"
                        className="block overflow-hidden"
                    >
                        <span className="block origin-left font-medium uppercase  text-[6vw] leading-[0.8] tracking-[0.22em] text-[#F8F7F3] sm:text-[8vw] lg:text-[7vw]">
                            VIGNETTES
                        </span>
                    </a>

                    <div className="flex flex-col gap-6 pb-2 md:items-end">
                        <div>
                            <p className="mb-3 text-sm">Follow our work</p>
                            <div className="flex gap-3">
                                {[
                                    { name: "Instagram", href: "https://instagram.com/" },
                                    { name: "Pinterest", href: "https://pinterest.com/" },
                                ].map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="rounded-full border border-white/20 px-4 py-2 text-xs text-[#D0CEC5] transition hover:border-[#D7C7B1] hover:text-white"
                                    >
                                        {social.name}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <p className="text-xs text-[#999A90]">
                           © {year ?? "2026"} Vignettes. All rights reserved.
                        </p>
                    </div>
                </div>

                <div className="h-8 sm:h-10" />
            </div>
        </footer>
    );
}
