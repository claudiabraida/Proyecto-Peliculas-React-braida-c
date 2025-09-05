import axios from "axios"
/* °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°° */
import { useEffect, useState } from "react"
/* °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°° */
import { useParams } from "react-router";
/* °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°° */

export default function useMovies() {
  const apikey = import.meta.env.VITE_API_KEY_MOVIES;
  const AuthorizationTmdb = import.meta.env.VITE_AUTHORIZATION_TMDB;
  
  const {id} = useParams();

  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState({});
  const [trailers, setTrailers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  
  /* ************************** NEW MOVIES ************************************* */
  async function getListMovies(type) {
    try {
      const {data } = await axios (`https://api.themoviedb.org/3/movie/${type}?language=es-ES&page=${page}`,{
        headers: {
          Authorization: `Bearer ${AuthorizationTmdb}`
        }
      })
      setMovies(data.results)
      // console.log("PELICULASSSS", data.results)
      setTotalPages(data.total_pages)
      // console.log("PAGINASSSS", data.total_pages)
      setPage(data.page)
      // console.log("MOSTRAR PAGINASSSSS", data.page)
    } catch (error) {
      console.log(error)
    }
  }

 
  /* ************************** SEARCH MOVIES ************************************* */ 
  async function getSearchMovies(title) {
    try {
      const {data} = await axios (`https://api.themoviedb.org/3/search/movie?query=${title}&language=es-ES&page=${page}`,{
        headers: {
          Authorization: `Bearer ${AuthorizationTmdb}`
        }
      })
      // console.log("SEARCH-BUSCAR", data.results)
      setMovies(data.results)
    } catch (error) {
      console.log(error)
    }
  }

 /* ************************** DETAIL MOVIE ************************************* */
  
 async function getDetailMovieId() {
    try {
      const {data} = await axios (`https://api.themoviedb.org/3/movie/${id}?language=es-ES`,{
        headers: {
          Authorization: `Bearer ${AuthorizationTmdb}`
        }
      })
      // console.log("DETALLE", data)
      setMovieId(data)
    } catch (error) {
      console.log(error)
    }
  }

  /* ************************** TRAILER MOVIE ************************************* */
  async function getTrailersMovies() {
    try {
      const {data} = await axios (`https://api.themoviedb.org/3/movie/${id}/videos`,{
        headers: {
          Authorization: `Bearer ${AuthorizationTmdb}`
        }
      })
      // console.log("TRAILER HOLAAA", data.results)
      setTrailers(data.results)
    } catch (error) {
      console.log(error)
    }
  }  
 /* ************************** FUNCTIONS ************************************* */  
  function searchTitleMovie (title) {
    getSearchMovies(title)
  }

  function changePage (page) {
  setPage(page)
}

 /* *************************************************************** */
  return {
  page,
  movies,
  getListMovies,
  // getRecommendationsMovies,
  // getNewMovies,
  // getPopularMovies,
  // getTopMovies,

  searchTitleMovie,
  getSearchMovies,

  getDetailMovieId,
  movieId,
  // detailMovieId,
  
  trailers,
  getTrailersMovies,
  changePage,
  totalPages
  
  } 
}  

