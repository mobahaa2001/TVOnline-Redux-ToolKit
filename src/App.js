import React from 'react'
import { Container } from 'react-bootstrap'
import NavBar from './components/NavBar'
import MoviesLists from './components/MoviesList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MovieDetails from './components/MovieDetails'
import Footer from './components/Footer'


function App() {


  return (
    <div className="font color-body">
      <NavBar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesLists />}></Route>
            <Route path="/movie/:id" element={<MovieDetails />}></Route>
          </Routes>
        </BrowserRouter>
        <Footer />
      </Container>
    </div>
  )
}

export default App
