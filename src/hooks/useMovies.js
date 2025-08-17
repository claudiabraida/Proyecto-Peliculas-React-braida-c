import axios from "axios"
/* °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°° */
import { useState } from "react"
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
  
  
  /* ************************** NEW MOVIES ************************************* */
  async function getNewMovies() {
    try {
      const {data } = await axios (`https://api.themoviedb.org/3/movie/now_playing?&page=${page}`,{
        headers: {
          Authorization: `Bearer ${AuthorizationTmdb}`
        }
      })
      console.log("ULTIMOS LANZAMIENTOS", data.results)
      setMovies(data.results)
      
      setPage(data.page)
      console.log("MOSTRAE PAGINASSSSS", data.page)
    } catch (error) {
      console.log(error)
    }
  }

  /* ************************** POPULAR MOVIES ************************************* */
  async function getPopularMovies() {
    try {
      const {data } = await axios (`https://api.themoviedb.org/3/movie/popular?language=es-ES&page=${page}`,{
        headers: {
          Authorization: `Bearer ${AuthorizationTmdb}`
        }
      })
      console.log("POPULAR-MAS", data.results)
      setMovies(data.results)
 
    } catch (error) {
      console.log(error)
    }
  }

  /* ************************** TOP MOVIES ************************************* */
  async function getTopMovies() {
    try {
      const {data} = await axios (`https://api.themoviedb.org/3/movie/top_rated?language=es-ES`,{
        headers: {
          Authorization: `Bearer ${AuthorizationTmdb}`
        }
      })
      console.log("TOP-PUNTUADAS", data.results)
      setMovies(data.results)
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
      console.log("SEARCH-BUSCAR", data.results)
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
      console.log("DETALLE", data)
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
      console.log("TRAILER HOLAAA", data.results)
      setTrailers(data.results)
    } catch (error) {
      console.log(error)
    }
  }  
 /* ************************** FUNCTIONS ************************************* */  
  function searchTitleMovie (title) {
    getSearchMovies(title)
  }

  

  function nextPage (page) {
    setPage(page + 1)
    if(page + 1 <= 0) {
      setPage(page)
    }
  }

  function prevPage (page) {
    setPage(page - 1)
    if(page - 1 <= 0) {
      setPage(page)
    }
  }
 /* *************************************************************** */
  return {
  page,
  movies,

  // getRecommendationsMovies,
  getNewMovies,
  getPopularMovies,
  getTopMovies,

  searchTitleMovie,
  getSearchMovies,

  getDetailMovieId,
  movieId,
  // detailMovieId,
  
  trailers,
  getTrailersMovies,
  nextPage,
  prevPage
  
  } 
}  

