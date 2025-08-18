import useMovies from "../hooks/useMovies";
import { FavoriteContext } from "../context/FavoriteContext";
/* ______________________________________________________ */

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
/* ________________________ MUI ________________________ */

import {Pagination , Stack} from '@mui/material';
/* ______________________________________________________ */


export default function Popular() {
  const { getPopularMovies, movies, changePage, page, totalPages } = useMovies();
  const { toogleFavorite, existsInFavorites }  = useContext(FavoriteContext);
  const navigate = useNavigate();

  const handleChange = (event, value) => {
    changePage(value);
  };

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

          <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="" onClick={()=> navigate(`/movie/${id}`)} />
          <p style={{width: "200px"}}>{title}</p> 
          <button  onClick={()=> navigate(`/movie/${id}`)}>DETALLE</button>
          
        </div>)
      }
     </div>

    <Stack spacing={2}>
      <Pagination  
      count={totalPages}
      page={page}
      onChange={handleChange}
      color="primary" />
    </Stack>
  </>
}
