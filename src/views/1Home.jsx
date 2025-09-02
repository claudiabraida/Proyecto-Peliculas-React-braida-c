import { Box, Grid, Typography } from "@mui/material";
/* _______________________________________________________ */
import SliderMoviesParallaxHero from "../components/2SliderMoviesParallaxHero.jsx";
import SliderMoviesCoverFlow from "../components/3SliderMoviesCoverFlow.jsx";
import Footer from "../components/7Footer";

export default function Home() {

  return <>
    <Box >
      <SliderMoviesParallaxHero />
      <Grid container mt={"19%"} spacing={8} gap={-15}>
        <Grid p={1}>
          <Typography color="typography.color" variant="h5">Populares</Typography>
          <SliderMoviesCoverFlow type={"popular"} />
        </Grid>
        <Grid p={1}>
          <Typography color="typography.color" variant="h5">Mas puntuadas</Typography>
          <SliderMoviesCoverFlow type={"top_rated"} />
        </Grid>
      </Grid>
    </Box>
    <Footer/>

  </>
}




 
    


