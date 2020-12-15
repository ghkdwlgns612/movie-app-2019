import React from "react";
import Prototypes from "prop-types";
import "./Movies.css";

function Movie({id, year, title, summary, poster, genres}){
    return (
    <div className="movie">
        <img className="image" src={poster} alt={title} title={title}></img>
        <div className="movie_data">
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <ul className="movie_genre">{genres.map((genre, index) =>(
            <li key={index} className="genre">{genres[index]}</li>
        ))}</ul>
        <p className="movie_summary">{summary}</p>

        </div>
    </div>)
}

Movie.prototype = {
    id : Prototypes.number.isRequired,
    year : Prototypes.number.isRequired,
    title : Prototypes.string.isRequired,
    summary :  Prototypes.string.isRequired,
    poster : Prototypes.string.isRequired,
    genres : Prototypes.arrayOf(Prototypes.stirng).isRequired
};

export default Movie;