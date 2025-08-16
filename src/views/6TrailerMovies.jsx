import { useEffect } from "react";
import useMovies from "../hooks/useMovies";

export default function TrailerMovies() {

  const { getTrailersMovies, trailers } = useMovies();

  useEffect(()=>{
      getTrailersMovies();
  },[])
  
  
  if(!trailers || trailers.legth === 0) {
    return <h1>CARGANDO TRAILER</h1>
  }

  const trailerMovieOficial = trailers.find(trailer => trailer.type === "Trailer") 
  
  if(!trailerMovieOficial) {
   return <h1>no existe TRAILER</h1>

  }  

   return <>
    <h1>TRAILER</h1>
    <div>
      <iframe  src={`https://www.youtube.com/embed/${trailerMovieOficial.key}`}></iframe>
    </div>
  </>
}
