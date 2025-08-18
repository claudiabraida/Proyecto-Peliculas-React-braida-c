import useMovies from "../hooks/useMovies"
/* ______________________________________________________ */
import { FavoriteContext } from "../context/FavoriteContext";
/* ______________________________________________________ */
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";

/* ________________________ MUI ________________________ */
import MuiSkeleton from "../components/MuiSkeleton"
import {Pagination , Stack} from '@mui/material';


export default function NewMovies() {
  const {getNewMovies, movies, changePage, page, totalPages} = useMovies()
  const navigate = useNavigate();
  const {toogleFavorite, existsInFavorites }  = useContext(FavoriteContext);
/* ____________________ function MUI ____________________ */
  const handleChange = (event, value) => {
    changePage(value);
  };

  useEffect(()=>{
    getNewMovies();

  },[page])

  return <>
    <MuiSkeleton/>
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
          </button>
          <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="" onClick={()=> navigate(`/movie/${id}`)} />
        
        <p style={{width: "220px"}}>{title}</p>
        {/* <button onClick={()=> navigate(`/movie/${id}`)}>VER DETALLE</button> */}
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

