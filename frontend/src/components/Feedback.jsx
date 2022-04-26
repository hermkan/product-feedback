import React from 'react';
import Comments from './Comments';
import Tag from './Tag';
import VoteTag from './VoteTag';

function Feedback() {
  return (
    <div className="bg-skin-fill w-w-feedback h-h-feedback rounded-10 flex items-center justify-center">
      <div className="w-w-fb-cnt-cn h-h-fb-cnt-cn flex gap-10">
        <section className="self-start">
          <VoteTag />
        </section>

        <section className="flex flex-col gap-2">
          <h3 className="font-bold text-2xl text-skin-accent-navy">
            Add a dark Theme Option
          </h3>
          <p className="text-skin-accent-slate text-xl mb-3">
            It would help people with light sensitivities and who prefer dark
            mode.
          </p>
          <Tag name="Feature" />
        </section>

        <section className="ml-auto flex gap-2 items-center">
          <div>
            <Comments />
          </div>
          <div className="text-skin-accent-navy font-bold">4</div>
        </section>
      </div>
    </div>
  );
}

export default Feedback;
