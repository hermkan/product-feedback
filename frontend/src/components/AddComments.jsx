import React from 'react';
import CancelButton from './CancelButton';
import PostCommentsButton from './PostCommentsButton';

function AddComments() {
  return (
    <div className="w-w-cmts h-h-cmts bg-skin-fill mt-10 p-4 flex items-center justify-center">
      <div className="flex flex-col gap-4 justify-center">
        <div className="flex flex-col gap-4">
          {/* <span>Add comment</span> */}
          <label className="pl-2 text-skin-accent-navy font-bold text-2xl capitalize">
            Add comment
          </label>
          <textarea
            resize="none"
            placeHolder="Type your comment"
            className=" bg-com-slate-200 w-w-typ-cmts h-h-typ-cmts p-3"
          >
            Type your comment here
          </textarea>
        </div>
        <div className="flex justify-between items-center">
          <span className="pl-2 text-skin-accent-slate">
            250 Characters left
          </span>
          <span>
            <PostCommentsButton />
          </span>
        </div>
      </div>
    </div>
  );
}

export default AddComments;
