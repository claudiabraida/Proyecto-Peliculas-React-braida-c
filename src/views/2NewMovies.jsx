import useMovies from "../hooks/useMovies"
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { FavoriteContext } from "../context/FavoriteContext";

export default function NewMovies(id) {
  const {getNewMovies, movies} = useMovies()
  const navigate = useNavigate();
  const {toogleFavorite,existsInFavorites}  = useContext(FavoriteContext);

  useEffect(()=>{
    getNewMovies(id);

  },[])

  return <>
    <h1>ÚLTIMOS LANZAMIENTOS</h1>
    <div style={{display: "flex", flexWrap: "wrap", justifyContent : "space-around"}}>
    {
      movies.map(({id,poster_path,title, genres, original_title}) => <div key={id} id={id}>
        <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="" />
        <button onClick={()=> navigate(`/movie/${id}`)}>VER DETALLE</button>
        <button style={{border:"none",backgroundColor:"transparent"}} 
         onClick={()=> toogleFavorite({id, poster_path, title, genres, original_title}) + navigate(`/favorites-movies/${id}`)}>{existsInFavorites(id) ? "💙" :  "🤍"}</button>
        
        <p style={{width: "220px"}}>{title}</p>
      </div>)
    }
    </div>

    <button>siguiente</button>
    <button>anteriror</button>
  </>
}
