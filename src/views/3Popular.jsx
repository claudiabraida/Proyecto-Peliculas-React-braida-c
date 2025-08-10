import useMovies from "../hooks/useMovies";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Popular() {
  const {getPopularMovies, movies} = useMovies()
  const navigate = useNavigate();

  useEffect(()=>{
    getPopularMovies();
    
   },[])

   return <>
    <h1>POPULAR MOVIES</h1>
    <div style={{display: "flex", flexWrap: "wrap", justifyContent : "space-around"}}>
      {
        movies.map(({id,poster_path,title}) => <div key={id} id={id}>
          <button  onClick={()=> navigate(`/movie/${id}`)}>DETALLE</button>
          <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="" />
          <p style={{width: "200px"}}>{title}</p> 
         </div>)
      }
     </div>

    <button>siguiente</button>
    <button>anteriror</button>
  </>
}
