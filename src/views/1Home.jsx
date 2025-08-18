import { Container} from "@mui/material";
import CarouselMovies from "../components/2CarouselMovies";
import ListPopularMovies from "../components/3ListPopularMovies";
import ListTopMovies from "../components/4ListTopMovies"
export default function Home() {
  
  return <>
  <h1>HOME</h1>

  <div  style={{backgroundColor: "#fdfc78", display: "flex", maxWidth: "100%", height:"750vh"}}>
    <CarouselMovies/>
  </div> 
 
  <Container sx={{display: "flex", justifyContent:"center",height:"750vh"} }>
    <ListPopularMovies/>
    <ListTopMovies/>
  </Container>
  {/* <div style={{display:"flex", justifyContent: "space-around"}}>

  </div> */}

  </>
  }




 
    


