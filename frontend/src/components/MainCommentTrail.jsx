import React from 'react';
import Aligner from './Aligner';

function MainCommentTrail() {
  return (
    <div className="flex gap-5">
      <div className="photo flex items-center col-start-1 pt-4 flex-col gap-6 h-96">
        <div className="w-w-photo h-h-photo rounded-full  ">
          <img
            className="rounded-full"
            src="/assets/user-images/image-zena.jpg"
            alt="profile"
          />
        </div>
        <Aligner />
      </div>
      <div className="pt-4 w-full flex flex-col gap-5">
        <div className="flex justify-between pr-8">
          <div className="w-full">
            <div className="text-skin-accent-navy font-bold text-sm">
              Elijah Moss
            </div>
            <div className="text-skin-accent-slate">@hexagon.bestagon</div>
          </div>
          <div className=" text-skin-accent-purple-50   text-sm font-semibold flex">
            Reply
          </div>
        </div>
        <div className="comment text-skin-accent-slate">
          Also, please allow styles to be applied based on system preferences. I
          would love to be able to browse Frontend Mentor in the evening after
          my device’s dark mode turns on without the bright background it
          currently has.
        </div>
      </div>
    </div>
  );
}

export default MainCommentTrail;
