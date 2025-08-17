import useMovies from "../hooks/useMovies"
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { FavoriteContext } from "../context/FavoriteContext";

export default function NewMovies() {
  const {getNewMovies, movies, nextPage, prevPage, page} = useMovies()
  const navigate = useNavigate();
  const {toogleFavorite, existsInFavorites }  = useContext(FavoriteContext);

  useEffect(()=>{
    getNewMovies();
    
    
  },[page])

  return <>
    <h1>ÚLTIMOS LANZAMIENTOS</h1>
    <div style={{display: "flex", flexWrap: "wrap", justifyContent : "space-around"}}>
    {
        movies.length == 0 ? <h1 style={{color: "red"}}>LOADING</h1>
        : movies.map(({id,poster_path,title, genres, original_title}) =>
        <div key={id} id={id}>
          <button style={{border:"none",backgroundColor:"transparent"}} 
            onClick={()=> toogleFavorite({id, poster_path, title, genres, original_title}) 
            //  + navigate(`/favorites-movies/${id}`)
          }>{existsInFavorites(id) ? "💙" :  "🤍"}
          <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="" />
          </button>
        
        <p style={{width: "220px"}}>{title}</p>
        <button onClick={()=> navigate(`/movie/${id}`)}>VER DETALLE</button>
      </div>)
    }
    </div>

    <button  onClick={()=> prevPage(page)}>{page}anterior</button>
    <button  onClick={()=> nextPage(page)}>{page}siguiente</button>
    {/* <button  onClick={()=> nextpage(page)}>{page}siguiente</button> */}
  </>
}
