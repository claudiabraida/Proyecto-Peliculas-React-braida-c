// import useMovies from "../hooks/useMovies";

// import { useContext, useEffect } from "react";
// import { FavoriteContext } from "../context/FavoriteContext";

// import { useNavigate } from "react-router";

// export default function TopMovies(top_rated) {
//   const {getListMovies, movies} = useMovies();
//   const {toogleFavorite, existsInFavorites} = useContext(FavoriteContext);
//   const navigate = useNavigate();

//   useEffect(()=>{
//     if(top_rated){
//       getListMovies("top_rated");
//     }

//   },[])

//   return <>
//     <div style={{display: "flex", flexDirection: "column", alignItems:"center", color: "whitesmoke"}}>
//     <h2> TOP MOVIES</h2>
//     {
//       movies.map(({id, poster_path, title, original_title}) => <div key={id} id={id}>
//       <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="" width={150} onClick={()=> navigate(`/movie/${id}`)} />
//       <p>{title}</p>
//       {/* <button  onClick={()=> navigate(`/movie/${id}`)}>VER DETALLE</button> */}

//       <button style={{border:"none",backgroundColor:"transparent"}} 
//         onClick={()=> toogleFavorite({id, poster_path, title, original_title}) 
//         // + navigate(`/favorites-movies/${id}`)
//         }>{existsInFavorites(id) ? "💙" :  "🤍"}
//       </button>

//       </div>)
//     }
//   </div>

//   </>

// }
