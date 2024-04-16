import React, { useState } from 'react';
import MoviePlayer from './MoviePlayer';
import MoviePlayerPopup from './MoviePlayerPopup'; 

function MovieDetails({ movie, onClose }) {
  const [showPlayerPopup, setShowPlayerPopup] = useState(false); 
  return (
    <div className="modal show" tabIndex="-1" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header bg-dark text-light">
            <h5 className="modal-title">{movie.title}</h5>
            <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-6">
                <img
                  src={movie.posterPath}
                  className="img-fluid rounded"
                  alt={movie.title}
                />
              </div>
              <div className="col-md-6">
                <MoviePlayer videoId={movie.trailerId} />
                <p className="mt-3"><strong><span style={{color:'red'}}>A</span>ctors:</strong> {movie.actors}</p>
                <p><strong><span style={{color:'red'}}>O</span>verview:</strong><br/>{movie.overview}</p>
                <button className="btn btn-primary" onClick={() => setShowPlayerPopup(true)}>Play Movie</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showPlayerPopup && <MoviePlayerPopup movieId={movie.id} onClose={() => setShowPlayerPopup(false)} />}
    </div>
  );
}

export default MovieDetails;
