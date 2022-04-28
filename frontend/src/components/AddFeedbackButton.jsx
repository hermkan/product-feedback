import React from 'react';
import PlusIcon from './PlusIcon';

function AddFeedbackButton() {
  return (
    <div className="justify-self-end bg-skin-fill-purple-100 w-w-btn h-h-btn rounded-10 flex justify-center items-center hover:bg-purple-100-hover transition-all duration-700">
      <div className="flex items-center gap-x-2 cursor-pointer">
        <span className="flex items-end justify-center">
          <PlusIcon />
        </span>
        <span className="text-skin-base">Add Feedback</span>
      </div>
    </div>
  );
}

export default AddFeedbackButton;
