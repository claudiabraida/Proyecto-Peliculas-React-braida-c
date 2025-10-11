/* ____________________ MUI  ____________________ */
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Card, CardMedia, CardContent, Stack, Typography, CircularProgress } from '@mui/material';
import Button from '@mui/material/Button';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
/* ____________________  CUSTOM HOOKS  ____________________ */
import useMovies from "../hooks/useMovies";
/* ____________________  CONTEXT  ____________________ */
import { FavoriteContext } from "../context/FavoriteContext";
/* ____________________  COMPONENTS  ____________________ */
import TrailerMovie from '../components/4TrailerMovie';
/* ______________________________________________ */

import { useContext, useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router";
/* ______________________________________________ */

import dayjs from "dayjs";
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
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "none",        
      }}
    >
      {/* .............. Box content filter .............. */}
      <Box  bgcolor={ "#000000b1" } pb={{ md: 6, lg: 0, xl: 6}} >
        {/* .............. card elements .............. */}
        <Stack 
          direction={{ xs: "column" }} ml={{ lg: 7 }} mr={{ lg: 7 }}
          spacing={{ xs:2, sm:1.5, md: 3, lg: 1 }}
        >
          {/* .............. title & date .............. */}
          <Typography 
            width={{ xs: "93%", sm: "80%", md: "90%",  lg: "100%" }}
            color="typography.color"
            fontWeight={"600"}
            fontSize={{ xs: "0.9rem", sm: "1.3rem", md: "2rem", lg: "1.7rem", xl: "2.5rem" }}
            pt={{ xs: 9, md: 14, lg: 17, xl: 18 }}
            pl={{ xs: "35px", sm: "30px", md: "60px", lg: "0px" }}
            left={"10px"}
          > 
            {movieId.title} <Box component={ "span" } fontWeight={ 200 } fontSize={{ xs: "0.7rem", sm: "0.88rem", md: "1.5rem", lg: "1.3rem", xl: "2rem" }}> 
              ({ movieId.release_date ? dayjs(movieId.release_date).format('YYYY') : 'No disponible '}) 
            </Box>
          </Typography>

          {/* ................. Elements: carMedia/ genres  ................. */}
          <Stack 
            justifyContent={{ lg: "flex-start" }}
            spacing={{ xs: 1,sm: 1.5,md: 2, lg: 0 }}
            pt={{ lg: 7, xl: 7 }} 
            pl={{ xs: 4 , md: 8, lg: 0 }}          
          >
            {/* ........ CardMedia Image ........ */}
            <CardMedia  
              component="img"
              image={`https://image.tmdb.org/t/p/original/${movieId.poster_path}`} alt={movieId.title}
              sx={{
                width:{ xs: "45%", sm: "42%", md:"36%", lg:"28%" },
                borderRadius:{ xs: "10px", xl: "20px" },
                border:"1px solid #8a74fcff",
              }}
            />
              {/* ........ Genres Group ........ */}
            <Stack 
              width={{ xs: "90%" ,lg: "70%" }}              
              position={{lg: "absolute" }}
              flexDirection={ "row" }
              gap={{ xs:1 , md: 1.6 , lg: 1.6 }}
              spacing={{ lg: 0 }}
              pl={{ lg: 5 }}
              top={{ lg: "48%" , xl: "40%"}}
              left={{ lg: "30%" , xl: "30%"}}
            >
              {
                movieId.genres && movieId.genres.map(({name}) =>
                <Typography key={name}
                  color={ "prymary.main" }
                  fontSize={{ xs: "0.7rem", sm: "0.9rem", md: "1.6rem", lg: "1.4rem", xl: "2rem" }}                 
                >
                  {name}
                </Typography>)
              }
            </Stack>
          </Stack >
          {/* ........... Group: vote_average, buttons / sinopsis / overview ........... */}
          <CardContent 
            sx={{              
              position: "relative" ,
              color: "typography.color",
              width:{ xs: "100%", lg: "68%", xl: "66%" },
              pl:{ xs: "30px", sm: "35px", md: "60px", lg: "0px" },
              pr:{ xs: "30px", sm: "35px", md: "50px", lg: "0px" },
              top: { xs:"-7px", sm:"-30px", md:"40px", lg:"-0px" , xl: 22},
              left: { lg:"32%" },
            }}
          >
          {/* ................ Group: vote_average, buttons: favortie / trailer ................ */}
            <Stack
              position={"absolute"}
              direction={{ lg: "row" }}
              alignItems={{ lg: "center" }}
              spacing={{ xs: 1, sm: 2, md: 3, lg: 2, xl: 3 }}
              mt={{ xs: -28 ,sm: -30 ,md: -60 ,lg: -51 ,xl: -72 }}
              ml={{ xs: 20 ,sm: 22 ,md: 40 , lg: -1 }}
              mb={{ xs: 3 , sm: 2 }}
            >
              {/* ---------- vote_average ---------- */}          
              <Box sx={{ position: "relative", display: "inline-flex" }}>
                <CircularProgress 
                  variant="determinate" 
                  thickness={ 2.2 }
                  size={{ xs:"2.1rem",  sm:"24rem",  md:"4.5rem",  lg: "4rem" }} 
                  value={Math.round((movieId.vote_average / 10 ) * 100)} 
                  sx={{
                    width:{ xs:"1.8rem",  sm:"2.3rem",  md: "4rem",  lg: "3.3rem", xl: "4.5rem" },
                    height:{ xs:"1.8rem",  sm:"2.3rem",  md:"4rem",  lg: "3.3rem", xl: "4.5rem" },
                    boxShadow:"inset 0px 0px  0px 1.6px #86fff5e9",
                    backgroundColor:"#000000ff",
                    borderRadius:"50%", color:"secondary.main",
                  }} 
                />          
                <Box
                  sx={{
                    position: 'absolute', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    top:{ xs:2,  sm:1,  md:4, lg:2, xl:-1 },
                    left:{ xs: -45,  sm: -39,  md: -85,  lg: -1 } , 
                    bottom: 0, 
                    right: 0, 
                  }}
                > 
                  <Typography variant="caption" component="div" 
                    color="prymary.main" 
                    fontSize={{ xs:"0.61rem",  sm:"0.8rem",  md: "1.4rem",  lg: "1.2rem" }} 
                  >
                    {`${Math.round((movieId.vote_average  / 10 ) * 100)}%`}
                  </Typography>
                </Box>
              </Box>                
              {/* ........ buttons favorite  ........ */}
              <Button onClick={()=>
                toogleFavorite({
                  id: movieId.id ,
                  poster_path: movieId.poster_path,
                  title: movieId.title,
                  original_title: movieId.original_title,
                  release_date:movieId.release_date,
                  vote_average: movieId.vote_average
                })}
                sx={{
                  width: { xs: "28px", sm: "30px", md: "55px", lg: "50px", xl: "60px" },
                  height: { xs: "28px", sm: "30px", md: "55px", lg: "50px", xl: "60px" },
                  minWidth: "auto",
                  backgroundColor: "#082052ff",
                  borderRadius: "50%",
                }}
              >
                { existsInFavorites (id) ?
                  <Favorite
                    sx={{
                      fontSize:{ xs: "1.2rem", sm: "1.3rem", md:"2.4rem", lg:"2.2rem", xl:"2.9rem" } ,
                    }}
                  /> :
                  <FavoriteBorder
                    sx={{
                      fontSize:{ xs: "1.2rem", sm: "1.3rem", md: "2.4rem", lg:"2.2rem", xl: "2.9rem"},                    
                    }}
                  />
                }
              </Button>
              {/* ........ buttons trailer  ........ */}
              <Button variant="outlined" onClick={handleOpen}
                sx={{
                  backgroundColor: " #03112eff",
                  color: "#90aaf8ff",
                  width:{ xs: "75px", sm: "78px", md: "150px", xl: "180px" },
                  height:{ xs: "18px", sm: "20px", md:"50px", lg: "30px", xl: "45px" },
                  borderRadius:{ xs: "50px" },
                  p:{ xs: "1px", sm: "2px", lg: "6px", xl: "18px" },
                }}
              >
              <PlayCircleOutlineIcon
                sx={{
                  fontSize:{ xs: "1.2rem", sm: "1.3rem", md: "3rem", lg: "2.9rem", xl: "3rem" },
                  ml:{ xs: "-5px", sm: "-1px", md: "-9px", lg: "-20px" }
                }}
              />
              <Typography
                textTransform={"capitalize"}
                fontSize={{ xs: "0.6rem", sm: "0.65rem", md: "1.2rem", lg: "1rem", xl: "1.3rem" }}
                ml={{ xs: "2px", lg: "5px", xl:"8px" }}
              >
                ver tráiler
              </Typography>
              </Button>
            </Stack>
            {/* ................ sinopsis ................ */}
            <Typography gutterBottom component="div"
              fontWeight={{ xs: 800}}
              sx={{
                fontSize:{ xs: "0.9rem", sm: "0.99rem", md: "1.7rem", lg: "1.5rem", xl: "1.8rem" },
                mt:{ xs: "-20px",  sm: "12px",md: "-70px", lg: "-48%", xl: "-47%" },
              }}
            >
              Sinopsis            
            </Typography>
            {/* ................ overview ................ */}
            <Typography
              lineHeight={{ xs: 2, md: 1.7, lg: 2 }}
              sx={{
                fontSize:{ xs: "0.89rem", sm: "0.9rem", md: "1.5rem", lg: "1.3rem", xl: "1.9rem" },
              }}
            >
             { movieId.overview == ""  ?  
                <Typography component={"span"} >Información no disponible en este momento</Typography>
                : movieId.overview
              }
            </Typography>
          </CardContent>
        </Stack>
      </Box>
    </Card>
    {/* ............... modal trailer  ............... */}
    <Modal  open={open}>
      <Box  sx={{...style}}>
        <HighlightOffIcon onClick={handleClose}
          sx={{
            color:"prymary.main" ,
            fontSize:{ sm:"1.5rem", md:"3rem", lg:"2.6rem" },
            ml: "90%"
          }}
        />

        {/* .... trailer component .... */}
        <TrailerMovie />
      </Box>
    </Modal>
  </>
};
