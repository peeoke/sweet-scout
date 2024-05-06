import React, { useState } from 'react';

function Search({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
        className="border border-gray-300 rounded-lg px-4 py-2"
      />
      <button type="submit" className="bg-blue-500 text-white rounded-lg px-4 py-2 ml-2">
        Search
      </button>
    </form>
  );
}

export default Search;
