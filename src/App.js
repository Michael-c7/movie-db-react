import React, { useState, useEffect,useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import {UserContext} from "./Context"
import { useFetch } from './useFetch';

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

  //  const {fetchMovies} = useFetch()

  
  // useEffect(() => {
  //   fetchMovies("movies")
  // }, [searchTerm])




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
