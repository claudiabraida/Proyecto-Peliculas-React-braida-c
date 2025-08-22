import useMovies from "../hooks/useMovies"
import { useContext, useEffect } from "react";
import { FavoriteContext } from "../context/FavoriteContext";
import { useNavigate } from "react-router";
import dayjs from "dayjs";

export default function Search() {
  const { searchTitleMovie, getSearchMovies, movies } = useMovies();
  const { toogleFavorite, existsInFavorites } = useContext(FavoriteContext);
  const navigate = useNavigate();
  
  useEffect(()=>{
    // getSearchMovies()
  },[])

  return <>
    <h1>SEARCH</h1>
    <label>buscar</label>
    <input onInput={(e)=> searchTitleMovie(e.target.value)} type="text" />
    <div style={{display: "flex", flexWrap: "wrap", justifyContent : "space-around"}}>
      {
        movies.length == 0 ? <h1 style={{color: "red"}}>busca tu película</h1> 
        : movies.map(({id, poster_path, title, original_title, release_date}) => 
        <div style={{display: "flex", flexWrap: "wrap", justifyContent : "space-around"}} key={id}>
          <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="" onClick={()=> navigate(`/movie/${id}`)} />
          <p>{title}</p>
          <p style={{width: "220px"}}>{release_date ? dayjs(release_date).format('YYYY') : 'No disponible'}</p>
           
          {/* <button onClick={()=> navigate(`/movie/${id}`)}>DETALLE</button> */}
          <button style={{border:"none",backgroundColor:"transparent"}} onClick={()=> toogleFavorite({id, poster_path, title, original_title})}>
          {existsInFavorites(id) ?  "💙" :  "🤍"}</button>
        </div>)
      }
    </div>

  </>
}
