import React, { Component } from 'react';
import SearchBar from './components/searchbar';
import './App.css';
import MovieResults from './components/movieresults';
import axios from 'axios'
import _ from 'lodash';
const Key = "e45beb4edca4d64ee6fceb06a1897610"
class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      movies: [],
      term: null
    }


  }
  componentWillMount(){
    this.movieSearch('the fast and the furious');
  }

  movieSearch(term){
    axios.get('https://api.themoviedb.org/3/search/movie/?api_key=e45beb4edca4d64ee6fceb06a1897610&query=' + term)
      .then((response) => {
        console.log(response)
        this.setState({movies:response.data.results}, function(){
          console.log(this.state);
        });
      })
      .catch((err) => {
        console.log(err)
      });


  }
  render() {
    const filmSearch = _.debounce((term) => {this.movieSearch(term)}, 300)
    return (
      <div>
      <h1 className="display-2">TMDB Search Engine</h1>
      <SearchBar onSearch={filmSearch}/>
      <MovieResults movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
// whatever you put a component tag on the app.js page you have to define any variable you want to use inside the tag
//  <something movie={movie}/> after that you can access {movie} through your components props params props.movie.etc
