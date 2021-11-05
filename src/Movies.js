import React, { useContext } from 'react'
import { useFetch } from './useFetch'
import Movie from './Movie'
import Loading from "./Loading"
import Error from "./Error"
import {UserContext} from "./Context"

const Movies = () => {
    const {  error, loading } = useContext(UserContext)
    // get data from useFetch here
    const {data:moviesData} = useFetch()

    if(loading) {
        return <Loading/>
    } else if(error) {        
        return <Error/>
    } else {
        if(moviesData?.length > 0) {
            return (
                <ul className="movies">
                    {moviesData.map((item) => {
                        return <Movie {...item} key={item.id}/>
                    })}
                </ul>
            )
        } 
        return ""
    }
}

export default Movies
