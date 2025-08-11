import useMovies from "../hooks/useMovies"
import { useContext, useEffect } from "react";
import { FavoriteContext } from "../context/FavoriteContext";
import { useNavigate } from "react-router";


export default function Search() {
  const { searchTitleMovie, getSearchMovies, movies } = useMovies();

  // const {toogleFavorite, existsInFavorites} = useContext(FavoriteContext);
  
  const navigate = useNavigate();
  
  useEffect(()=>{
    getSearchMovies()
  },[])

  return <>
    <h1>SEARCH</h1>
    <label>buscar</label>
    <input onInput={(e)=> searchTitleMovie(e.target.value)} type="text" />
    <div style={{display: "flex", flexWrap: "wrap", justifyContent : "space-around"}}>
      {
        movies.map(({id,poster_path,title, genres, original_title}) => <div key={id} id={id}>
          <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="" />
          <button  onClick={()=> navigate(`/movie/${id}`)}>DETALLE</button>
          {/* <button style={{border:"none",backgroundColor:"transparent"}}onClick={()=> toogleFavorite({id, poster_path, title, genres, original_title}) + navigate(`/favorites-movies/${id}`)}>{existsInFavorites(id) ? "💙" :  "🤍"}</button> */}
          
          <p>{title}</p> 
        </div>)
      }
    </div>

  </>
}
