import React from "react";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-6 sm:p-20 gap-12">
      <main className="flex flex-col row-start-2 items-center sm:items-start text-center sm:text-left space-y-6">
        <h1 className="text-2xl sm:text-4xl text-blue-600 font-bold max-w-xl">
          Welcome! I am Danilo, your Software Developer
        </h1>
        <h2 className="text-lg sm:text-2xl font-bold max-w-xl">
          Let&apos;s get in touch and see what kind of Website or App you need.
        </h2>
      </main>
    </div>
  );
}
