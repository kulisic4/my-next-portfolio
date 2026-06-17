import React from "react";

const About = () => {
  return (
    <div className="font-sans min-h-screen flex items-center justify-center px-6 py-20 bg-white">
      <main className="max-w-4xl w-full flex flex-col items-start">
        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold text-black">
          Danilo Kulišić
        </h1>

        <h2 className="mt-3 text-xl md:text-2xl text-gray-600 font-light">
          Pianist & Piano Professor
        </h2>

        {/* DIVIDER */}
        <div className="w-24 h-0.5 bg-black mt-6 mb-10"></div>

        {/* TEXT */}
        <p className="text-gray-800 text-lg md:text-xl leading-relaxed">
          I am a concert pianist and piano professor with experience in solo
          performance, chamber music, and pedagogy. My work is dedicated to
          helping students of all ages and levels develop technical excellence,
          musical understanding, and artistic confidence—from adults
          rediscovering the piano and enthusiasts learning for personal
          enjoyment to advanced musicians preparing for
          <span className="font-semibold text-black">
            {" "}
            conservatory auditions, competitions, and professional careers
          </span>
          .
        </p>

        <br />

        <p className="text-gray-800 text-lg md:text-xl leading-relaxed">
          Alongside my performing career, I work with students ranging from
          complete beginners to accomplished pianists. My teaching approach
          combines
          <span className="font-semibold text-black">
            {" "}
            technical discipline, musical interpretation, and artistic
            independence
          </span>
          .
        </p>

        {/* HIGHLIGHTS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full">
          <div className="border border-gray-200 p-6">
            <h3 className="font-semibold text-black mb-2">Performance</h3>
            <p className="text-gray-600 text-sm">
              Solo recitals, chamber music, and concert appearances.
            </p>
          </div>

          <div className="border border-gray-200 p-6">
            <h3 className="font-semibold text-black mb-2">Teaching</h3>
            <p className="text-gray-600 text-sm">
              Individual piano training for all levels with focus on results.
            </p>
          </div>

          <div className="border border-gray-200 p-6">
            <h3 className="font-semibold text-black mb-2">Focus</h3>
            <p className="text-gray-600 text-sm">
              Classical repertoire, interpretation, and audition preparation.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
