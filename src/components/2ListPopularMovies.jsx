import { useEffect } from "react";
import { useNavigate } from "react-router";
import useMovies from "../hooks/useMovies";

export default function ListPopularMovies(id) {
  const {getPopularMovies, movies} = useMovies()
  const navigate = useNavigate();

  useEffect(()=>{
    getPopularMovies(id);

  },[id]);
 

  return <>
    <div style={{display: "flex", flexDirection: "column"}}>
    <h2>POPULAR MOVIES</h2>
      {
        movies.map(popular => <div key={popular.id}>
          <img src={`https://image.tmdb.org/t/p/w200/${popular.poster_path}`} alt="" />
          <p>{popular.title}</p> 
          <button onClick={()=> navigate(`/movie/${popular.id}`)}>VER DETALLE</button>
          <p>{popular.site}</p>
        </div>)
      }
    </div>

  </>
}
