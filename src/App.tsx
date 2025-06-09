import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import PreviewPage from './PreviewPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/preview" element={<PreviewPage />} />
      </Routes>
    </Router>
  );
}

export default App;
