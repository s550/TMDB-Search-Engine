import React from 'react';

const MovieListItem = ({movie}) => {
  const Poster = "https://image.tmdb.org/t/p/w200/" + movie.poster_path;
  return(
    <li className="row exe">


          <div className="col-xs">
          <img className=" lefty" alt="poster img" src={Poster} />
          </div>
        <div className="col-xs">
        <h2 className="heady">{movie.title}</h2>
        <p className="descrip"><strong>Description:</strong> {movie.overview}</p>
        <h6>IMDB Rating: {movie.vote_average}</h6>
        </div>

  </li>
  );
}

export default MovieListItem;
// the imported varible movie is equal to data.results.[0,1,2,3.etc]
