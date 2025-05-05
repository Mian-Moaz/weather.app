import React, { useState } from 'react';
import cities from '../data/cities';
import '../styles/SearchBox.css';

export default function SearchBox({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      setQuery('');
    }
  };

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search city..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        list="city-options"
      />
      <datalist id="city-options">
        {cities.map((city, idx) => (
          <option key={idx} value={city} />
        ))}
      </datalist>
      <button type="submit">Search</button>
    </form>
  );
}
