import React, { useState } from 'react';
import MovieDetails from './MovieDetails';

function MovieCard({ movie }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(true);
  };

  const handleClose = () => {
    setShowDetails(false);
  };

  return (
    <>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7191602387880055"
     crossorigin="anonymous"></script>
      <div className="card h-100 shadow-sm " onClick={handleClick} style={{ cursor: 'pointer' }}>
        <img
          src={movie.posterPath}
          className="card-img-top"
          alt={movie.title}
          style={{ height: '300px', objectFit: 'cover' }}
        />
        <div className="card-body ">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">Actors: {movie.actors}</p>
        </div>
      </div>
      {showDetails && <MovieDetails movie={movie} onClose={handleClose} />}
    </>
  );
}

export default MovieCard;
