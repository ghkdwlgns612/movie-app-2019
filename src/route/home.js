import React from "react";
import axios from "axios";
import Movie from "../components/movies";
import "./Home.css";

class Home extends React.Component{

  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading: false});
  }
 
  componentDidMount(){
   this.getMovies();
  }

  render(){
    const { isLoading, movies } = this.state;

    return(
      <section className="container">
      {isLoading ? <div className="loader">
        <span className="loader_text">Loading...</span>
      </div> : 
      <div className="movies">
     {movies.map(movies => (
      <Movie  
      key={movies.id}
      id={movies.id}
      summary={movies.summary}
      year={movies.year}
      poster={movies.medium_cover_image} 
      title={movies.title}
      genres={movies.genres} />
    ))}
      </div>
    }
    </section>
)
  }
}

export default Home;