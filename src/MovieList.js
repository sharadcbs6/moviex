import React from 'react';
import { motion } from 'framer-motion';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <div className="container-fluid">
          <motion.div 
            className="row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            {movies.map((movie) => (
              <div className="col-lg-4" key={movie.id}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default MovieList;
