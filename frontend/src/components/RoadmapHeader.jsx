import React from 'react';
import AddFeedbackButton from './AddFeedbackButton';
import GoBackButton from './GoBackButton';

function RoadmapHeader() {
  return (
    <div className="bg-skin-fill-navy-300 text-skin-base w-w-header-rdmap h-h-header-rdmap rounded-10 mt-24 flex justify-between items-center px-8">
      <div className="flex flex-col">
        <GoBackButton />
        <h3 className="font-bold text-4xl px-1">Roadmap</h3>
      </div>
      {/* <div className="flex gap-4">
        <SuggIcon />
        <span className="font-bold">6 Suggestions</span>
      </div> */}
      {/* <div className="flex gap-2 items-center relative cursor-pointer">
        <span>
          <span className="text-sm font-normal">Sort by : </span>
          <span className="font-bold">Most upvotes</span>
        </span>
        <span>
          <ArrowDown />
        </span>
        <div className="absolute top-16">
          <BoardHeaderDropDown />
        </div>
      </div> */}
      <AddFeedbackButton />
    </div>
  );
}

export default RoadmapHeader;
