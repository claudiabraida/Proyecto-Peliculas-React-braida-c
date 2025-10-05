/* ____________________ MUI  ____________________ */
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Card, CardMedia, CardContent, Stack, Typography } from '@mui/material';
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
      <Box  bgcolor={ "#000000b1" } minHeight={{ sm:"90vh" }} >
        {/* .............. card elements .............. */}
        <Stack
          direction={{ sm: "column" }}
          ml={{ lg: 7 }}
          mr={{ lg: 7 }}
          spacing={{
            sm:2,
            md: 3,
            lg: 1,
          }}
        >
          {/* .............. title & date .............. */}
          <Typography 
            width={{ md: "80%", lg: "70%" }}
            color="typography.color"
            fontWeight={"600"}
            fontSize={{
              sm: "0.9rem",
              md: "2rem",
              lg: "2.1rem",
              xl: "2.5rem"
            }}
            pt={{
              sm: 10,
              md: 14,
              lg: 15,
              xl: 18,
            }}
            pl={{
              sm: "30px",
              md: "90px",
              lg: "0px",
            }}
            left={"20px"}
          > {movieId.title} <Box 
            component={ "span" } 
            fontWeight={ 200 } 
            fontSize={{ 
              sm: "0.7rem", 
              md: "1.5rem", 
              lg: "1.3rem", 
              xl: "2rem"
            }}
            > 
             ({ movieId.release_date ? dayjs(movieId.release_date).format('YYYY') : 'No disponible '})
            </Box>
          </Typography>

          {/* ................. Card Subgroup Elements  ................. */}
          <Stack
            // bgcolor={"yellowgreen"}
            direction={{sm:"row" }}
            justifyContent={{sm:"center", lg: "flex-start"}}
            alignItems={{ md: "center" , lg: "start"}}
            spacing={{ sm: 2, md: 10, lg: 0}}
            pt={{lg: 2}}
          >
            {/* ........ CardMedia Image ........ */}
            <CardMedia  component="img"
              image={`https://image.tmdb.org/t/p/original/${movieId.poster_path}`} alt={movieId.title}
              sx={{
                width:{
                  sm: "45%",
                  md:"35%",
                  lg:"28%"
                },
                borderRadius:{
                  sm: "10px",
                  xl: "20px"
                },
                border:"1px solid #8a74fcff",
              }}
            />
            {/* .............. Group: genres, buttons favorite, trailer  .............. */}
            <Stack
              width={{lg: "50%"}}
              flexWrap={{lg:"wrap"}}
              flexDirection={{ lg: "row" }}
              alignItems={{ lg: "center"}}
              gap={{lg: 1.6} }
              spacing={{ sm: 1, lg: 0,  }}
              pl={{ lg:5 , xl: 8}}
            >
              {/* ........ genres ........ */}
              {
                movieId.genres && movieId.genres.map(({name}) =>
                <Typography key={name}
                  color={ "prymary.main" }
                  fontSize={{
                    sm: "0.7rem",
                    md: "1.6rem",
                    lg: "1.4rem",
                    xl: "2rem",
                  }}
                >
                  {name}
                </Typography>)
              }

              {/* ........ buttons favorite / trailer ........ */}
              <Stack
                direction={ "row" }
                alignItems={ "center" }
                spacing={{
                  sm: 0.5,
                  md: 3,
                  lg: 2,
                  xl: 3,
                }}
              >
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
                    width: {
                      sm: "25px",
                      md: "55px",
                      lg: "50px",
                      xl: "58px",
                    },
                    height: {
                      sm: "25px",
                      md: "55px",
                      lg: "50px",
                      xl: "58px",
                    },
                    minWidth: "auto",
                    backgroundColor: "#082052ff",
                    borderRadius: "50%",
                  }}
                >
                  { existsInFavorites (id) ?
                    <Favorite
                      sx={{
                        fontSize:{
                          sm: "1rem",
                          md:"2.5rem",
                          lg:"2.2rem",
                          xl:"2.5rem",
                        } ,
                        m: "auto",
                      }}
                    /> :
                    <FavoriteBorder
                      sx={{
                        fontSize:{
                          sm: "1rem",
                          md: "2.5rem",
                          lg:"2.2rem",
                          xl: "2.5rem",
                        },
                        m: "auto",
                      }}
                    />
                  }
                </Button>

                {/* ........ buttons trailer  ........ */}
                <Button variant="outlined" onClick={handleOpen}
                  sx={{
                    backgroundColor: " #03112eff",
                    color: "#90aaf8ff",
                    width:{
                      sm: "75px",
                      md: "150px",
                      xl: "180px",
                    },
                    height:{
                      sm: "18px",
                      md:"50px",
                      lg: "30px",
                      xl: "40px",
                    },
                    borderRadius:{
                      sm: "50px"
                    },
                    p:{
                      sm: "1px",
                      lg: "6px",
                      xl: "18px",
                    },
                  }}
                >
                  <PlayCircleOutlineIcon
                    sx={{
                      fontSize:{
                        sm: "1.2rem",
                        md: "3rem",
                        lg: "2.9rem",
                        xl: "3rem",
                      },
                      ml:{
                        sm: "-5px",
                        md: "-9px",
                        lg: "-20px",
                      }
                    }}
                  />
                  <Typography
                    textTransform={"capitalize"}
                    fontSize={{
                      sm: "0.6rem",
                      md: "1.2rem",
                      lg: "1rem",
                      xl: "1.3rem",
                    }}
                    ml={{
                      sm: "2px",
                      lg: "5px",
                      xl:"8px",
                    }}
                  >
                    ver tráiler
                  </Typography>
                </Button>
              </Stack>
            </Stack>
          </Stack >

          {/* ................ content sinopsis / overview ................ */}
          <CardContent
            sx={{
              position: { lg:"relative" },
              color: "typography.color",
              width:{
                sm: "100%",
                lg: "68%",
                xl: "66%"
              },
              pl:{
                sm: "30px",
                md: "90px",
                lg: "0px"
              },
              pr:{
                sm: "30px",
                md: "90px",
                lg: "0px"
              },
              left: {lg:"33%"},
            }}
          >
            {/* ................ sinopsis ................ */}
            <Typography gutterBottom component="div"
              fontWeight={{ sm: 700}}
              sx={{
                fontSize:{
                  sm: "0.9rem",
                  md: "1.7rem",
                  lg: "1.5rem",
                  xl: "1.8rem",
                },
                mt:{
                  sm: "-20px",
                  lg: "-48%",
                  xl: "-50%",
                },
              }}
            >
              Sinopsis
            </Typography>
            {/* ................ overview ................ */}
            <Typography
              lineHeight={{
                sm: 2,
                md: 1.6,
                lg: 2
              }}
              sx={{
                fontSize:{
                  sm: "0.7rem",
                  md: "1.5rem",
                  lg: "1.3rem",
                  xl: "1.5rem",
                },
              }}
            >
              {movieId.overview}
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
            fontSize:{
              sm:"1.5rem",
              md:"3rem",
              lg:"2.6rem"
            },
            ml: "90%"
          }}
        />

        {/* .... trailer component .... */}
        <TrailerMovie />
      </Box>
    </Modal>
  </>
};
