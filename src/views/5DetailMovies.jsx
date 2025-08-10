import { useEffect } from "react";
import useMovies from "../hooks/useMovies";

export default function DetailMovies(id) {
  const { getDetailMovieId, movieId } = useMovies();

  useEffect(()=> {
    getDetailMovieId(id);

  },[])

  return <>
    <h1>DETALLE MOVIE</h1>
    <div>
    <img id={movieId.id} src={`https://image.tmdb.org/t/p/w200/${movieId.poster_path}`} alt="" />
    <img src={`https://image.tmdb.org/t/p/w500/${movieId.backdrop_path}`} alt="" />
    
    <p>{movieId.title}</p>
    <p>{movieId.overview}</p>

    {movieId.genres && movieId.genres.map(({name}) => <ul key={name} id={name}>
       <li>{name}</li>
        </ul>
    )}
    <p>Nombre original: {movieId.original_title}</p>

    </div>
  </>
}




