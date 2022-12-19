import { useState, useEffect, useContext } from "react";
import "./RelatedMovies.css";
import { moviesContext } from "../../contexts/MovieContextProvider";

function RelatedMovies(props) {
  let [dirMovies, setDirMovies] = useState([]);
  //console.log(props.selectedMovie)
  let movies = useContext(moviesContext);

  useEffect(() => {
    let dirName = props.selectedMovie.crew?.split(",")[0];
    //console.log(dirName)
    let sameDirectorMovies = movies.filter(
      (movie) => movie.crew?.split(",")[0] == dirName
    );
    //console.log(dirMovies)
    setDirMovies(sameDirectorMovies);
  }, [props.selectedMovie.title]);

  return (
    <div>
      {/* title */}
      <p className="lead">
        Popular movies directed by{" "}
        <span className="text-info">
          {props.selectedMovie.crew?.split(",")[0]}
        </span>
      </p>
      {/* movies */}
      <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4">
        {dirMovies.map((movie) => (
          <div className="col " key={movie.id}>
            <div className="card h-100">
              <img src={movie.image} width="100%" alt="" className="image" />
              <div className="card-body">
                <h6 className="text-white-50">{movie.fullTitle}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedMovies;
