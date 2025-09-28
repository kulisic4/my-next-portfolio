import React from "react";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <h1 className="text-4xl text-blue-600 font-bold">Welcome! I am Danilo, your Software Developer</h1>
        <h2 className="text-2xl font-bold pl-22">Let&apos;s get in touch and see what kind of Website or App you need.</h2>
      </main>
    </div>
  );
}