import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import useMovies from "../hooks/useMovies";
import { FavoriteContext } from "../context/FavoriteContext";

export default function ListPopularMovies() {
  const {getPopularMovies, movies} = useMovies()
  const {toogleFavorite, existsInFavorites}  = useContext(FavoriteContext);
  const navigate = useNavigate();

  useEffect(()=>{
    getPopularMovies();
    
  },[]);
 
  return <>
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "black", color: "whitesmoke"}}>
    <h2>POPULAR MOVIES</h2>
      {
        movies.length == 0 ? <h1 style={{color: "red"}}>LOADING</h1> 
        : movies.map(({id, poster_path, title, genres, original_title }) => 
        <div key={id}>
          <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="" />
          <p>{title}</p> 
          <button onClick={()=> navigate(`/movie/${id}`)}>VER DETALLE</button>

          <button style={{border:"none",backgroundColor:"transparent"}} 
            onClick={()=> toogleFavorite({id, poster_path, title, genres, original_title}) 
            // + navigate(`/favorites-movies/${id}`)
            }>{existsInFavorites(id) ? "💙" :  "🤍"}
          </button>
        </div>)
      }
    </div>

  </>
}
