import React from 'react'
import { Row } from 'react-bootstrap'
import CardMovie from './CardMovie'
import Paginations from './Pagination'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { getAllMovie } from '../redux/actions/movieAction'

const MoviesList = () => {
  const [movies, setMovies] = useState([])

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllMovie())
  }, [])
  const dataMovies = useSelector((state) => state.movies)

  useEffect(() => {
    setMovies(dataMovies)
  }, [dataMovies])
  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (
        movies.map((mov) => {
          return <CardMovie key={mov.id} mov={mov} />
        })
      ) : (
        <h3 className="text-center p-3">
          There are no movies that matc hed your query.
        </h3>
      )}
      {movies.length >= 1 ? <Paginations /> : null}
    </Row>
  )
}

export default MoviesList
