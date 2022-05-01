import React from 'react';

function Comment() {
  return (
    <div className="grid grid-cols-8 grid-rows-2 bg-skin-fill border-4">
      <div className="photo flex justify-center col-start-1 pt-4">
        <div className="w-w-photo h-h-photo rounded-full ">
          <img
            className="rounded-full"
            src="/assets/user-images/image-zena.jpg"
            alt="profile"
          />
        </div>
      </div>
      <div className="flex justify-between col-start-2 col-span-full pr-8 pt-4">
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

      <div className="comment col-start-2 row-start-2  col-span-full text-skin-accent-slate pb-4">
        Also, please allow styles to be applied based on system preferences. I
        would love to be able to browse Frontend Mentor in the evening after my
        device’s dark mode turns on without the bright background it currently
        has.
      </div>
    </div>
  );
}

export default Comment;
