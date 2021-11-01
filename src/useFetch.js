import React, { useState, useEffect,useContext } from 'react';
import {UserContext} from "./Context"
import apiKey from "./apiKey"

export const useFetch = () => {
    const { 
        setMovieID,
        searchTerm,
        setLoading,
        setError, } = useContext(UserContext)

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
          searchTerm(true)
          let res = await fetch(`${url}`);
          let data = await res.json()
          setLoading(false)
          searchTerm(false)
          searchTerm(data.results)
        } catch(error) {
          setError(true)
          console.log(error)
        }
      }

    return "state value to use elsewhere"
}
