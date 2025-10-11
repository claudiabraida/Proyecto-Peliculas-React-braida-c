import { Box, Grid, Typography } from "@mui/material"
import TypeListMovies from "../components/5TypeListMovies";

export default function TypePopularMovies() {

  return <>
    <Box p={3}>
      <Grid>
        <Typography
          pt={{sm:"10px", md:"90px"}}
          pb={{xs:"1px"}}
          pl={{sm:"15px"}}
          sx={{fontSize: { sm:"28px", md: "55px", lg:"40px" }}}>
        </Typography>
        <TypeListMovies type={"popular"}/>
      </Grid>
    </Box>
  </>
}


