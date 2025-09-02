import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { Grid, Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
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
    <Grid mt={9}>
      <Stack direction="row" spacing={2}>      
      {/* ....... trailer button ....... */}
      <Button onClick={handleOpen}>
        <PlayCircleOutlineIcon /> ver trailer
      </Button>

      {/* ....... favorite button ....... */}
      <Button
        onClick={()=> toogleFavorite({id: movieId.id , 
          poster_path: movieId.poster_path,
          title: movieId.title,
          original_title: movieId.original_title,
          release_date:movieId.release_date
        })}>{existsInFavorites(id) ? <Favorite/> : <FavoriteBorder/> }
      </Button>
    </Stack>

      <img style={{width: "20%"}} id={movieId.id} src={`https://image.tmdb.org/t/p/original/${movieId.poster_path}`} alt="" />
      <img style={{width: "50%"}} src={`https://image.tmdb.org/t/p/original/${movieId.backdrop_path}`} alt="" />

      <Typography>{movieId.title}</Typography>

      {movieId.release_date ? dayjs(movieId.release_date).format('YYYY') : 'No disponible'}
      <span>{movieId.release_dates}
      </span>
      <p>{movieId.overview}</p>
  
      {
        movieId.genres && movieId.genres.map(({name}) =>
          <ul key={name} id={name}>
          <li>{name}</li>
        </ul>)
      }

      <Typography> Nombre original: {movieId.original_title}</Typography>

      {/* ....... modal trailer  ....... */}
      <Modal sx={{backgroundColor:'#000000a0'}} open={open}>
        <Box sx={{...style}}>
          <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',px: 2}}>
            <Typography sx={{color:"prymary.main", textAlign:'center'}}>ver trailer</Typography>
            <Button  onClick={handleClose}>
              <HighlightOffIcon sx={{fontSize:"20px"}}color="prymary.main" />
            </Button>
          </Box>
          {/* .... trailer component .... */}
          <TrailerMovie/>            
        </Box>
      </Modal>
    </Grid> 
  </>
}


