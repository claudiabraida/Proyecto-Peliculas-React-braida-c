import useMovies from "../hooks/useMovies";
import { FavoriteContext } from "../context/FavoriteContext";
/* ______________________________________________________ */

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
/* ________________________ MUI ________________________ */

import {Pagination , Stack} from '@mui/material';
import dayjs from "dayjs";
/* ______________________________________________________ */

export default function Popular() {
  const { getListMovies, movies, changePage, page, totalPages } = useMovies();
  const { toogleFavorite, existsInFavorites }  = useContext(FavoriteContext);
  const navigate = useNavigate();

  const handleChange = (event, value) => {
    changePage(value);
  };

  useEffect(()=>{
    getListMovies("popular");
  },[page])
  
   return <>
    <h1>POPULAR MOVIES</h1>
    <div style={{display: "flex", flexWrap: "wrap", justifyContent : "space-around"}}>
      {
        movies.length == 0 ? <h1 style={{color: "red"}}>LOADING</h1> 
        : movies.map(({id, poster_path, title, genres, original_title, release_date}) =>
        <div key={id}  id={id}>
          <button style={{border:"none",backgroundColor:"transparent"}}
            onClick={()=> toogleFavorite({id, poster_path, title, genres, original_title, release_date})
           }>{existsInFavorites(id) ?  "💙" :  "🤍"}
          </button>

          <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="" width={200} onClick={()=> navigate(`/movie/${id}`)} />
          <p style={{width: "200px"}}>{title}</p> 
          <p style={{width: "220px"}}>{release_date ? dayjs(release_date).format('YYYY') : 'No disponible'}</p>
          <button  onClick={()=> navigate(`/movie/${id}`)}>DETALLE</button>

        </div>)
      }

    <Stack spacing={2}>
      <Pagination  
      count={totalPages}
      page={page}
      onChange={handleChange}
      color="primary" sx={{ '& .MuiPaginationItem-root': {
          color: '#451ee3ff',
         
        }}}/>
    </Stack>
      </div>
  </>
}
