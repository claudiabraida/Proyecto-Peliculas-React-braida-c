import { Container, Box, Grid, Typography} from "@mui/material";
import CarouselMovies from "../components/2CarouselMovies";
import ListPopularMovies from "../components/3ListMovies";
// import ListTopMovies from "../components/4ListTopMovies"
import Swiper from "swiper";
import useMovies from "../hooks/useMovies";
import { useEffect } from "react";
import { useParams } from "react-router";
// useMovies
export default function Home() {

  return <>
  
  <Typography>HOME</Typography>
  {/* <div  style={{backgroundColor: "#fdfc78", display: "flex", maxWidth: "100%", height:"750vh"}}>
  </div>  */}
    <CarouselMovies  />
    <Grid sx={{}}>

    <Container 
    // sx={{backgroundColor: "black", display: "flex", justifyContent:"center"} }
    >
      <ListPopularMovies type="popular" />
      <ListPopularMovies type="top_rated" />
      

    
      {/* <ListTopMovies/> */}
    </Container>
    </Grid>
  {/* <div style={{display:"flex", justifyContent: "space-around"}}>

  </div> */}

  </>
  }




 
    


