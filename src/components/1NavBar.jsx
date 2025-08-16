import { useNavigate } from "react-router"

export default function NavBarMovies() {

  const navigate = useNavigate();
  return (
    <>
      <h1>1-NAV BAR</h1>
      <div>
      <button onClick={()=> navigate("/")}>🍿</button>
      <button onClick={()=> navigate("/")}>Home</button>
      <button onClick={()=> navigate("new-movies")}>Últimos Lanzamientos </button>
      <button onClick={()=> navigate("popular")}>Populares</button>
      <button onClick={()=> navigate("search")}>Buscar </button>
      <button style={{border:"none",backgroundColor:"transparent"}} onClick={()=> navigate(`/favorites-movies/`)}>💙</button>
      </div>
    </>
  )
}
