import React, { useContext } from 'react'
import Movie from './Movie'
import Loading from "./Loading"
import Error from "./Error"
import {UserContext} from "./Context"

const Movies = () => {
    const { moviesData, error, loading } = useContext(UserContext)

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
