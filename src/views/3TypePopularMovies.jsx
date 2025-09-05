import { Box, Grid, Typography } from "@mui/material"
import TypeListMovies from "../components/5TypeListMovies";
import Footer from "../components/7Footer";


export default function TypePopularMovies() {

  return <>
    <Box p={3}>
      <Grid>
        <Typography
          pt={{sm:"10px", md:"90px"}}
          pb={{xs:"1px"}}
          pl={{sm:"15px"}}
          sx={{fontSize: { xs:"28px", sm: "55px", md:"40px" }}}>
        </Typography>
        <TypeListMovies type={"popular"}/>
      </Grid>
      {/* <Footer/> */}
    </Box>
  </>
}


