import { ALLMOVIES } from '../types/moviesType'

const initalValue = { movies: [], pageCount: 0 }
export const MovieReducer = (state = initalValue, action) => {
  switch (action.type) {
    case ALLMOVIES:
      return { movies: action.data, pageCount: action.pages }
    default:
      return state
  }
}
