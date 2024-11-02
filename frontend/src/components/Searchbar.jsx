import { FaBriefcase, FaMapMarkerAlt, FaFilter } from "react-icons/fa";
import "./SearchBar.css";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [jobType, setJobType] = useState("All");
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    onSearch({ title, location, jobType });
  };

  /*
  <div className={styles.suggestion}>
        {value
          ? items
              .filter((itm) =>
                itm.name.toLowerCase().startsWith(value.toLowerCase())
              )
              .slice(0, 7)
              .map((itm) => (
                <div
                  key={itm.id}
                  className={styles.suggestionItem}
                  onClick={handleItemClick}
                >
                  {itm.name}
                </div>
              ))
          : null}
      </div> */
  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <FaBriefcase className="icon" />
        <input
          type="text"
          placeholder="Search job titles..."
          className="search-input"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
      </div>
      <div className="search-bar">
        <FaMapMarkerAlt className="icon" />
        <input
          type="text"
          placeholder="Location..."
          className="search-input"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="filter">
        <FaFilter className="icon" />
        <select value={jobType} onChange={(e) => setJobType(e.target.value)}>
          <option value="all">All</option>
          <option value="Full-Time">Full-time</option>
          <option value="Part-Time">Part-time</option>
        </select>
      </div>

      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
