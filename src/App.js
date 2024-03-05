import { useEffect } from "react";
import "./App.css";
const API_KEY = "http://www.omdbapi.com/?i=tt3896198&apikey=e2e7aa58";

function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_KEY}&s=${title}`);
    const data = await response.json();

    console.log(data);
  };

  useEffect(() => {
    searchMovies("Superman");
  }, []);
  return (
    <div className="search">
      <h1>Movies</h1>

      <div className="search">
        <input
          placeholder="Search for a movie"
          value="Superman"
          onChange={() => {}}
        ></input>
      </div>
    </div>
  );
}

export default App;
