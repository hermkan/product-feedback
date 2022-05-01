import React from 'react';
import AddComments from '../components/AddComments';
import Comment from '../components/Comment';
import CommentTotal from '../components/CommentTotal';
import CommentTrail from '../components/CommentTrail';
import EditFeedBackButton from '../components/EditFeedBackButton';
import Feedback from '../components/Feedback';
import GoBackButton from '../components/GoBackButton';
import MainCommentTrail from '../components/MainCommentTrail';

function FeedbackDetail() {
  return (
    <div className="flex flex-col gap-9">
      <div className="flex justify-between w-w-comm-cont">
        <GoBackButton />
        <EditFeedBackButton />
      </div>
      <div className="flex flex-col gap-6 w-w-comm-cont">
        <div className="flex flex-col gap-6">
          <Feedback />
          <div className=" bg-skin-fill h-h-comm-cont pt-6 pb-12 px-8 rounded-10">
            <CommentTotal />
            <div className="flex flex-col divide-y-1 divide-opacity-25 mix-blend-normal divide-divide-color border-4">
              {/* <MainCommentTrail /> */}
              <Comment />
              <CommentTrail />
            </div>
          </div>
        </div>
        <AddComments />
      </div>
    </div>
  );
}

export default FeedbackDetail;
