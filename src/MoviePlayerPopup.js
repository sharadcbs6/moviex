import React from 'react';
import { motion } from 'framer-motion';

function MoviePlayerPopup({ movieId, onClose }) {
  const movieURL = `https://vidsrc.to/embed/movie/${movieId}`;

  
  

  return (
    <motion.div 
      className="modal show" 
      tabIndex="-1" 
      style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="modal-dialog modal-lg" style={{ maxHeight: '150vh' }}> {/* Adjust the maxHeight here */}
        <div className="modal-content">
          <div className="modal-header bg-dark text-light">
            <h5 className="modal-title">Play Movie</h5>
            <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
          </div>
          <div className="modal-body" style={{ height: '80vh', overflowY: 'auto' }}> {/* Adjust the height here */}
  <div className="embed-responsive embed-responsive-16by9">
  <iframe 
  
  src={movieURL} 
  title="Movie Player" 
  className="embed-responsive-item" 
  width="100%" // Set width to 100% of the container
  style={{ border: 'none', height: '75vh' }} // Increase the height here
  allowFullScreen // Add allowFullScreen attribute
></iframe>

  </div>
</div>

        </div>
      </div>
    </motion.div>
  );
}

export default MoviePlayerPopup;
