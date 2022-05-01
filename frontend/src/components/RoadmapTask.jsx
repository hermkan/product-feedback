import React from 'react';
import { BsDot } from 'react-icons/bs';
import CommentIcon from './CommentIcon';
import Tag from './Tag';
import VoteTagLg from './VoteTagLg';

function RoadmapTask() {
  return (
    <div className=" h-h-rdmap-task w-w-rdmap-task bg-skin-fill rounded-10">
      <div className=" bg-accent-orange-100 h-2 rounded-t-10" />
      <div className="py-6 px-6 h-full">
        <div className="flex items-center">
          <div>
            <BsDot size={30} color="#F49F85" />
          </div>
          <div className="text-skin-accent-slate    text-xl">Planned</div>
        </div>
        <div className="mt-2 pl-3 flex flex-col gap-2">
          <div className="text-skin-accent-navy     text-2xl font-bold">
            More comprehensive reports
          </div>
          <div className="text-skin-accent-slate    text-xl">
            It would be great to see a more detailed breakdown of solutions.
          </div>
          <Tag name="Feature" />
          <div className="flex justify-between items-center mt-2">
            <div>
              <VoteTagLg />
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <CommentIcon />
              </div>
              <div className="text-skin-accent-navy font-bold">4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadmapTask;
