import { useContext, useEffect } from "react"
import { FavoriteContext } from "../context/FavoriteContext"

export default function FavoritesMovies() {
  const {favorites, toogleFavorite} = useContext(FavoriteContext);


  return <>
   <h1>FAVORITES MOVIES</h1>
    {
      favorites.length == 0 ? <h1 style={{color: "red"}}>aún no tienes favoritos</h1>
      :favorites.map(({id, poster_path, backdrop_path, title, overview, genres, original_title}) =>
        <div key={id} >
          <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="" />
          <img  src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt="" />
          
          <p>{title}</p>
          <p>Nombre original: {original_title}</p>
          <p>{overview}</p>
          
          {genres && genres.map(g => 
            <ul key={g.name} id={g.name}>
              <li>{g.name}</li>
            </ul>
          )}
          
          <button style={{border:"none",backgroundColor:"transparent"}} 
            onClick={()=> toogleFavorite({id})}>💙
          </button>
        </div>
      )
    }

  </>
}
