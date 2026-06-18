import React from "react";

export default function Home() {
  return (
    <div className="font-sans bg-white text-black">
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-5xl w-full text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Danilo Kulišić
          </h1>

          <h2 className="mt-6 text-xl md:text-2xl text-gray-600 font-light">
            Pianist & Piano Professor
          </h2>

          <p className="mt-8 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Concert pianist and educator dedicated to helping students of all
            ages and levels develop confidence, artistry, and technical
            excellence — from adults rediscovering the piano and enthusiasts
            learning for personal enjoyment to advanced musicians preparing for
            conservatory auditions, ABRSM exams, competitions, and professional
            careers.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="#performances"
              className="px-8 py-3 border border-black hover:bg-black hover:text-white transition"
            >
              Listen & Watch
            </a>

            <a
              href="/lessons"
              className="px-8 py-3 bg-black text-white hover:opacity-80 transition"
            >
              Private Lessons
            </a>
          </div>
        </div>
      </section>

      {/* SHORT PROOF SECTION */}
      <section className="py-24 px-6 border-t border-gray-200">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-3xl font-bold">Performance</h3>
            <p className="mt-3 text-gray-600">
              Solo recitals and chamber music appearances.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">Teaching</h3>
            <p className="mt-3 text-gray-600">
              From beginners to advanced conservatory preparation.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">Focus</h3>
            <p className="mt-3 text-gray-600">
              Classical repertoire, interpretation, and technique.
            </p>
          </div>
        </div>
      </section>

      {/* PERFORMANCE PREVIEW */}
      <section id="performances" className="py-28 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Performances
          </h2>

          <p className="text-center text-gray-600 mt-4">
            Selected recordings and live performances
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="aspect-video bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="Performance 1"
                allowFullScreen
              />
            </div>

            <div className="aspect-video bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="Performance 2"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* TEACHING */}
      <section id="teaching" className="py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Piano Lessons</h2>

          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            I offer private piano lessons for all levels. My teaching is focused
            on building strong technical foundations, musical understanding, and
            preparing students for exams, auditions, and performances.
          </p>

          <div className="mt-10">
            <a
              href="/lessons"
              className="px-10 py-4 bg-black text-white hover:opacity-80 transition"
            >
              Book a Lesson
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 border-t border-gray-200 text-center">
        <h3 className="text-xl font-semibold">Contact</h3>
        <p className="text-gray-600 mt-2">Email: danilokulisic@gmail.com</p>
      </section>
    </div>
  );
}
