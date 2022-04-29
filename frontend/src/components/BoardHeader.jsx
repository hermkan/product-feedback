import React from 'react';
import AddFeedbackButton from './AddFeedbackButton';
import ArrowDown from './ArrowDown';
import BoardHeaderDropDown from './BoardHeaderDropDown';
import SuggIcon from './SuggIcon';

function BoardHeader() {
  return (
    <div className="theme-product-feedback bg-skin-fill-navy-300 text-skin-base w-w-board-header h-h-board-header mt-10 rounded-10 gap-2 px-4 grid grid-cols-3 items-center mb-10 ">
      <div className="flex gap-4">
        <SuggIcon />
        <span className="font-bold">6 Suggestions</span>
      </div>
      <div className="flex gap-2 items-center relative cursor-pointer">
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
      </div>
      <AddFeedbackButton />
    </div>
  );
}

export default BoardHeader;
