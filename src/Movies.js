import React from 'react'
import Movie from './Movie'
import Loading from "./Loading"
import Error from "./Error"


const Movies = (props) => {
    const {moviesData, error, loading} = props;

    if(loading) {
        return <Loading/>
    } else if(error) {        
        return <Error/>
    } else {


        return (
            <ul className="movies">
                {moviesData.map((item) => {
                    return <Movie {...item} key={item.id}/>
                })}
            </ul>
        )
    }
}

export default Movies
