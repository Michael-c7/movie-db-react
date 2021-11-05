import React, { useState, useEffect,useContext } from 'react';
import {UserContext} from "./Context"
import apiKey from "./apiKey"

export const useFetch = requestType => {
    const { 
        searchTerm,
        setLoading,
        setError,
        setMoviesData,
        setMovieDetails, 
        movieID
       } = useContext(UserContext)

    let clientID = `?api_key=${apiKey}`
    let searchQuery = `&query=${searchTerm}`
    let searchMovieUrl = "https://api.themoviedb.org/3/search/movie"
    let searchMovieDetailsUrl = `https://api.themoviedb.org/3/movie/`


      const fetchMovies = async requestType => {
        let url = "";
        
        if(requestType === "movies") {
          url = `${searchMovieUrl}${clientID}${searchQuery}`
        } else if(requestType === "movieDetails") {
          url = `${searchMovieDetailsUrl}${movieID}${clientID}`
        } else {
          url = ""
        }


        try {
          setLoading(true)
          let res = await fetch(`${url}`);
          let data = await res.json()
          setLoading(false)
          setError(false)
          setMoviesData(data.results || data)
        } catch(error) {
          setError(true)
          console.log(error)
        }
      }
      
    return {fetchMovies}
}
