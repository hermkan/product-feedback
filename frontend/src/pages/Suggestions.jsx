import React from 'react';
import BoardHeader from '../components/BoardHeader';
import Feedbacks from '../components/Feedbacks';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function Suggestions() {
  return (
    <div className="flex gap-8">
      <div className="flex flex-col gap-6">
        <Header />
        <Sidebar />
      </div>
      <div className="flex flex-col gap-6">
        <BoardHeader />
        <Feedbacks />
      </div>
    </div>
  );
}

export default Suggestions;
