import CarouselMovies from "../components/2CarouselMovies";
import ListPopularMovies from "../components/3ListPopularMovies";
import ListTopMovies from "../components/4ListTopMovies"

export default function Home() {
  
  return <>
  <h1>HOME</h1>
  <div  style={{textAlign:"center", backgroundColor: "blue", height:"800vh"}}>

    <CarouselMovies/>
  </div>
  <div style={{display:"flex", justifyContent: "center"}}>
    <ListPopularMovies/>
    <ListTopMovies/>
  </div>

  </>
  }




 
    


