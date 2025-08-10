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
        movies.map(({id,poster_path,title,site}) => <div key={id}>
          <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="" />
          <p>{title}</p> 
          <button onClick={()=> navigate(`/movie/${id}`)}>VER DETALLE</button>
          <p>{site}</p>
        </div>)
      }
    </div>

  </>
}
