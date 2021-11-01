import React, { useState, useEffect,useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import {UserContext} from "./Context"

import apiKey from "./apiKey"
import Search from './Search'
import Movies from "./Movies"
import MovieDetails from "./MoviesDetails"
import Loading from "./Loading"
import Movie from './Movie';
import Error from './Error';


function App() {
  const {
    searchTerm, setSearchTerm,
    moviesData, setMoviesData,
    loading, setLoading,
    error, setError,
   } = useContext(UserContext)

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
            <Search/>
            <Movies/>
          </Route>

          <Route path="/movie/:id" exact>
            <MovieDetails/>
          </Route>
        </div>
      </Router>
  );
}

export default App;
