
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
export default function MoviesComponent({type}) {
  const {getListMovies, movies, changePage, page, totalPages} = useMovies()
  const navigate = useNavigate();
  const {toogleFavorite, existsInFavorites }  = useContext(FavoriteContext);
  
  function handleChange(event, value) {// function mui
    changePage(value);
  }

  useEffect(()=>{
      getListMovies(type);

  },[page])
{/* <CircularProgress/> */}
  return <>
    <Box p={3}>
      <Grid container spacing={3}>
        { movies.length == 0 ?  <Typography color="red">QUE PASAAAAA</Typography>
        : movies.map(({id, poster_path, title, original_title, release_date }) =>
          
        <Grid key={id}
          padding={{sm:"10px", md:"1px"}} 
          size={{ xs: 12, sm: 6 , md: 3, lg: 3, xl:2 }}>
          <Card sx={{
            display:"block",
            // width:{xs:"100%",sm:"100%", md:"100%" },
            backgroundColor:"#12202bba",
            borderRadius: "10px",
            border: "1px solid  #8a74fcff",
            margin:"auto",
          }}>
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
            <Typography
              width="100%" pt={"8px"}
              color="whitesmoke"
              paddingLeft={"12px"} 
              sx={{fontSize: { xs:"1.6em", sm: "1.9em" },
                display:"-webkit-box",
                WebkitBoxOrient: "vertical",
                textOverflow:"ellipsis",
                overflow:"hidden",
                WebkitLineClamp:{sm:"1" }
              }}>
                {title}
            </Typography>
            <Stack
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center">
              <Typography
                color="white"
                paddingLeft={"12px"}
                sx={{ fontSize: { xs:"1.4em", sm: "1.6em" }}}
              >
                {release_date ? dayjs(release_date).format('YYYY') : 'No disponible'}
              </Typography>
              <IconButton 
                color="primary"
                onClick={()=> toogleFavorite({ id, poster_path, title, original_title, release_date})}
              >
                {existsInFavorites(id) 
                ? <Favorite sx={{fontSize: { xs:"1.5em", sm: "1.8em" }}}/> 
                : <FavoriteBorder sx={{fontSize:{ xs:"1.5em", sm:"1.8em"}}}/>}
              </IconButton>      
            </Stack>
          </Card>
        </Grid>)}
        <Stack margin="auto" spacing={2}>
          <Pagination 
            count={totalPages}
            page={page}
            onChange={handleChange}
            color="primary" variant="outlined"
            sx={{"& .MuiPaginationItem-root":
              {color: "#6d52f2ff", 
                fontSize:{xs:"1.3em", sm:"2em", md:"2.1em"}
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




// *****************************************************************************************************
// import useMovies from "../hooks/useMovies"
// /* ______________________________________________________ */
// import { FavoriteContext } from "../context/FavoriteContext";
// /* ______________________________________________________ */
// import { useContext, useEffect } from "react";
// import { useNavigate, useParams } from "react-router";
// /* ________________________ MUI ________________________ */
// import {Box, Card, CardMedia, CircularProgress, Grid, IconButton, Pagination , Stack, Typography} from '@mui/material';
// import { Favorite, FavoriteBorder } from "@mui/icons-material";
// /* ____________________________________________________ */
// import dayjs from "dayjs";
// /* ************************************************************ */
// export default function MoviesComponet() {
//   const {getListMovies, movies, changePage, page, totalPages} = useMovies()
//   const navigate = useNavigate();
//   const {toogleFavorite, existsInFavorites }  = useContext(FavoriteContext);
  
//   const {type}= useParams()

//   function handleChange(event, value) {// function mui
//     changePage(value);
//   }

//   useEffect(()=>{

//     getListMovies(type);

//   },[page, type])

//   return <>
//     <Box p={3}>
//       <Typography
//         pt={{xs:"10px",sm:"10px", md:"15px"}}
//         pb={{xs:"15px"}}
//         sx={{fontSize: { xs:"28px", sm: "55px", md:"40px" }}}>
//        Lanzamientos
//       </Typography>
//       <Grid container spacing={3}>
//         { movies.length == 0 ?  <CircularProgress/>
//         : movies.map(({id, poster_path, title, original_title, release_date,type }) =>
          
//         <Grid key={id}
//           padding={{sm:"10px", md:"1px"}} 
//           size={{ xs: 12, sm: 6 , md: 3, lg: 3, xl:2 }}>
//           <Card sx={{
//             width:{sm:"100%", md:"100%" },
//             backgroundColor:"#12202bba",
//             borderRadius: "10px",
//             border: "1px solid  #8a74fcff",
//             margin:"auto",
//           }}>
//             <CardMedia 
//               sx={{
//                 boxShadow:"0px 2px 10px 2px #8a74fcff",
//                 border: "2px solid  #8a74fcff",
//                 borderRadius: '10px 10px 0px 0px'
//               }}
//               component="img" alt="imagen de la película"
//               image={`https://image.tmdb.org/t/p/original/${poster_path}`} 
//               onClick={()=> navigate(`/movie/${id}`)}
//             />
//             <Typography
//               width="100%" pt={"8px"}
//               color="whitesmoke"
//               paddingLeft={"12px"} 
//               sx={{fontSize: { xs:"1.6em", sm: "1.9em" },
//                 display:"-webkit-box",
//                  WebkitBoxOrient: "vertical",
//                 textOverflow:"ellipsis",
//                 overflow:"hidden",
//                 WebkitLineClamp:{sm:"1" }
//               }}>
//                 {title}
//             </Typography>
//             <Stack
//               flexDirection="row"
//               justifyContent="space-between"
//               alignItems="center">
//               <Typography
//                 color="white"
//                 paddingLeft={"12px"}
//                 sx={{ fontSize: { xs:"1.4em", sm: "1.6em" }}}
//               >
//                 {release_date ? dayjs(release_date).format('YYYY') : 'No disponible'}
//               </Typography>
//               <IconButton 
//                 color="primary"
//                 onClick={()=> toogleFavorite({ id, poster_path, title, original_title, release_date, type})}
//               >
//                 {existsInFavorites(id) 
//                 ? <Favorite sx={{fontSize: { xs:"1.5em", sm: "1.8em" }}}/> 
//                 : <FavoriteBorder sx={{fontSize:{ xs:"1.5em", sm:"1.8em"}}}/>}
//               </IconButton>      
//             </Stack>
//           </Card>
//         </Grid>)}
//         <Stack margin="auto" spacing={2}>
//           <Pagination 
//             count={totalPages}
//             page={page}
//             onChange={handleChange}
//             color="primary" variant="outlined"
//             sx={{"& .MuiPaginationItem-root":
//               {color: "#6d52f2ff", 
//                 fontSize:{xs:"1.3em", sm:"2em", md:"2.1em"}
//               },
//               "& .Mui-selected":{ 
//               border: "1.5px solid #8886f0ff"
//               }
//             }}/>
//         </Stack>
//       </Grid>
//     </Box>
//   </>
// }