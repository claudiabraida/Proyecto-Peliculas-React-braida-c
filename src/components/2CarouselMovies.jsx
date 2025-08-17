
import { useEffect } from 'react';

import useMovies from '../hooks/useMovies';

import { useNavigate } from 'react-router';

export default function CarouselMovies(id) {
  const { getNewMovies, movies } = useMovies();
  const navigate = useNavigate();

  useEffect(()=>{
    getNewMovies(id);

  },[]);

  return <>
  <h1>CAROUSEL</h1>
    <div style={{display: "flex", flexDirection:"column", justifyContent : "space-around"}}>
      {
        movies.length == 0 ? <h1 style={{color: "red"}}>LOADING</h1> 
        : movies.map(({id, backdrop_path, title}) =>
        <div key={id} id={id}>
          <img  src={`https://image.tmdb.org/t/p/w200/${backdrop_path}`} alt="" />
          <h4 style={{width: "200px"}}>{title}</h4> 
        <button onClick={()=> navigate(`/movie/${id}`)}>VER DETALLE</button>
          
        </div>
        
      )
        }
     </div>
  </>
}
          {/* <button  onClick={()=> navigate(`/movie/${id}`)}>DETALLE</button> */}
          {/* <button style={{border:"none",backgroundColor:"transparent"}} onClick={()=> toogleFavorite({id, poster_path, title, genres, original_title})}> */}
          {/* {existsInFavorites(id) ?  "💙" :  "🤍"}</button> */}

  
