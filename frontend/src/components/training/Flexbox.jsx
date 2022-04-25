import React from 'react';

function Flexbox() {
  return (
    <div className="card max-w-3xl p-2 md:flex flex-row ">
      <img className="object-cover md:w-1/3" src="/img/hi-tech.jpeg" alt="" />
      <div className="content-container md:w-2/3">
        <div className="text bg-sky-900 p-4">
          <h2 className="text-sky-200 text-lg font-mono  font-bold">
            7 tips and tricks that you need to know
          </h2>
          <p className="mt-4 text-sky-400 font-mono leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            est totam ea blanditiis incidunt autem, repellendus, voluptatum
            quidem iure enim, quis facere! Quis assumenda optio, adipisci iste
            nobis alias! Totam.
          </p>
          <div className="card-footer font-mono mt-2 flex justify-between items-center  text-gray-400">
            <p className="time opacity-50">
              <span>15 </span> minutes read
            </p>
            <button
              type="button"
              className="readmore bg-sky-700 px-8 py-1 rounded-lg cursor-pointer hover:bg-teal-600 text-blue-200 ease-in-out duration-300
                hover:scale-105
              "
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flexbox;
