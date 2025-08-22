/* ************** REACT ROUTER ************** */
import { BrowserRouter, Routes,Route } from "react-router";

/* *************** COMPONENTS *************** */
import NavBar from "../components/1NavBar";
import Footer from "../components/5Footer";

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
        <Route path="/inicio" element={<Home/>}/>
        <Route path="lanzamientos" element={<NewMovies/>}/>
        <Route path="popular" element={<Popular/>}/>
        <Route path="buscar" element={<Search/>}/>
        <Route path="/movie/:id" element={<DetailMovies/>}/>
        <Route path="favoritos" element={<FavoritesMovies/>}/>
        <Route path="trailer/:id" element={<TrailerMovies/>}/>
        <Route path="*" element={<h2>ERROR 404 NOT FOUND</h2>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

