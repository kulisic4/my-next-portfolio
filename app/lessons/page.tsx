import React from "react";
import Image from "next/image";

const Lessons = () => {
  return (
    <div className="font-sans min-h-screen flex items-center justify-center px-6 py-20 bg-white">
      <main className="max-w-4xl w-full flex flex-col items-start">
        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold text-black">
          Private Piano Lessons
        </h1>

        <h2 className="mt-3 text-xl md:text-2xl text-gray-600 font-light">
          Study Piano with Danilo Kulišić
        </h2>

        {/* DIVIDER */}
        <div className="w-24 h-0.5 bg-black mt-6 mb-10"></div>

        {/* TEXT */}
        <p className="text-gray-800 text-lg md:text-xl leading-relaxed">
          I offer online piano lessons for students of all ages and levels, from
          complete beginners to advanced pianists. Whether you are preparing for
          auditions, competitions, examinations, or simply learning for personal
          enjoyment, lessons are tailored to your individual goals and musical
          interests.
        </p>

        {/* BUTTON */}
        <a
          href="https://www.bilin.academy/en/teachers/657b5b81f2c6f4612790a383"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-3 border border-black px-8 py-4 text-black font-medium transition-colors duration-300 hover:bg-black hover:text-white"
        >
          <Image
            src="/logo.webp"
            alt="Bilin Academy logo"
            width={26}
            height={26}
            className="h-5 w-auto"
          />
          Book a Lesson on Bilin Academy
        </a>

        <div className="mt-8">
          <p className="text-gray-800 text-lg md:text-xl leading-relaxed">
            My teaching combines
            <span className="font-semibold text-black">
              {" "}
              technical development, musical interpretation, and artistic
              confidence
            </span>
            , helping students build a solid foundation while developing their
            own unique musical voice.
          </p>

          <br />

          <p className="text-gray-800 text-lg md:text-xl leading-relaxed">
            I am also a piano professor at Bilin Academy, where students can
            enroll and schedule lessons directly through the academy platform.
          </p>
        </div>

        {/* HIGHLIGHTS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full">
          <div className="border border-gray-200 p-6">
            <h3 className="font-semibold text-black mb-2">
              All Levels Welcome
            </h3>
            <p className="text-gray-600 text-sm">
              Beginners, adult learners, and advanced pianists.
            </p>
          </div>

          <div className="border border-gray-200 p-6">
            <h3 className="font-semibold text-black mb-2">
              Personalized Approach
            </h3>
            <p className="text-gray-600 text-sm">
              Lessons tailored to your goals, repertoire, and learning style.
            </p>
          </div>

          <div className="border border-gray-200 p-6">
            <h3 className="font-semibold text-black mb-2">
              Professional Training
            </h3>
            <p className="text-gray-600 text-sm">
              Audition preparation, competitions, examinations, and artistic
              development.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Lessons;
