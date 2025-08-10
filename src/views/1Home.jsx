import ListPopularMovies from "../components/2ListPopularMovies";
import ListTopMovies from "../components/3ListTopMovies"

export default function Home() {
  
  return <>
  <h1>HOME</h1>
  <div style={{display:"flex", justifyContent: "center"}}>
    <ListPopularMovies/>
    <ListTopMovies/>
  </div>

  </>
  }




 
    


