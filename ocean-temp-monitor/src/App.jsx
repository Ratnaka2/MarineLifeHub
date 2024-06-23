// src/App.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ResearchersPage from './pages/ResearchersPage'; // Create this component
import ExplorePage from './pages/ExplorePage'; // Create this component
import './styles/App.css'; // Import the app styles

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/researchers" element={<ResearchersPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <NavBar/>
            <Route path="/" element={<HomePage />} />
  </Routes>
    </div>
  );
};

export default App;
