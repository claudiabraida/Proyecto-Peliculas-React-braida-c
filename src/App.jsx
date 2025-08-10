
import RouterMovies from "./router/RouterMovies";
import FavoriteContextProvider from "./context/FavoriteContext";

function App() {
  return (
  <FavoriteContextProvider>
    <RouterMovies />
  </FavoriteContextProvider>
  )
}

export default App
