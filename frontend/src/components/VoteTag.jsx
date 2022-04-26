import React from 'react';
import ArrowUp from './ArrowUp';

function VoteTag() {
  return (
    <div className="w-w-ind h-h-ind rounded-10 bg    bg-skin-tag-white font-bold flex flex-col items-center justify-center gap-2">
      <span>
        <ArrowUp />
      </span>
      <span>99</span>
    </div>
  );
}

export default VoteTag;
