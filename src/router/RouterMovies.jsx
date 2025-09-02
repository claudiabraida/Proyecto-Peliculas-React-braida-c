/* ************** REACT ROUTER ************** */
import { BrowserRouter, Routes,Route } from "react-router";

/* *************** COMPONENTS *************** */
import NavBar from "../components/1NavBar";
import Footer from "../components/7Footer";

/* ***************** VIEWS ***************** */
import Home from "../views/1Home";
import NewMovies from "../views/2NewMovies";
import Search from "../views/4Search";
import DetailMovies from "../views/6DetailMovies";
import TrailerMovie from "../components/4TrailerMovie";
import FavoritesMovies from "../views/5FavoritesMovies";
import Popular from "../views/3Popular";

/* ************************************** */
export default function RouterMovies() {
  console.log("ESTAS POR ACÁ?????")
  return <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/inicio" element={<Home/>}/>
        <Route path="lanzamientos" element={<NewMovies/>}/>
        <Route path="populares" element={<Popular/>}/>
        {/* <Route path="/:type" element={<NewMovies/>}/> */}
        <Route path="buscar" element={<Search/>}/>
        <Route path="/movie/:id" element={<DetailMovies/>}/>
        <Route path="favoritos" element={<FavoritesMovies/>}/>
        <Route path="trailer/:id" element={<TrailerMovie/>}/>
        <Route path="*" element={<h2>ERROR 404 NOT FOUND</h2>} />
      </Routes>
    </BrowserRouter>
    {/* <Footer/> */}
  </>
  
}

