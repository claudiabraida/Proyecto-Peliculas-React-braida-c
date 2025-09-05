import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Favorite, FavoriteBorder} from '@mui/icons-material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { CardMedia, Grid, Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
/* ______________________________________________ */
import useMovies from "../hooks/useMovies";

import { FavoriteContext } from "../context/FavoriteContext";
/* ______________________________________________ */

import { useContext, useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router";
/* ______________________________________________ */

import dayjs from "dayjs";
/* ______________________________________________ */

import TrailerMovie from '../components/4TrailerMovie';
/* ____________________ MUI ____________________ */

const style = {
  display:'flex',
  justifyContent: 'center',
  flexDirection:'column',
  position: 'absolute',
  textAlign:'center',
  top:'50%',
  left:'50%',
  transform:'translate(-50%, -50%)',
  width:'100%',
  boxShadow: "0px 10px 90px #040404ff",
  backgroundColor:'#000000ff',
};

export default function DetailMovies() {
/* _________________ MUI _________________ */
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
/* _______________________________________ */

  const { getDetailMovieId, movieId} = useMovies();
  const { toogleFavorite, existsInFavorites }  = useContext(FavoriteContext);
  
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(()=> {
    getDetailMovieId(id);
  
  },[])

  return <>           
    <Grid height={{xs:"600px", sm: "1460px", md:"1600px"}} color={"typography.color"}>
      {/* ............ background image ............ */}
      <Box  
        sx={{     
          backgroundImage:`url(https://image.tmdb.org/t/p/original/${movieId.backdrop_path})`,
          width:{xs:"100%", },
          height:{xs:"190px", sm:"400px",md:"600px" },
          backgroundRepeat:"no-repeat",
          backgroundSize:{xs:"cover"},
          backgroundPositionY:{xs:"center", },                  
        }}>
        {/* ............ box filter ............ */}
        <Box height={{xs:"600px", sm:"1600px"}} mt={{xs:"18%", sm:"11%"}}bgcolor={"#000000a5"}>
          {/* ............ box container ............*/}
          <Box mt={"3%"}>
            <Stack position={"absolute"} ml={{xs:"8%", sm:"4%", md:"5%"}} mt={{xs:"19%", sm:"11%", md:"12%"}} spacing={2}> 

              {/* ............ front image ............ */}              
              <CardMedia
                component="img" alt="imagen de la película"
                image={`https://image.tmdb.org/t/p/original/${movieId.poster_path}`} 
                sx={{
                  width:{xs:"35%", sm:"37%", sm:"40%", md:"35%"},
                  border: "1px solid #8a74fcff",
                  borderRadius:"10px"
                }}
              />
              {/* ............ buttons ............ */}                         
              <Stack direction="row" spacing={{xs:-2, sm:-1, md: 1}} 
                left={{xs:"40%", sm:"50%", md:"55%"}} top={"50%"} position={"absolute"} alignItems={"center"}>
                {/* ............ favorite button ............ */}
                <Button onClick={()=> 
                  toogleFavorite({ id: movieId.id , 
                    poster_path: movieId.poster_path,
                    title: movieId.title,
                    original_title: movieId.original_title,
                    release_date:movieId.release_date
                  })}>
                  {existsInFavorites (id) ? <Favorite sx={{fontSize:{xs:"1.5em", sm:"3em", md:"4em"}}} /> : <FavoriteBorder sx={{fontSize:{xs:"1.5em", sm:"3em", md:"4em"}}} /> }
                </Button>
                {/* ............ trailer button ............ */}
                <Button variant="outlined" 
                  onClick={handleOpen}
                  sx={{ 
                    width:{xs:"190%",},
                    height:{xs:"25px"},
                    p:{xs:"5px"},
                    borderRadius:{xs:"50px"}
                  }}> 
                  <PlayCircleOutlineIcon sx={{fontSize:{xs:"1.5em", sm:"3em", md:"4em" }}} /> 
                  <Typography fontSize={{xs:"0.6em", sm:"1.5em", md:"2em"}}>
                    ver tráiler 
                  </Typography>
                </Button>
              </Stack>
            </Stack>

            {/* .............. title & date .............. */}
            <Stack direction="row" alignItems={"center"} spacing={2} p={{xs:2, md:5}}>
              <Typography fontSize={{xs:"1em", sm:"2em", md:"2.2em"}} fontWeight={"600"}>
                {movieId.title}
              </Typography>
              <Typography fontSize={{xs:"0.7em", sm:"1.5em", md:"1.5em"}}>
                {movieId.release_date ? dayjs(movieId.release_date).format('YYYY') : 'No disponible'}
              </Typography>
            </Stack>

            {/* ................. genres ................. */}
            <Stack position={"absolute"} top={{xs:"35%", sm:"25%", md:"22%" }} left={"65%"} gap={"4px"} >
              { 
                movieId.genres && movieId.genres.map(({name}) =>
                  <Typography  key={name} fontSize={{xs:"0.70em", sm:"1.5em", sm:"1.6em"}} >
                    {name}
                  </Typography>                 
                )
              }              
            </Stack> 
            {/* ................general overview ................ */}
            <Stack  direction={"column"} justifyContent={"center"} alignItems={"center"} mt={"55%"}>
              <Typography fontSize={{xs:"0.9em", sm:"2em", md:"2.1em"}} fontWeight={"600"} ml={{xs:"-70%", sm:"-75%", md:"-78%"}} mt={{sm:"5%", md:"1%"}}>General</Typography>
              <Typography width={"100%"} p={{xs:"8px 20px 0px 20px", sm:"10px 30px 0px 30px", md:"12px 40px 0px 40px"}} lineHeight={"1.6"} fontSize={{xs:"0.7em", sm:"1.8em", md:"2em"}}>{movieId.overview}</Typography>
            </Stack>
          </Box>
        </Box>
      </Box>     
      {/* ............... modal trailer  ............... */}
      <Modal sx={{backgroundColor:"#000000a1"}} open={open}>
        <Box sx={{...style}}>
          <Stack direction={"row"}alignItems={"center"} justifyContent={"center"} gap={"20%"} color={"primary.main"} p={2}>
            <Typography textAlign={"center"} fontSize={{xs: "2em", sm:"3em"}}>
              reproducir trailer
            </Typography>
            <HighlightOffIcon onClick={handleClose} sx={{fontSize:{sx:"2em", sm:"4em"}, color:"prymary.main" }} />
          </Stack>
          {/* .... trailer component .... */}
          <TrailerMovie />            
        </Box>
      </Modal>
    </Grid> 
  </>
}



