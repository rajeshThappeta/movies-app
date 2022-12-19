import { useContext } from "react";
import { moviesContext } from "../../contexts/MovieContextProvider";
import "./MoviesList.css";

import Movie from "../movie/Movie";

function MoviesList() {
  // console.log(process.env.REACT_APP_APIKEY);
  let movies = useContext(moviesContext);

  return (
    <div className="container">
      {movies === undefined ? (
        <p>Loading</p>
      ) : (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 ">
          {movies.map((movieObj) => (
            <Movie movieObj={movieObj} key={movieObj.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default MoviesList;
