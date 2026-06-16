import React from "react";

const Editions = () => {
  return (
    <div className="font-sans bg-white text-black">

      {/* HERO / INTRO */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-5xl w-full text-center">

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Editions
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Curated collections of rediscovered piano works from the 20th century.
            Many of these compositions existed only in manuscript form or were never formally published.
          </p>

          <p className="mt-6 text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Each edition preserves the original musical material with editorial clarity,
            prepared for modern performance and study.
          </p>

        </div>
      </section>

      {/* EDITION CONTENT */}
      <section className="py-28 px-6 border-t border-gray-200">
        <div className="max-w-5xl mx-auto flex flex-col gap-20">

          {/* EDITION 01 */}
          <div className="flex flex-col gap-10">

            <div className="w-full max-w-4xl mx-auto">
  <div className="h-[60vh] overflow-hidden">
    <img
      src="/edition-01.jpg"
      alt="Edition 01"
      className="w-full h-full object-contain"
    />
  </div>
</div>

            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold">
                Edition 01 — Forgotten Miniatures
              </h2>

              <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
                A collection of overlooked piano miniatures from the early 20th century,
                restored from archival manuscripts.
              </p>

              <p className="mt-6 text-gray-700">
                <a
                  href="https://YOUR-GUMROAD-LINK.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:opacity-60 transition"
                >
                  Available on Gumroad
                </a>
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Editions;