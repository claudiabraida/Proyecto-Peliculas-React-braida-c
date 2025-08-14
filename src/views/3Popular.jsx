import useMovies from "../hooks/useMovies";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { FavoriteContext } from "../context/FavoriteContext";

export default function Popular(id) {
  const { getPopularMovies, movies } = useMovies();
  const { toogleFavorite, existsInFavorites }  = useContext(FavoriteContext);
  const navigate = useNavigate();

  useEffect(()=>{
    getPopularMovies(id);
  },[])

   return <>
    <h1>POPULAR MOVIES</h1>
    <div style={{display: "flex", flexWrap: "wrap", justifyContent : "space-around"}}>
      {
        movies.length == 0 ? <h1 style={{color: "red"}}>LOADING</h1> 
        : movies.map(({id, poster_path, title, genres, original_title}) =>
        <div key={id} id={id}>
          <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="" />
          <p style={{width: "200px"}}>{title}</p> 
          
          <button  onClick={()=> navigate(`/movie/${id}`)}>DETALLE</button>
          <button style={{border:"none",backgroundColor:"transparent"}} onClick={()=> toogleFavorite({id, poster_path, title, genres, original_title})}>
          {existsInFavorites(id) ?  "💙" :  "🤍"}</button>
        </div>)
      }
     </div>

    <button>siguiente</button>
    <button>anteriror</button>
  </>
}
