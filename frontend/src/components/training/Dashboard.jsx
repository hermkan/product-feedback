import React from 'react';

function Dashboard() {
  return (
    <main className="flex items-center bg-blue-300 min-h-screen">
      <div className=" flex-1 max-w-5xl mx-auto py-10 min-h-screen">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-8 sm:grid-rows-6 sm:gap-8 grid-flow-row min-h-screen">
          <div className="bg-red-300 rounded-lg shadow-xl  flex items-center justify-center font-mono text-lg font-extrabold sm:col-span-2 sm:row-span-3">
            <div className="h-24">col1</div>
          </div>
          <div className="bg-teal-500 rounded-lg shadow-xl   flex items-center justify-center font-mono text-lg font-extrabold sm:col-span-6 sm:row-span-5">
            <div className="h-24">col2</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
