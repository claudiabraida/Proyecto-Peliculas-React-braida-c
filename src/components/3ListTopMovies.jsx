import { useEffect } from "react";
import { useNavigate } from "react-router";
import useMovies from "../hooks/useMovies";

export default function TopMovies(id) {
  const {getTopMovies, movies} = useMovies()
  const navigate = useNavigate();

  useEffect(()=>{
    getTopMovies(id);

  },[id])

  return <>
    <div style={{display: "flex", flexDirection: "column"}}>
    <h2> TOP MOVIES</h2>
    {
      movies.map(topMovie => <div key={topMovie.id} id={topMovie.id}>
      <img src={`https://image.tmdb.org/t/p/w200/${topMovie.poster_path}`} alt="" />
      <p>{topMovie.title}</p>
      <button  onClick={()=> navigate(`/movie/${topMovie.id}`)}>VER DETALLE</button>
      </div>)
    }
  </div>

  </>

}
