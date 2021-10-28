import React from 'react'

const Movie = ({...item}) => {
    const {
        id,
        title,
        release_date,
        vote_average,
        poster_path,
        } = item;

    return (
        <li className="movie">
            <a href="/">
                <img className="movie__img" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>
            </a>
            <div className="movie__overlay">
                <div className="overlay__info">
                  <h2 className="overlay__name">{title}</h2>
                  <h3 className="overlay__released">Released: {release_date.substr(0,4) ? release_date.substr(0,4) : "NaN"}</h3>
                </div>
        
                <div className="overlay__score">{vote_average} / 10</div>
            </div>
        </li>
    )
}

export default Movie
