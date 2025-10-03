import { Box, Grid, Typography } from "@mui/material";
/* _______________________________________________________ */
import SliderParallaxHero from "../components/2SliderParallaxHero.jsx";
import SliderCoverFlow from "../components/3SliderCoverFlow.jsx";
import Footer from "../components/7Footer";

export default function Home() {

  return <>
    <Box  marginBottom={{xs:6, sm:9}} >
      <SliderParallaxHero />
      <Grid container mt={{mobile: "19%"}} spacing={{mobile: 5, tablet: 9}} gap={-15} color="typography.color">
        <Grid>
          <Typography sx={{ml:{mobile: "5%", desktop: "3%"}, fontSize:{mobile: "1rem", tablet:"2.5rem", desktop:"3rem"}}}  variant="h5">
            Populares
          </Typography>
          <SliderCoverFlow type={"popular"} />
        </Grid>
        <Grid>
          <Typography sx={{ml:{mobile: "5%", tablet: "3%"}, fontSize:{mobile: "1rem",tablet:"2.5rem", desktop:"3rem"}}} variant="h5">
            Mas puntuadas
          </Typography>
          <SliderCoverFlow type={"top_rated"} />
        </Grid>
      </Grid>
    </Box>
    {/* <Footer/> */}
  </>
}




 
    


