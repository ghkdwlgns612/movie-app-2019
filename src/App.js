import React from "react";
import axios from "axios";
import Movie from "./movies";

class App extends React.Component{

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
    return <div>{isLoading ? "Loading..." : movies.map(movies => {
      return <Movie 
      key={movies.id}
      id={movies.id}
      summary={movies.summary}
      year={movies.year}
      poster={movies.medium_cover_image} 
      title={movies.title} />
    })}</div>;
  }
}

export default App;