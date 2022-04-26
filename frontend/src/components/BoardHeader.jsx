import React from 'react';
import ArrowDown from './ArrowDown';
import PlusIcon from './PlusIcon';
import SuggIcon from './SuggIcon';

function BoardHeader() {
  return (
    <div className="theme-product-feedback bg-skin-fill-navy-300 text-skin-base w-w-board-header h-h-board-header mt-10 rounded-10 gap-2 px-4 grid grid-cols-3 items-center mb-10 ">
      <div className="flex gap-4">
        <SuggIcon />
        <span className="font-bold">6 Suggestions</span>
      </div>
      <div className="flex gap-2 items-center">
        <span>
          <span className="text-sm font-normal">Sort by : </span>
          <span className="font-bold">Most upvotes</span>
        </span>
        <span>
          <ArrowDown />
        </span>
      </div>
      <div className="justify-self-end bg-skin-fill-purple-100 w-w-btn h-h-btn rounded-10 flex justify-center items-center">
        <div className="flex items-center gap-x-2">
          <span className="flex items-end justify-center">
            <PlusIcon />
          </span>
          <span>Add Feedback</span>
        </div>
      </div>
    </div>
  );
}

export default BoardHeader;
