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
      movies.map(top => <div key={top.id} id={top.id}>
      <img src={`https://image.tmdb.org/t/p/w200/${top.poster_path}`} alt="" />
      <p>{top.title}</p>
      <button  onClick={()=> navigate(`/movie/${top.id}`)}>VER DETALLE</button>
      </div>)
    }
  </div>

  </>

}
