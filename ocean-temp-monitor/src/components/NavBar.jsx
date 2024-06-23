// src/components/NavBar.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './NavBar.css';
import { searchAI } from '../services/aiService';

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState('');

  const handleSearch = async () => {
    const result = await searchAI(searchQuery);
    setSearchResult(result);
  };

  return (
    <nav className="navbar">
      <div className="logo">Ocean Monitor</div>
      <input
        type="text"
        placeholder="Search with AI..."
        className="ai-search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {searchResult && <div className="search-result">{searchResult}</div>}
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/researchers">Researchers</a></li>
        <li><a href="/explore">Explore</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
