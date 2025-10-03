import {CircularProgress} from "@mui/material";
/* ______________________________________________ */
import { useEffect } from "react";
/* ______________________________________________ */
import useMovies from "../hooks/useMovies";
/* ______________________________________________ */

export default function TrailerMovie() {

  const { getTrailersMovies, trailers } = useMovies();

  useEffect(()=>{
    getTrailersMovies();

  },[])
  
  const trailerMovieOficial = trailers.find(trailer => trailer.type === "Trailer") 

  return <>   
    {
      !trailers || trailers.legth === 0 ? <CircularProgress /> : !trailerMovieOficial 
      ? <CircularProgress />: 
      <iframe className="trailer" src={`https://www.youtube.com/embed/${trailerMovieOficial.key}` }/>
    }
  </>
}
