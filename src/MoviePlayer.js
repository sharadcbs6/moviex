import React from 'react';
import YouTube from 'react-youtube';

function MoviePlayer({ videoId }) {
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: '0', overflow: 'hidden' }}>
      <YouTube videoId={videoId} opts={opts} className="position-absolute top-0 start-0 w-100 h-100" />
    </div>
  );
}

export default MoviePlayer;
