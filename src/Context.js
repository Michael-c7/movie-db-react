import React, {useState,useEffect,createContext } from "react";
import apiKey from "./apiKey"


let clientID = `?api_key=${apiKey}`
let searchMovieDetailsUrl = `https://api.themoviedb.org/3/movie/`


const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [test, setTest] = useState("test value")
    const [movieID, setMovieID] = useState(365222)
    const [movieDetails, setMovieDetails] = useState([])

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
        <UserContext.Provider value={{ test, setMovieID, movieDetails }}>
        {children}
        </UserContext.Provider>
    )
}

export  {UserProvider, UserContext}
