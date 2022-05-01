import React from 'react';
import BoardHeader from '../components/BoardHeader';
import Feedbacks from '../components/Feedbacks';
import Header from '../components/Header';
import Nofeedback from '../components/Nofeedback';
import Sidebar from '../components/Sidebar';

function EmptySuggestions() {
  return (
    <div className="flex gap-8">
      <div className="flex flex-col gap-6">
        <Header />
        <Sidebar />
      </div>
      <div className="flex flex-col gap-6">
        <BoardHeader />
        <Nofeedback />
      </div>
    </div>
  );
}

export default EmptySuggestions;
