import React, {useState,useEffect,createContext } from "react";
import apiKey from "./apiKey"


let clientID = `?api_key=${apiKey}`
let searchMovieDetailsUrl = `https://api.themoviedb.org/3/movie/`


const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [movieID, setMovieID] = useState(365222)
    const [movieDetails, setMovieDetails] = useState([])
    const [searchTerm, setSearchTerm] = useState("ip man")
    const [moviesData, setMoviesData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)


    const fetchMoviesDetails = async _ => {
        let url = "";
        url = `${searchMovieDetailsUrl}${movieID}${clientID}`
    
        try {
            let res = await fetch(`${url}`);
            let data = await res.json()
            setMovieDetails(data)
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchMoviesDetails()
    }, [movieID])


    return (
        <UserContext.Provider value={{
         setMovieID, movieDetails,
         searchTerm, setSearchTerm,
          moviesData, setMoviesData,
          loading, setLoading,
          error, setError, }}>
        {children}
        </UserContext.Provider>
    )
}

export  {UserProvider, UserContext}
