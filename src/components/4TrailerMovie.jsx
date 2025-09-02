import { useEffect } from "react";
import useMovies from "../hooks/useMovies";

import { Box, CircularProgress, Grid, Typography } from "@mui/material";

export default function TrailerMovie() {

  const { getTrailersMovies, trailers } = useMovies();

  useEffect(()=>{
    getTrailersMovies();

  },[])
  
  const trailerMovieOficial = trailers.find(trailer => trailer.type === "Trailer") 

   return <>
    <Grid container  m={"auto"} textAlign={"center"} >
      {
        !trailers || trailers.legth === 0 ? <Typography>CARGANDO TRAILER</Typography> : !trailerMovieOficial 

        ? <CircularProgress />: 
        <Box textAlign={"center"}>
        <iframe className="trailer" src={`https://www.youtube.com/embed/${trailerMovieOficial.key}` }/>
        </Box>
      }
    </Grid>
  </>
}
