import React, { useState } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

// api key and link
const API_URL = "https://www.omdbapi.com?apikey=e2e7aa58";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  // search for movies based on the input
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    // update the list
    setMovies(data.Search);
  };

  return (
    // class "app" is not used, but it is the main div
    <div className="app">
      <div className="header">
        <h1>FilmSearcher</h1>
        <div className="search">
          <input
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              searchMovies(e.target.value);
            }}
            placeholder="Write at least 3 characters"
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
      </div>
      {/* if search results are empty, display a text */}
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
