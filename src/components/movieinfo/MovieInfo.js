import { useContext, useEffect, useState } from "react";
import "./MovieInfo.css";
import { useParams } from "react-router-dom";
import { moviesContext } from "../../contexts/MovieContextProvider";
import RelatedMovies from "../relatedmovies/RelatedMovies";

function MovieInfo() {
  let { title } = useParams();
  let [selectedMovie, setSelectedMovie] = useState({});
  let movies = useContext(moviesContext);

 // console.log(selectedMovie)
 // console.log(title)
  useEffect(() => {
    let movie = movies.find((movie) => movie.title === title);
    setSelectedMovie({ ...movie });
  }, [title]);
  return (
    <div className="container">
      <div className="row" style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",minHeight:"90vh"}}>
        <div className="col-sm-4" >
          <img src={selectedMovie.image} width="90%" alt="" className="image" />
        </div>
        <div className="col-sm-8 text-center" >
          <p className="display-4 fullTitle">{selectedMovie.fullTitle}</p>
          <p className="display-6 text-white-50">IMDB rating :<span className="imDbRating">{selectedMovie.imDbRating}</span> </p>
          <p className="display-6 year text-white-50">Year of release : {selectedMovie.year}</p>
          <p className="display-6 crew">Crew : {selectedMovie.crew}</p>
        </div>
      </div>
      {/* relavant movies */}
      <RelatedMovies selectedMovie={selectedMovie}/>
    </div>
  );
}

export default MovieInfo;
