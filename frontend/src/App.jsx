import React, { useState } from 'react';
import DesignSystem from './components/DesignSystem';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Tag from './components/Tag';
import Tags from './components/Tags';
import Dashboard from './components/training/Dashboard';
import Flexbox from './components/training/Flexbox';
import Grid from './components/training/Grid';

function App() {
  return (
    <>
      <Header />
      <Sidebar />
    </>
  );
}

export default App;
