/* ************** REACT ROUTER ************** */
import { BrowserRouter, Routes,Route } from "react-router";

/* *************** COMPONENTS *************** */
import NavBar from "../components/1NavBar";
import TrailerMovie from "../components/4TrailerMovie";
import Footer from "../components/7Footer";

/* ***************** VIEWS ***************** */
import Home from "../views/1Home";
import TypeNewMovies from "../views/2TypeNewMovies";
import TypePopularMovies from "../views/3TypePopularMovies";
import Search from "../views/4Search";
import FavoritesMovies from "../views/5FavoritesMovies";
import DetailMovies from "../views/6DetailMovies";

/* ************************************** */
export default function RouterMovies() {
  // console.log("ESTAS POR ACÁ?????")
  return <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/inicio" element={<Home/>}/>
        <Route path="lanzamientos" element={<TypeNewMovies/>}/>
        <Route path="populares" element={<TypePopularMovies/>}/>
        <Route path="buscar" element={<Search/>}/>
        <Route path="/movie/:id" element={<DetailMovies/>}/>
        <Route path="favoritos" element={<FavoritesMovies/>}/>
        <Route path="trailer/:id" element={<TrailerMovie/>}/>
        <Route path="*" element={<h2>ERROR 404 NOT FOUND</h2>} />
      </Routes>
    </BrowserRouter>
        {/* <Route path="/:type" element={<NewMovies/>}/> */}
  </>
  
}

