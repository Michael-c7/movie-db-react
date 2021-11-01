import React, { useState, useEffect,useContext } from 'react';
import {UserContext} from "./Context"
import apiKey from "./apiKey"

export const useFetch = requestType => {
    const { 
        searchTerm,
        setLoading,
        setError,
        setMovieDetails, 
        movieID
       } = useContext(UserContext)

    let clientID = `?api_key=${apiKey}`
    let searchQuery = `&query=${searchTerm}`
    let searchMovieUrl = "https://api.themoviedb.org/3/search/movie"
    let searchMovieDetailsUrl = `https://api.themoviedb.org/3/movie/`

    const fetchMovies = async _ => {
        let url = "";

        if(requestType === "movies") {
          url = `${searchMovieUrl}${clientID}${searchQuery}`
        } else if(requestType === "movieDetails") {
          url = `${searchMovieDetailsUrl}${movieID}${clientID}`
        } else {
          url = "";
        }

        try {
          // IDK why this is working, but it will do for now
          if(!searchTerm) {
            // searchTerm(_ => {})
          }
          searchTerm(true)
          let res = await fetch(`${url}`);
          let data = await res.json()
          setLoading(false)
          searchTerm(false)

          if(requestType === "movies") {
            searchTerm(data.results)
          } else if(requestType === "movieDetails") {
            setMovieDetails(data)
          }
        } catch(error) {
          setError(true)
          console.log(error)
        }
      }

      // if(requestType === "movies") {
      //   useEffect(() => {
      //     // fetchMovies()
      //   }, [searchTerm])
      // }
      
    // return "state value to use elsewhere"
}
