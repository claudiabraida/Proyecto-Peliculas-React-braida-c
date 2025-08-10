import { useNavigate } from "react-router"
import { useParams } from "react-router";

export default function NavBarMovies() {

  const navigate = useNavigate()
  const {id} = useParams();

  return (
    <>
      <h1>1-NAV BAR</h1>
      <div>
      <button onClick={()=> navigate("/")}>🍿</button>
      <button onClick={()=> navigate("/")}>Home</button>
      <button onClick={()=> navigate("new-movies")}>Últimos Lanzamientos </button>
      <button onClick={()=> navigate("popular")}>Populares</button>
      <button onClick={()=> navigate("search")}>Buscar </button>
      <button onClick={()=> navigate(`/favorites-movies/${id}`)}>FAVORITOS</button>
      </div>
    </>
  )
}
