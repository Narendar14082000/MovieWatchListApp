import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus, } from '@fortawesome/free-solid-svg-icons';
import '../styles/Sidebar.css';

const Sidebar = ({ applyFilters }) => {
  const [filters, setFilters] = useState({
    watched: false,
    unwatched: false,
    genres: '',
    releaseYear: ''
  });

  const handleFilterChange = () => {
    applyFilters(filters);
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Watchlists</h2>
      <nav className="sidebar-nav">
        <Link to="/" className="sidebar-link">
          <FontAwesomeIcon icon={faHome} className="sidebar-icon" /> Home
        </Link>
        <Link to="/add" className="sidebar-link">
          <FontAwesomeIcon icon={faPlus} className="sidebar-icon" /> Add Movie
        </Link>
      </nav>
      <div className="filter-section">
        <h3>Filters</h3>
        <hr/>
        <div className="sidebyside">
          <input
            type="checkbox"
            id="watched"
            checked={filters.watched}
            onChange={() => setFilters({ ...filters, watched: !filters.watched })}
          />
          <label htmlFor="watched">Watched</label>
        </div>
        <div className="sidebyside">
          <input
            type="checkbox"
            id="unwatched"
            checked={filters.unwatched}
            onChange={() => setFilters({ ...filters, unwatched: !filters.unwatched })}
          />
          <label htmlFor="unwatched">Unwatched</label>
        </div>
        <div>
          <label htmlFor="genres">Genres:</label>
          <input
            type="text"
            id="genres"
            value={filters.genres}
            onChange={(e) => setFilters({ ...filters, genres: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="releaseYear">Release Year:</label>
          <input
            type="text"
            id="releaseYear"
            value={filters.releaseYear}
            onChange={(e) => setFilters({ ...filters, releaseYear: e.target.value })}
          />
        </div>
        <button onClick={handleFilterChange}>Apply Filters</button>
      </div>
    </div>
  );
};

export default Sidebar;
