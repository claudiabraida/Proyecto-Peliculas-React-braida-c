import { useEffect } from "react";

import { useNavigate } from "react-router";

import useMovies from "../hooks/useMovies"

export default function Search() {
  const { searchTitleMovie, getSearchMovies, movies } = useMovies()
  const navigate = useNavigate();
  
  useEffect(()=>{
    getSearchMovies()
  },[])

  return <>
    <h1>SEARCH</h1>
    <label>buscar</label>
    <input  onInput={(e)=> searchTitleMovie(e.target.value)} type="text" />
    <div style={{display: "flex", flexWrap: "wrap", justifyContent : "space-around"}}>
      {
        movies.map(({id,poster_path,title}) => <div key={id} id={id}>
          <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="" />
          <button  onClick={()=> navigate(`/movie/${id}`)}>DETALLE</button>
          <p>{title}</p> 
        </div>)
      }
    </div>

  </>
}
