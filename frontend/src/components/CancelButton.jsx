import React from 'react';

function CancelButton() {
  return (
    <div className=" bg-skin-fill-navy-300 w-w-canc-btn  h-h-canc-btn rounded-10 flex justify-center items-center hover:bg-accent-slate-hover transition-all duration-700 cursor-pointer text-skin-base">
      <span className="text-skin-base">Cancel</span>
    </div>
  );
}

export default CancelButton;
