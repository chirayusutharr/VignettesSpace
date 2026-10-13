
"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-[#F8F7F3] text-[#293D32]">
        <Navbar />

      {/* Contact content */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12">
        <div className="grid grid-cols-1 gap-12 border-t border-[#DCDAD1] pt-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16 lg:gap-24">
          {/* Left: contact details */}
          <aside className="flex flex-col justify-between gap-12">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.2em] text-[#A77B51]">
                Start a conversation
              </p>

              <h2 className="max-w-sm font-serif text-3xl leading-snug sm:text-4xl">
                Good spaces begin with good questions.
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-[#62675E]">
                Planning a home refresh, a new interior, or looking
                for a particular piece? We would like to hear about it.
              </p>
            </div>

            <div className="space-y-7">
              

              <div className="border-t border-[#DCDAD1] pt-5">
                <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[#62675E]">
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/916367816145"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base transition-colors hover:text-[#A77B51] sm:text-lg"
                >
                  Start a conversation ↗
                </a>
              </div>

              <div className="border-t border-[#DCDAD1] pt-5">
                <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[#62675E]">
                  Our approach
                </p>
                <p className="max-w-sm text-sm leading-7 text-[#62675E]">
                  Thoughtful details. Considered materials.
                  Spaces made to feel personal.
                </p>
              </div>
            </div>
          </aside>

          {/* Right: contact form */}
          <div className="bg-[#E9ECE5] p-6 sm:p-9 lg:p-12">
            {submitted ? (
              <div
                className="flex min-h-[420px] flex-col items-start justify-center"
                role="status"
              >
                <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#A77B51]">
                  Thank you
                </p>
                <h2 className="font-serif text-4xl">
                  Your message is ready for us.
                </h2>
                <p className="mt-5 max-w-md text-sm leading-7 text-[#62675E]">
                  This demo form does not send messages yet.
                  Please contact us directly by email or WhatsApp.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 border-b border-[#293D32] pb-1 text-sm"
                >
                  Back to the form
                </button>
              </div>
            ) : (
              <>
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#A77B51]">
                  Tell us a little more
                </p>

                <h2 className="font-serif text-3xl sm:text-4xl">
                  Let’s talk about your project.
                </h2>

                <p className="mb-9 mt-4 text-sm leading-7 text-[#62675E]">
                  Share a few details below. We’ll take it from there.
                </p>

                <form
                  className="space-y-7"
                  onSubmit={(event) => {
                    event.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm"
                      >
                        Your name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        placeholder="Full name"
                        className="w-full border-b border-[#B9BDB3] bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-[#888C83] focus:border-[#293D32]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm"
                      >
                        Email address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="you@example.com"
                        className="w-full border-b border-[#B9BDB3] bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-[#888C83] focus:border-[#293D32]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="project"
                      className="mb-2 block text-sm"
                    >
                      What are you looking for? *
                    </label>
                    <select
                      id="project"
                      name="project"
                      required
                      defaultValue=""
                      className="w-full appearance-none border-b border-[#B9BDB3] bg-transparent px-0 py-3 text-sm outline-none focus:border-[#293D32]"
                    >
                      <option value="" disabled>
                        Choose a project type
                      </option>
                      <option value="residential">
                        Residential interiors
                      </option>
                      <option value="commercial">
                        Commercial interiors
                      </option>
                      <option value="styling">
                        Interior styling
                      </option>
                      <option value="product">
                        Product enquiry
                      </option>
                      <option value="other">Something else</option>
                    </select>
                  </div>

                  
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm"
                    >
                      Tell us about your idea *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="What would you love to create?"
                      className="w-full resize-y border-b border-[#B9BDB3] bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-[#888C83] focus:border-[#293D32]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-between bg-[#293D32] px-6 py-4 text-sm text-white transition-colors hover:bg-[#3B5547] sm:w-auto sm:min-w-56"
                  >
                    <span>Send an enquiry</span>
                    <span className="transition-transform group-hover:translate-x-1">
                      ↗
                    </span>
                  </button>

                  <p className="text-xs leading-6 text-[#62675E]">
                    By submitting, you agree that we may use your
                    details to respond to your enquiry.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
