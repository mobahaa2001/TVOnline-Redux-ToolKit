import { ALLMOVIES, MovieAPI } from '../types/moviesType'
import axios from 'axios'

export const getAllMovie = () => {
  return async (dispatch) => {
    const res = await axios.get(MovieAPI)
    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    })
  }
}

export const getMovieSearch = (word) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=84857573680465ba633655e7acf3cadb&language=en-US&query=${word}`,
    )
    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    })
  }
}

export const getPage = (page) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=84857573680465ba633655e7acf3cadb&language=en&page=${page}`,
    )
    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    })
  }
}
