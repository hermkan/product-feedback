import React from 'react';

function Grid() {
  return (
    <main className="grid place-items-center min-h-screen">
      <div className="grid gap-4 p-4 bg-blue-900 max-w-5xl text-blue-200 xs: grid-cols-2 md:grid-cols-4">
        <h1 className=" xs: col-span-2 xs: grid xs: grid-cols-2 text-4xl  font-mono font-extrabold gap-4 md:col-span-3 md:grid-cols-3">
          <span className="md:col-span-2">Grid layout with tailwind css</span>
        </h1>
        <p className="xs: row-start-2 xs: col-start-2 xs: self-center md:col-start-1 md:col-span-2 md:pr-12 md:text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta aut
          pariatur, delectus mollitia magnam neque provident inventore. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Magnam, facere.
        </p>
        <div className="h-16 xs: h-auto xs: square bg-pink-300" />
        <div className="h-16 xs: h-auto xs: square bg-green-600" />
        <div className="h-16 xs: h-auto xs: square bg-pink-300" />
        <div className="h-16 xs: h-auto xs: square bg-red-400 md:col-start-2" />
        <div className="h-16 xs: h-auto xs: square bg-pink-300" />
        <div className="h-16 xs: h-auto xs: square bg-lime-600" />
        <div className="h-16 xs: h-auto xs: square bg-pink-300" />
        <div className="h-16 xs: h-auto xs: square bg-pink-300" />
        <p className="self-center md:text-lg md:col-span-2 md:text-center px-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum est quos
          aperiam enim. Doloremque qui laboriosam, maxime quis omnis aspernatur.
        </p>
      </div>
    </main>
  );
}

export default Grid;
