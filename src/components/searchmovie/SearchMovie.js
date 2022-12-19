import {useContext} from "react";
import { moviesContext } from "../../contexts/MovieContextProvider";
import "./SearchMovie.css";
import {useForm} from 'react-hook-form'
import {FaSearch} from 'react-icons/fa';
import { useNavigate } from "react-router-dom";


function SearchMovie() {

    let movies=useContext(moviesContext)
   // console.log(movies)
   let {register,handleSubmit,watch,reset}=useForm()
   let navigate=useNavigate()

   let submitMovieName=(movie)=>{
    //console.log(movie)
   // console.log(movies)
    let searchResult=movies.find(movieObj=>movieObj.title===movie.searchMovie)
   // console.log(searchResult)
   navigate(`movie-info/${searchResult.title}`)
   reset()
   }

  // console.log(watch("search-movie"))
  return (
    <div>
       
      <form  onSubmit={handleSubmit(submitMovieName)}>
       
        <input list="browsers" name="browser" id="browser" {...register("searchMovie")} placeholder="Search by movie name" className="input-search me-3"/>
        <datalist id="browsers">

            {
              movies!==undefined &&  movies.map(movie=><option value={movie.title} key={movie.id} />)
            }
          
         
        </datalist>
        <button type="submit" className="search-btn"><FaSearch className="text-white" /></button>
      </form>
    </div>
  );
}

export default SearchMovie;
