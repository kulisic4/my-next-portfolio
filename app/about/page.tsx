import React from 'react'

const about = () => {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col row-start-2 items-center sm:items-start">
          <h1 className="text-4xl font-bold text-blue-600">About Danilo</h1>
          <div>
            <p>
              Danilo is Frontend Developer...
            </p>
          </div>
        </main>
    </div>
  )
}

export default about