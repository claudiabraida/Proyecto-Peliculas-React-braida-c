import useMovies from "../hooks/useMovies";

import { FavoriteContext } from "../context/FavoriteContext";

import { useContext, useEffect } from "react";

import { useNavigate, useParams } from "react-router";

import TrailerMovies from "./6TrailerMovies";

export default function DetailMovies() {
  const { getDetailMovieId, movieId} = useMovies();
  const {toogleFavorite,existsInFavorites }  = useContext(FavoriteContext);
  
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(()=> {
    getDetailMovieId(id);
  
  },[])

  return <>
    <h1>DETALLE MOVIE</h1>
    <div >
    <TrailerMovies/>
    <img id={movieId.id} src={`https://image.tmdb.org/t/p/w200/${movieId.poster_path}`} alt="" />

    {/* <button  onClick={()=> navigate(`/trailer/${id}`)}>TRAILER</button> */}
    <button style={{border:"none",backgroundColor:"transparent"}} 
      onClick={()=> toogleFavorite
        ({ id: movieId.id , 
           poster_path: movieId.poster_path,
           title: movieId.title,
           original_title: movieId.original_title,
        })}>{existsInFavorites(id) ? "💙" :  "🤍"}
    </button>
    <button  onClick={()=> navigate(`/trailer/${id}`)}>TRAILER</button>
        {/* //  + navigate(`/favorites-movies/${id}`) */}
    <img src={`https://image.tmdb.org/t/p/w500/${movieId.backdrop_path}`} alt="" />
    <p>{movieId.title}</p>
    <p>{movieId.overview}</p>

    {
      movieId.genres && movieId.genres.map(({name}) =>
      <ul key={name} id={name}>
        <li>{name}</li>
      </ul>)
    }
    <p>Nombre original: {movieId.original_title}</p>

    </div>
  </>
}




