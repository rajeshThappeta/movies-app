import { createContext, useState, useEffect } from "react";
import axios from "axios";

//create context object
export const moviesContext = createContext();

//create Context provider
function MovieContextProvider({ children }) {
  let [movies, setMovies] = useState({});

  //make api call
  useEffect(() => {
    axios
      .get(
        `https://imdb-api.com/en/API/Top250Movies/${process.env.REACT_APP_APIKEY}`
      )
      .then((res) => {
        if (res.status == 200) {
          setMovies(res.data);
        } else {
          throw new Error("Network issue..");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <moviesContext.Provider value={movies?.items}>{children}</moviesContext.Provider>
  );
}

export default MovieContextProvider;
