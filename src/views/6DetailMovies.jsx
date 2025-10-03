import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Favorite, FavoriteBorder, Margin, Padding} from '@mui/icons-material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {Card, CardMedia, CardContent, Grid, Stack, Typography } from '@mui/material';
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
/* ____________________ MUI element ____________________ */

const style = {
  width:'100%',
  height: "100%",
  backgroundColor:'#000000a8',
  boxShadow: "0px 10px 90px #040404ff",
  position: 'absolute',
  display:'flex',
  justifyContent: 'center',
  flexDirection:'column',
  textAlign:'center',
  top:'50%',
  left:'50%',
  transform:'translate(-50%, -50%)',
  
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

  // const navigate = useNavigate();
  const {id} = useParams();

  useEffect(()=> {
    getDetailMovieId(id);

  },[])

  {/* ............ card container ............*/}
  return <>
    <Card
      sx={{        
        backgroundImage:`url(https://image.tmdb.org/t/p/original/${movieId.backdrop_path})`,
        width: "100%" ,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        backgroundPosition: "center",
        boxShadow:"none",       
      }}
    >
      {/* .............. Box content filter .............. */}
      <Box   bgcolor={"#000000b1"} minHeight={{sm:"90vh"}} >
        {/* .............. title & date .............. */}
        <Typography  
          // position={{lg:"absolute"}}
          sx={{
            textShadow:" 1px 3px 2px #000000ff"}}
          color="typography.color"
          fontSize={{sm: "0.9rem", md: "2rem", lg: "1.6rem", xl: "2.7rem"}}
          fontWeight={"600"}
          pt={{sm: 10, md: 12, lg: 15}} ml={{sm: 3, md: 3, lg: 50}} pb={{sm:1.5, md: 2}} 
        >
          {movieId.title} <Box component={"span"} fontWeight={200} fontSize={{ sm: "0.7rem", md: "1.5rem", lg: "1.2rem", xl: "2rem"}}>
          ({movieId.release_date ? 
          dayjs(movieId.release_date).format('YYYY') : 'No disponible'}) </Box>
        </Typography>

        {/* .............. card elements .............. */}
        <Stack direction={{ sm:"row",   }} ml={{lg: 4}} mt={{lg: -9}} justifyContent={{sm: "center"}} alignItems={{sm:"start", lg: "end"}} spacing={{sm:2, md: 10, lg: 5}}>
          <CardMedia  component="img"
            image={`https://image.tmdb.org/t/p/original/${movieId.poster_path}`} alt={movieId.title}
            sx={{
              // position: "relative",
              width:{ sm: "45%", md:"35%", lg:"25%"},
              borderRadius:{ sm: "10px", xl: "20px"},
              border:"1px solid #8a74fcff",
            
            }}
          />

          {/* ................. card subgroup elements  ................. */}
          <Stack 
            width={{lg:"100%"}}
            flexDirection={{lg:"row"}}
            alignItems={{lg: "center"}}
            justifyContent={{sm: "center"}}
            spacing={{sm: 1,}}>
            {/* ........ genres ........ */}
            {
              movieId.genres && movieId.genres.map(({name}) =>
              <Typography key={name} flexDirection={"row"} fontSize={{sm: "0.60rem", md: "1.6rem", lg: "1.4rem"}} color={ "prymary.main"}>
                {name}
              </Typography>)
            }

            {/* ........ buttons favorite / trailer ........ */}
            <Stack direction={"row"} spacing={{sm: 0.5, md: 3}} alignItems={"center"} >
              {/* ........ buttons favorite  ........ */}
              <Button onClick={()=>
                toogleFavorite({
                  id: movieId.id ,
                  poster_path: movieId.poster_path,
                  title: movieId.title,
                  original_title: movieId.original_title,
                  release_date:movieId.release_date
                })}
                sx={{
                  width: { sm: "25px", md: "55px", lg: "50px" },
                  height: { sm: "25px", md: "55px", lg: "50px" },              
                  minWidth: "auto",
                  backgroundColor: "#082052ff",
                  borderRadius: "50%",
                }}
              >
                { existsInFavorites (id) ?
                  <Favorite sx={{ fontSize: {sm: "1rem", md:"2.5rem", lg:"2.2rem"} ,  m: "auto",}} /> :
                  <FavoriteBorder sx={{ fontSize:{ sm: "1rem", md: "2.5rem", lg: "2.2rem"}, m: "auto", }} />
                }
              </Button>
              {/* ........ buttons trailer  ........ */}
              <Button variant="outlined" onClick={handleOpen}
                sx={{
                  width:{ sm: "75px", md: "150px"},
                  height:{ sm: "18px", md:"50px", lg: "30px"},
                  backgroundColor: " #03112eff",
                  color: "#90aaf8ff",
                  borderRadius:{sm: "50px"},
                  p:{sm: "1px", lg: "6px"},
                }}
              >
                <PlayCircleOutlineIcon sx={{ fontSize:{sm: "1.2rem", md: "3rem", lg: "2.9rem" }, ml:{ sm: "-5px", md: "-9px" ,lg: "-20px"}}} />
                <Typography textTransform={"capitalize"} fontSize={{sm: "0.6rem", md: "1.2rem", lg: "1rem" }} ml={{sm: "2px" , ml:"5px" }} >
                  ver tráiler
                </Typography>
              </Button>
            </Stack>
          </Stack>
        </Stack >
        {/* ................ content sinopsis / overview ................ */}
        <CardContent  sx={{ 
          width: {sm: "85%" , md: "80%", lg: "67%", xl: "60%"}, 
          color: "typography.color", margin: "auto", 
          mt: {lg: "-50vh", xl: "-40vh"},
          ml:{lg: "31%",  xl: "40%"},
          pt:1
          
          }}>
          {/* ................ sinopsis ................ */}
          <Typography gutterBottom component="div"
            fontWeight={{ sm: 700}} sx={{ fontSize: {sm: "0.9rem", md: "1.7rem", lg: "1.3rem"}, pt: { md: 3}}}>
            Sinopsis
          </Typography>
          {/* ................ overview ................ */}
          <Typography  
           
            lineHeight={{ sm: 2, md: 2.4, lg: 2}} 
            sx={{fontSize: {sm: "0.7rem", md: "1.5rem", lg: "1.1rem"}, 
           
            }}>
            {movieId.overview}
          </Typography>
        </CardContent>
      </Box>
    </Card>
    {/* ............... modal trailer  ............... */}
    <Modal  open={open}>
      <Box  sx={{...style}}>
        <HighlightOffIcon onClick={handleClose} 
          sx={{ 
            fontSize:{ sm:"1.5rem", md:"3rem", lg:"2.6rem"}, 
            color:"prymary.main" ,
            ml: "90%"
          }} 
        />
        
        {/* .... trailer component .... */}
        <TrailerMovie />
      </Box>
    </Modal>
  </>  
};
