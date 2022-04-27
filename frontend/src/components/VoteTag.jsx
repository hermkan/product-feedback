import React from 'react';
import ArrowUp from './ArrowUp';

function VoteTag() {
  return (
    <div className="w-w-ind h-h-ind rounded-10 bg    bg-skin-tag-white font-bold flex flex-col items-center justify-center gap-2 hover:bg-skin-fill-purple-hover cursor-pointer vote-container active:bg-purple-200 transition-all duration-700">
      <span>
        <ArrowUp />
      </span>
      <span className="text-lg vote-number">52</span>
    </div>
  );
}

export default VoteTag;
