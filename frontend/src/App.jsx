import React, { useState } from 'react';
import AddComments from './components/AddComments';
import BoardHeader from './components/BoardHeader';
import Comment from './components/Comment';
import CreateFeedbackForm from './components/CreateFeedbackForm';
import Feedbacks from './components/Feedbacks';
import Header from './components/Header';
import Nofeedback from './components/Nofeedback';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <main className="theme-product-feedback">
      <Header />
      <Sidebar />
      <BoardHeader />
      <Feedbacks />
      <Nofeedback />
      <AddComments />
      <Comment />
      <CreateFeedbackForm />
    </main>
  );
}

export default App;
