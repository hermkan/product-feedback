import React, { useState } from 'react';
import BoardHeader from './components/BoardHeader';
import DesignSystem from './components/DesignSystem';
import Feedback from './components/Feedback';
import Feedbacks from './components/Feedbacks';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Tag from './components/Tag';
import Tags from './components/Tags';
import Dashboard from './components/training/Dashboard';
import Flexbox from './components/training/Flexbox';
import Grid from './components/training/Grid';

function App() {
  return (
    <main className="theme-product-feedback">
      <Header />
      <Sidebar />
      <BoardHeader />
      <Feedbacks />
    </main>
  );
}

export default App;
