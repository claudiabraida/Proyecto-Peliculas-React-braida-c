
import useMovies from "../hooks/useMovies"
/* ______________________________________________________ */
import { FavoriteContext } from "../context/FavoriteContext";
/* ______________________________________________________ */
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
/* ________________________ MUI ________________________ */
import {Box, Card, CardMedia, CircularProgress, Grid, IconButton, Pagination , Stack, Typography} from '@mui/material';
import { Favorite, FavoriteBorder } from "@mui/icons-material";
/* ____________________________________________________ */
import dayjs from "dayjs";

/* ************************************************************ */
export default function TypeListMovies({type}) {
  const {getListMovies, movies, changePage, page, totalPages} = useMovies()
  const navigate = useNavigate();
  const {toogleFavorite, existsInFavorites }  = useContext(FavoriteContext);
  
  function handleChange(event, value) {// function mui
    changePage(value);
  }

  useEffect(()=>{
    getListMovies(type);

  },[page])

  return <>
    <Box mt={2} p={2}>
      <Grid container spacing={3}>
        { movies.length == 0 ?  <CircularProgress/> 
        : movies.map(({id, poster_path, title, original_title, release_date , vote_average}) =>
          
        <Grid key={id} padding={{sm:"10px", md:"1px"}} 
          size={{ xs: 12 , md: 4, lg: 3, xl:3 }}>
          <Card 
            sx={{
              width: { xs: "90%", md: "90%",},             
              backgroundColor:"#12202bba",
              borderRadius: "10px",
              border: "1px solid  #8a74fcff",
              margin:"auto",
            }}
          >
            <CardMedia 
              sx={{
                boxShadow:"0px 2px 10px 2px #8a74fcff",
                border: "2px solid  #8a74fcff",
                borderRadius: '10px 10px 0px 0px'
              }}
              component="img" alt="imagen de la película"
              image={`https://image.tmdb.org/t/p/original/${poster_path}`} 
              onClick={()=> navigate(`/movie/${id}`)}
            />
            {/* ...... title ...... */}
            <Typography
              width="100%" pt={"8px"}
              color="whitesmoke"
              paddingLeft={"12px"} 
              sx={{
                fontSize: { xs: "1.2rem" , sm:"1.6rem", md: "1.1rem", lg:"1em", xl: "2rem" },
                display:"-webkit-box",
                WebkitBoxOrient: "vertical",
                textOverflow:"ellipsis",
                overflow:"hidden",
                WebkitLineClamp:{sm:"2" }
              }}
            >
              {title}
            </Typography>

            <Stack
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center">
            {/* ...... date ...... */}
              <Typography
                color="white"
                paddingLeft={"12px"}
                sx={{ fontSize: { xs:"0.8rem", sm: "1.6rem", md:"1rem", xl: "1.5rem" }}}
              >
                {release_date ? dayjs(release_date).format('YYYY') : 'No disponible'}
              </Typography>

            {/* ...... icon favorite ...... */}
              <IconButton 
                color="primary"
                onClick={()=> toogleFavorite({ id, poster_path, title, original_title, release_date, vote_average})}
              >
                {existsInFavorites(id) 
                ? <Favorite sx={{fontSize: {  xs:"1.9rem", sm:"1.8rem", md: "1.8rem", lg:"1rem" }}}/> 
                : <FavoriteBorder sx={{fontSize:{ xs:"1.9rem", sm:"1.8rem", md:"1.8rem", lg: "1rem"}}}/>}
              </IconButton>      
            </Stack>
          </Card>
        </Grid>)}
        {/* ...... pagination ...... */}
        <Stack margin="auto" spacing={2}>
          <Pagination          
            count={totalPages}
            page={page}
            onChange={handleChange}
            color="primary" variant="outlined"
            sx={{
              "& .MuiPaginationItem-root":
              {color: "#6d52f2ff", 
                fontSize:{ xs: "0.8rem" , sm:"1.3rem", md:"2rem", lg:"1.5rem", xl: "2rem"}
              },
              "& .Mui-selected":{ 
              border: "1.5px solid #8886f0ff"
              }
            }}/>
        </Stack>
      </Grid>
    </Box>
  </>
}
