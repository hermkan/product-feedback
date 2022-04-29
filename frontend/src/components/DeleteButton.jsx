import React from 'react';

function DeleteButton() {
  return (
    <div className=" w-w-canc-btn  h-h-canc-btn rounded-10 bg-accent-orange flex justify-center items-center hover:bg-accent-orange-hover transition-all duration-700 cursor-pointer text-skin-base">
      <span className="text-skin-base">Delete</span>
    </div>
  );
}

export default DeleteButton;
