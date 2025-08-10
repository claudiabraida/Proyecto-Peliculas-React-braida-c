/* ************** REACT ROUTER ************** */
import { BrowserRouter, Routes,Route } from "react-router";

/* *************** COMPONENTS *************** */
import NavBar from "../components/1NavBar";
import Footer from "../components/4Footer";

/* ***************** VIEWS ***************** */
import Home from "../views/1Home";
import NewMovies from "../views/2NewMovies";
import Popular from "../views/3Popular";
import Search from "../views/4Search";
import DetailMovies from "../views/5DetailMovies";
import TrailerMovies from "../views/6TrailerMovies";
import FavoritesMovies from "../views/7FavoritesMovies";

/* ************************************** */
export default function RouterMovies() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="new-movies" element={<NewMovies/>}/>
        <Route path="popular" element={<Popular/>}/>
        <Route path="search" element={<Search/>}/>
        <Route path="/movie/:id" element={<DetailMovies/>}/>
        <Route path="/favorites-movies/:id" element={<FavoritesMovies/>}/>
        <Route path="*" element={<h2>ERROR 404 NOT FOUND</h2>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

