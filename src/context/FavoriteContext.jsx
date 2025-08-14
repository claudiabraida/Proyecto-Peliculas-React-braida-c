import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const FavoriteContext = createContext();

const FavoritesContextProvider = ({children}) => {
  
  const [favorites, setFavorites] = useState([]);
  const {get,set, lS} = useLocalStorage();
 
  useEffect(()=> {
    const cosa = get("favorites")
    if(cosa) {
      setFavorites(cosa)
    }
  },[])
  
  /* ********************************************************* */
  function existsInFavorites (id) {
    return favorites.some((fav) => fav.id == id)
  }

  /* ********************************************************* */
  function toogleFavorite (newFavorite) {
    const exists = existsInFavorites (newFavorite.id)
    if(exists){
     const updateFavorite = favorites.filter(fav => fav.id !== newFavorite.id)
      setFavorites(updateFavorite)
      set("favorites", updateFavorite)

    } else {
     const updateFavorite = [...favorites, newFavorite]
      setFavorites(updateFavorite)
      set("favorites", updateFavorite)
    }
  }
  

  /* ********************************************************* */
  function countInFavorite () {
    return favorites.length
  }

  /* ********************************************************* */
  const data = {
    favorites,
    existsInFavorites,
    toogleFavorite,
    countInFavorite

  }
  
  return <FavoriteContext.Provider value={data}>{children}</FavoriteContext.Provider>
}
    
export default FavoritesContextProvider

  // function existeFavoritos(id) {
  //   const existe = favorites.some(elem => elem.id === id)
  //   return existe
  // }

  // function addToFavorite(movie) {
  //   console.log("agregar por fa")
  //   if(existeFavoritos(movie.id)) {
  //     const newMovie = favorites.map(movieInCard => {
  //       if(movieInCard.id === movie.id) {
  //         return {
  //           ...movieInCard
  //         }
  //       } else {
  //         return movieInCard
  //       }
  //     })
  //     setFavorites(newMovie)
  //   } else {
  //     console.log("MOVIEEE", { ...movie})
  //     const addMovie = { ...movie}
  //     setFavorites([...favorites, addMovie])
  //   }
  // }