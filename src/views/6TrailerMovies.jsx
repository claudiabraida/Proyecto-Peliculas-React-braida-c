import { useEffect } from "react";
import useMovies from "../hooks/useMovies";

export default function TrailerMovies() {

  const { getTrailersMovies, trailers } = useMovies();

  useEffect(()=>{
      getTrailersMovies();
  },[])
  
  const trailerMovieOficial = trailers.find(trailer => trailer.type === "Trailer") 

   return <>
    <h1>TRAILER</h1>
    <div >
      {
        !trailers || trailers.legth === 0 ? <h1>CARGANDO TRAILER</h1> : !trailerMovieOficial 
        ? <h1>no existe TRAILER</h1> : <iframe src={`https://www.youtube.com/embed/${trailerMovieOficial.key}` }/>
      }
      
    </div>
  </>
}
