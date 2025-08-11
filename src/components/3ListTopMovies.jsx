import useMovies from "../hooks/useMovies";

import { useContext, useEffect } from "react";
import { FavoriteContext } from "../context/FavoriteContext";

import { useNavigate } from "react-router";

export default function TopMovies(id) {
  const {getTopMovies, movies} = useMovies();
  const {toogleFavorite, existsInFavorites} = useContext(FavoriteContext);
  const navigate = useNavigate();

  useEffect(()=>{
    getTopMovies(id);

  },[id])

  return <>
    <div style={{display: "flex", flexDirection: "column"}}>
    <h2> TOP MOVIES</h2>
    {
      movies.map(({id,poster_path,title, genres, original_title}) => <div key={id} id={id}>
      <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="" />
      <p>{title}</p>
      <button  onClick={()=> navigate(`/movie/${id}`)}>VER DETALLE</button>

      <button style={{border:"none",backgroundColor:"transparent"}} 
        onClick={()=> toogleFavorite({id, poster_path, title, genres, original_title}) 
        + navigate(`/favorites-movies/${id}`)}>{existsInFavorites(id) ? "💙" :  "🤍"}
      </button>

      </div>)
    }
  </div>

  </>

}
