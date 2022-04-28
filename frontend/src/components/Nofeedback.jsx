import React from 'react';
import AddFeedbackButton from './AddFeedbackButton';
import NoFeedbackIcon from './NoFeedbackIcon';

function Nofeedback() {
  return (
    <div className="mt-10 grid grid-rows-2 bg-skin-fill w-w-no-fdb h-h-no-fdb justify-center">
      <div className="flex justify-center items-center">
        <NoFeedbackIcon />
      </div>
      <div className="flex flex-col items-center justify-between">
        <h2 className="text-skin-accent-navy text-4xl font-bold">
          There is no feedback yet.
        </h2>
        <p className="text-xl text-skin-accent-slate font-normal">
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>
        <AddFeedbackButton />
      </div>
    </div>
  );
}

export default Nofeedback;
