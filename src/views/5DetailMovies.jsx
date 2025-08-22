import useMovies from "../hooks/useMovies";

import { FavoriteContext } from "../context/FavoriteContext";

import { useContext, useEffect } from "react";

import { useNavigate, useParams } from "react-router";

import TrailerMovies from "./6TrailerMovies";

import dayjs from "dayjs";

export default function DetailMovies() {
  const { getDetailMovieId, movieId} = useMovies();
  const {toogleFavorite, existsInFavorites }  = useContext(FavoriteContext);
  
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(()=> {
    getDetailMovieId(id);
  
  },[])

  return <>
    <h1>DETALLE MOVIE</h1>
    <button  onClick={()=> navigate(`/trailer/${id}`)}>TRAILER</button>
    <div style={{display: "flex", flexDirection: "column"}}>
    <TrailerMovies/>

    {/* <button  onClick={()=> navigate(`/trailer/${id}`)}>TRAILER</button> */}
    <button style={{border:"none",backgroundColor:"transparent"}} 
      onClick={()=> toogleFavorite
        ({ id: movieId.id , 
          poster_path: movieId.poster_path,
          title: movieId.title,
          original_title: movieId.original_title,
          release_date:movieId.release_date
        })}>{existsInFavorites(id) ? "💙" :  "🤍"}
    </button>

    <div style={{display:"flex"}}>
      <img style={{width: "20%"}} id={movieId.id} src={`https://image.tmdb.org/t/p/original/${movieId.poster_path}`} alt="" />
          {/* //  + navigate(`/favorites-movies/${id}`) */}
      <img style={{width: "50%"}} src={`https://image.tmdb.org/t/p/original/${movieId.backdrop_path}`} alt="" />
      </div>
      <p>{movieId.title}</p>
      {movieId.release_date ? dayjs(movieId.release_date).format('YYYY') : 'No disponible'}
      <span>{movieId.release_dates}
      </span>
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




