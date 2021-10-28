import React, { useState, useEffect } from 'react';
// import { Router, Route, Switch } from "react-router";
import apiKey from "./apiKey"
import Search from './Search'
import Movies from "./Movies"
import Loading from "./Loading"

function App() {
  const [searchTerm, setSearchTerm] = useState("batman")
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
        searchTerm(_ => {})
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
    <div className="container">
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      {<Movies moviesData={moviesData} error={error} loading={loading}/>}
    </div>
  );
}

export default App;
