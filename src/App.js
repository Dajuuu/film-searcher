import { useEffect } from "react";

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
    <h1>
      Edit <code>src/App.js</code> and save to reload.
    </h1>
  );
}

export default App;
