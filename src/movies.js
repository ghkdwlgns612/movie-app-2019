import React from "react";
import Prototypes from "prop-types"

function Movie({id, year, title, summary, poster}){
    return <h1>{title}</h1>
}

Movie.prototype = {
    id : Prototypes.number.isRequired,
    year : Prototypes.number.isRequired,
    title : Prototypes.string.isRequired,
    summary :  Prototypes.string.isRequired,
    poster : Prototypes.string.isRequired
};

export default Movie;