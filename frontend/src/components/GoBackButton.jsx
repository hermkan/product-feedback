import React from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';

function GoBackButton() {
  return (
    <button
      type="button"
      className="rounded-md flex items-center justify-center gap-x-2 w-fit h-fit"
    >
      <MdKeyboardArrowLeft className=" text-purple-200" />
      <span className="text-text-slate-button">Go back</span>
    </button>
  );
}

export default GoBackButton;
