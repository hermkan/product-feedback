import React, { useState } from 'react';
import AddComments from './components/AddComments';
import BoardHeader from './components/BoardHeader';
import Comment from './components/Comment';
import CreateFeedbackForm from './components/CreateFeedbackForm';
import EditFeedBackForm from './components/EditFeedBackForm';
import Feedbacks from './components/Feedbacks';

import Header from './components/Header';
import Nofeedback from './components/Nofeedback';
import Roadmap from './components/Roadmap';
import Sidebar from './components/Sidebar';
import EmptySuggestions from './pages/EmptySuggestions';
import FeedbackDetail from './pages/FeedbackDetail';
import NewFeedback from './pages/NewFeedback';
import Suggestions from './pages/Suggestions';

function App() {
  return (
    <main className="theme-product-feedback flex justify-center items-center">
      {/* <NewFeedback /> */}
      <EditFeedBackForm />
      {/* <Suggestions /> */}
      {/* <EmptySuggestions /> */}
      {/* <FeedbackDetail /> */}
      {/* <NewFeedback /> */}
      {/* <Sidebar /> */}
      {/* <BoardHeader /> */}
      {/* <Feedbacks /> */}
      {/* <Nofeedback /> */}
      {/* <AddComments /> */}
      {/* <Comment /> */}
      {/* <CreateFeedbackForm /> */}
      {/* <EditFeedBackForm /> */}
      {/* <Roadmap /> */}
    </main>
  );
}

export default App;
