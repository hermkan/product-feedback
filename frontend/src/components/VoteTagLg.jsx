import React from 'react';
import ArrowUp from './ArrowUp';

function VoteTagLg() {
  return (
    <div className="w-w-vot-lg h-h-vot-lg rounded-10   bg-skin-tag-white font-bold flex items-center justify-center gap-2 hover:bg-skin-fill-purple-hover cursor-pointer vote-container active:bg-purple-200 transition-all duration-700">
      <span>
        <ArrowUp />
      </span>
      <span className="text-lg vote-number">52</span>
    </div>
  );
}

export default VoteTagLg;
