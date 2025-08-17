import useMovies from "../hooks/useMovies";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { FavoriteContext } from "../context/FavoriteContext";

export default function Popular() {
  const { getPopularMovies, movies, nextPage, prevPage, page } = useMovies();
  const { toogleFavorite, existsInFavorites }  = useContext(FavoriteContext);
  const navigate = useNavigate();

  useEffect(()=>{
    getPopularMovies();
  },[page])

   return <>
    <h1>POPULAR MOVIES</h1>
    <div style={{display: "flex", flexWrap: "wrap", justifyContent : "space-around"}}>
      {
        movies.length == 0 ? <h1 style={{color: "red"}}>LOADING</h1> 
        : movies.map(({id, poster_path, title, genres, original_title}) =>
        <div key={id} id={id}>
          <button style={{border:"none",backgroundColor:"transparent"}}
            onClick={()=> toogleFavorite({id, poster_path, title, genres, original_title})
          }>{existsInFavorites(id) ?  "💙" :  "🤍"}
          </button>

          <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="" />
          <p style={{width: "200px"}}>{title}</p> 
          <button  onClick={()=> navigate(`/movie/${id}`)}>DETALLE</button>
          
        </div>)
      }
     </div>

    <button onClick={()=> prevPage(page)}>{page}anterior</button>
    <button onClick={()=> nextPage(page)}>{page}siguiente</button>
  </>
}
