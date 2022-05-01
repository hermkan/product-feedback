import React from 'react';

function EditFeedBackButton() {
  return (
    <div className="justify-self-end bg-purple-200 w-w-btn h-h-btn rounded-10 flex justify-center items-center hover:bg-purple-200-hover transition-all duration-700">
      <div className="flex items-center gap-x-2 cursor-pointer">
        <span className="text-skin-base">Edit Feedback</span>
      </div>
    </div>
  );
}

export default EditFeedBackButton;
