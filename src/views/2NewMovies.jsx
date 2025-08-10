import useMovies from "../hooks/useMovies"
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function NewMovies(id) {
  const {getNewMovies, movies} = useMovies()
  const navigate = useNavigate();

  useEffect(()=>{
    getNewMovies(id);

  },[])

  return <>
    <h1>ÚLTIMOS LANZAMIENTOS</h1>
    <div style={{display: "flex", flexWrap: "wrap", justifyContent : "space-around"}}>
    {
      movies.map(({id,poster_path,title}) => <div key={id} id={id}>
        <img onClick={()=> navigate("/movie/:id")} src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="" />
        <button onClick={()=> navigate(`/movie/${id}`)}>VER DETALLE</button>
        <p style={{width: "220px"}}>{title}</p>
      </div>)
    }
    </div>

    <button>siguiente</button>
    <button>anteriror</button>
  </>
}
