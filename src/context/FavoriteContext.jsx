import { createContext, useState } from "react";

export const FavoriteContext = createContext();

const FavoritesContextProvider = ({children}) => {
  const [,] = useState([]);

  const data = {

  }
  
  return <FavoriteContext.Provider value={data}>{children}</FavoriteContext.Provider>
}
    
export default FavoritesContextProvider
