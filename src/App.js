import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import apiKey from "./apiKey"
import Search from './Search'
import Movies from "./Movies"
import MovieDetails from "./MoviesDetails"
import Loading from "./Loading"
import Movie from './Movie';
import Error from './Error';


function App() {
  const [searchTerm, setSearchTerm] = useState("ip man")
  const [moviesData, setMoviesData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)


  let clientID = `?api_key=${apiKey}`
  let searchQuery = `&query=${searchTerm}`
  let searchMovieUrl = "https://api.themoviedb.org/3/search/movie"


  const fetchMovies = async _ => {
    let url = "";
    url = `${searchMovieUrl}${clientID}${searchQuery}`
    try {
      // IDK why this is working, but it will do for now
      if(!searchTerm) {
        // searchTerm(_ => {})
      }
      setLoading(true)
      let res = await fetch(`${url}`);
      let data = await res.json()
      setLoading(false)
      setError(false)
      setMoviesData(data.results)
    } catch(error) {
      setError(true)
      console.log(error)
    }
  }



  useEffect(() => {
    fetchMovies()
  }, [searchTerm])




  return (
      <Router>
        <div className="container">
          <Route path="/" exact>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            {<Movies moviesData={moviesData} error={error} loading={loading}/>}
          </Route>

          <Route path="/movie/:id" exact>
            <MovieDetails/>
          </Route>
        </div>
      </Router>
  );
}

export default App;
