import React from "react";
import "./Movie.css";
import { AiFillEye } from "react-icons/ai";
import { Link, Outlet, useNavigate } from "react-router-dom";

function Movie({ movieObj }) {
  let navigate = useNavigate();

  let getMovieInfo = (movieName) => {
    console.log("called",movieName);
    navigate(`/movie-info/${movieName}`);
  };

  return (
    <div className="col g-4">
      <div className="card h-100 text-center">
        <img src={movieObj.image} className="w-100" alt="" />
        <div className="card-body">
          <div className="movie-title">
            <a
             
              onClick={() => getMovieInfo(movieObj.title)}
            >
              {movieObj.fullTitle}
            </a>
          </div>

          <p className="imdbRating ">{movieObj.imdbRating}</p>
          {/* <div className="btn watch-list-btn" title="Add to watch list">
            <AiFillEye className="watch-list-con" />
          </div> */}
        </div>
      </div>

    
    </div>
  );
}

export default Movie;
