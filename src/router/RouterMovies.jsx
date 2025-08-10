/* ************** REACT ROUTER ************** */
import { BrowserRouter, Routes,Route } from "react-router";

/* ***************** VIEWS ***************** */

/* ************************************** */
export default function RouterMovies() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="*" element={<h2>ERROR 404 NOT FOUND</h2>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

