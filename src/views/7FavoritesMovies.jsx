import { useContext, useEffect } from "react"
import { FavoriteContext } from "../context/FavoriteContext"
import { useNavigate } from "react-router";
import dayjs from "dayjs";
export default function FavoritesMovies() {
  const {favorites, toogleFavorite} = useContext(FavoriteContext);
  const navigate = useNavigate();


  return <>
   <h1>FAVORITES MOVIES</h1>
    {
      favorites.length == 0 ? <h1 style={{color: "red"}}>aún no tienes favoritos</h1>
      :favorites.map(({id, poster_path,  title, original_title, release_date}) =>
        <div key={id} >
          <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="" width={250} />
          {/* <img  src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt="" /> */}
          
          <p>{title}</p>
          <p>Nombre original: {original_title}</p>
          <p style={{width: "220px"}}>{release_date ? dayjs(release_date).format('YYYY') : 'No disponible'}</p>
          

          <button style={{border:"none",backgroundColor:"transparent"}} 
            onClick={()=> toogleFavorite({id})}>💙
          </button>
        <button onClick={()=> navigate(`/movie/${id}`)}>VER DETALLE</button>

        </div>
      )
    }

  </>
}
