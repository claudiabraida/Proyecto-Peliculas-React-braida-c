import useMovies from "../hooks/useMovies";

import { useContext, useEffect } from "react";
import { FavoriteContext } from "../context/FavoriteContext";

import { useNavigate, useParams } from "react-router";
import Popular from "./3Popular";

export default function ListMovies(popular, top_rated) {
  const {getListMovies, movies} = useMovies();
  const {toogleFavorite, existsInFavorites} = useContext(FavoriteContext);
  const navigate = useNavigate();
  const {type} = useParams();


  useEffect(()=>{
    if(!type === "popular" &&  !type === "top_rated") {

      getListMovies( "popular")
      getListMovies("top_rated")
    }


  },[])

  return <>
    <div style={{display: "flex", flexDirection: "column", alignItems:"center", color: "whitesmoke"}}>
    <h2> OTRA VEZ</h2>
    {
      movies.map(({id, poster_path, title, original_title}) => <div key={id} id={id}>
      <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="" width={150} onClick={()=> navigate(`/movie/${id}`)} />
      <p>{title}</p>
      {/* <button  onClick={()=> navigate(`/movie/${id}`)}>VER DETALLE</button> */}

      <button style={{border:"none",backgroundColor:"transparent"}} 
        onClick={()=> toogleFavorite({id, poster_path, title, original_title}) 
        // + navigate(`/favorites-movies/${id}`)
        }>{existsInFavorites(id) ? "💙" :  "🤍"}
      </button>

      </div>)
    }
  </div>

  </>

}

