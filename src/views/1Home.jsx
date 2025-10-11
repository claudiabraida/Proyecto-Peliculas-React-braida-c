import { Box, Grid, Typography } from "@mui/material";
/* _______________________________________________________ */
import SliderParallaxHero from "../components/2SliderParallaxHero.jsx";
import SliderCoverFlow from "../components/3SliderCoverFlow.jsx";
import Footer from "../components/7Footer";

export default function Home() {

  return <>
    <Box  marginBottom={{ xs:6, sm:2, lg: 8}} >
      <Grid container mt={{xs: "2%", sm:7 ,lg: "4%" , xl: "7%"}} spacing={{ xs: 5, sm: 5, md: 9, lg: 12, xl: 17}} gap={-15} color="typography.color">
      <SliderParallaxHero />
        <Grid>
          <Typography sx={{ml:{xs: "5%", lg: "3%"}, fontSize:{   xs: "1rem", sm: "1.1rem", md: "2.5rem", lg: "3rem" }}}  variant="h5">
            Populares
          </Typography>
          <SliderCoverFlow type={"popular"} />
        </Grid>
        <Grid>
          <Typography sx={{ml:{xs: "5%", md: "3%"}, fontSize:{ xs: "1rem" , md: "2.5rem", lg: "3rem"}}} variant="h5">
            Mas puntuadas
          </Typography>
          <SliderCoverFlow type={"top_rated"} />
        </Grid>
      </Grid>
    </Box>
    {/* <Footer/> */}
  </>
}




 
    


