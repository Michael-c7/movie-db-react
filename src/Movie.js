import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {UserContext} from "./Context"

const Movie = ({...item}) => {
    const { setMovieID } = useContext(UserContext)

    const {
        id,
        title,
        release_date,
        vote_average,
        poster_path,
        } = item;

    return (
        <li className="movie">
            <Link to={`/movie/${id}`} onClick={() => setMovieID(id)}>
                <img className="movie__img" src={ poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : "https://skirtingboardsdirect.com/wp-content/uploads/2014/12/Fallback-Image-400x400.png"} alt={title}/>
            </Link>
            <div className="movie__overlay">
                <div className="overlay__info">
                  <h2 className="overlay__name">{title}</h2>
                  <h3 className="overlay__released">Released: {release_date ? release_date.substr(0,4) : "NaN"}</h3>
                </div>
                <div className="overlay__score">{vote_average} / 10</div>
            </div>
        </li>
    )
}

export default Movie