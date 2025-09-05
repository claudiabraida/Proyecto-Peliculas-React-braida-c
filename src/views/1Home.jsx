import { Box, Grid, Typography } from "@mui/material";
/* _______________________________________________________ */
import SliderParallaxHero from "../components/2SliderParallaxHero.jsx";
import SliderCoverFlow from "../components/3SliderCoverFlow.jsx";
import Footer from "../components/7Footer";

export default function Home() {

  return <>
    <Box marginBottom={{xs:6, sm:9}} >
      <SliderParallaxHero />
      <Grid container mt={{xs:"19%"}} spacing={{xs:5, sm:9}} gap={-15} color="typography.color">
        <Grid>
          <Typography sx={{ml:{xs:"5%",sm:"3%"}, fontSize:{sm:"2.5em"}}}  variant="h5">
            Populares
          </Typography>
          <SliderCoverFlow type={"popular"} />
        </Grid>
        <Grid>
          <Typography sx={{ml:{xs:"5%",sm:"3%"}, fontSize:{sm:"2.5em"}}} variant="h5">
            Mas puntuadas
          </Typography>
          <SliderCoverFlow type={"top_rated"} />
        </Grid>
      </Grid>
    </Box>
    {/* <Footer/> */}
  </>
}




 
    


