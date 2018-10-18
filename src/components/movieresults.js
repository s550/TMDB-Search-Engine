import React from 'react';
import MovieListItem from './movieitem';

const MovieResults = (props) => {
  const List = props.movies.map(movie => {
    return(
      <MovieListItem key={movie.id} movie={movie}/>
    );
  });

  return(
    <ul className="container">
      {List}
    </ul>
  );
};


export default MovieResults;
