import { createContext, useState } from "react";

export const FavoriteContext = createContext();

const FavoritesContextProvider = ({children}) => {
  const [favorites, setFavorites] = useState([]);

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
  
  function agregarAfavoritos (cardMovie) {
    if(existsInFavorites(cardMovie.id)) {
      const newFavorite = favorites.map(movieInFavorites => {
        if(movieInFavorites.id === cardMovie.id){
          return{
            ...movieInFavorites
          }
        } 
    })
    setFavorites(newFavorite)
  } else {
    const objetMovie = {...cardMovie}
    console.log("estamoss", {...cardMovie})
    setFavorites([...favorites, objetMovie])
    }
  }

  function toogleFavorite (newFavorite) {
    const exists = existsInFavorites (newFavorite.id)
    if(exists){
      setFavorites(favorites.filter(fav => fav.id !== newFavorite.id))
    } else {
      setFavorites([...favorites, newFavorite])
    }
  }


  function existsInFavorites (id) {
    return favorites.some((fav) => fav.id == id)
  }

  function countInFavorite () {
    return favorites.length
  }

  const data = {
    // addToFavorite,
    // favorites
    favorites,
    agregarAfavoritos,
    existsInFavorites,
    toogleFavorite,
    countInFavorite

  }
  
  return <FavoriteContext.Provider value={data}>{children}</FavoriteContext.Provider>
}
    
export default FavoritesContextProvider
