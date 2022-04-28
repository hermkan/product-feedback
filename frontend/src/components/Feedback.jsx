import React from 'react';
import CommentIcon from './CommentIcon';
import Tag from './Tag';
import VoteTag from './VoteTag';

function Feedback() {
  return (
    <div className="bg-skin-fill w-w-feedback h-h-feedback rounded-10 flex items-center justify-center hover:cursor-pointer hover:shadow-xl transition-shadow duration-500">
      <div className="w-w-fb-cnt-cn h-h-fb-cnt-cn flex gap-10">
        <section className="self-start">
          <VoteTag />
        </section>

        <section className="flex flex-col h-32 gap-2">
          <h3 className="font-bold text-2xl text-skin-accent-navy">
            Add a dark Theme Option
          </h3>
          <p className="text-skin-accent-slate text-xl">
            It would help people with light sensitivities and who prefer dark
            mode.
          </p>
          <Tag name="Feature" />
        </section>

        <section className="ml-auto flex gap-2 items-center">
          <div>
            <CommentIcon />
          </div>
          <div className="text-skin-accent-navy font-bold">4</div>
        </section>
      </div>
    </div>
  );
}

export default Feedback;
