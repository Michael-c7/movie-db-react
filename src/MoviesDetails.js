import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import {UserContext} from "./Context"


const MoviesDetails = () => {
    const { movieDetails,movieID,setMovieID } = useContext(UserContext)
        const {
            id,
            genres,
            original_title,
            overview,
            title,
            poster_path,
            vote_average,
            runtime,release_date,
            spoken_languages,
            status,
        } = movieDetails;
        
        const genresArray = genres.map((genre) => genre.name).join(", ")
        const spokenLanguagesArray = spoken_languages.map((genre) => genre.english_name).join(", ")

        const getTitle = _ => {
            if(title === original_title) {
               return title;
            } else {
                return `${title} (${original_title})`;
            }
        }

        useEffect(() => {
            setMovieID(id)
        }, [])

        return (
            <section className="movie-details">
                <header className="movie-details__header">
                    <div>
                        <h2>{title ? getTitle() : "no title available"}</h2>
                        <h3>{genresArray}</h3>
                    </div>
                    <div>
                        <div><span className="movie-details__score">{vote_average}</span> / 10</div>
                    </div>
                </header>
                <div className="movie-details__main">
                    <img className="movie-details__img" src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : "https://skirtingboardsdirect.com/wp-content/uploads/2014/12/Fallback-Image-400x400.png"} alt={title}/>
                    <div className="movie_details__details">
                        <div>
                            <h2>About the Movie</h2>
                            <p>{overview}</p>
                        </div>

                        <div className="movie_details__extra-details">
                            <span>{runtime} minutes long </span>
                            <span> · </span>
                            <span>{status ? release_date ? `Release Date: ${release_date.substr(0,4)}` : "NaN" : "Not released"}</span>
                        </div>

                        <div className="languages-spoken">Languages spoken: {spokenLanguagesArray}</div>
                    </div>
                </div>

                <button className="btn"><Link to="/">Go Home</Link></button>
            </section>
        )
    

}

export default MoviesDetails

/*


*/