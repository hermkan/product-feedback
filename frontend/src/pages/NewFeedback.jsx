import React from 'react';
import CreateFeedbackForm from '../components/CreateFeedbackForm';
import GoBackButton from '../components/GoBackButton';

function NewFeedback() {
  return (
    <div className="flex gap-y-16 flex-col">
      <GoBackButton />
      <CreateFeedbackForm />
    </div>
  );
}

export default NewFeedback;
