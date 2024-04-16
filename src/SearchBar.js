import React, { useState } from 'react';
import { motion } from 'framer-motion';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <motion.form 
    
      onSubmit={handleSubmit}
      className="my-4 search-bar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search Movies"
          value={query}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </div>
    </motion.form>
  );
}

export default SearchBar;
