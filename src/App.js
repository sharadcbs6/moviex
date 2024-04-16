import React, { useState,useEffect } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';



function App() {
  const [movies, setMovies] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPopularMovies() {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/popular?api_key=20d49ce2ad2f63d7367ed04d216e345d'
        );
        const data = await response.json();
        const moviesWithDetails = await Promise.all(
          data.results.map(async (movie) => {
            const creditsResponse = await fetch(
              `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=20d49ce2ad2f63d7367ed04d216e345d`
            );
            const creditsData = await creditsResponse.json();

            const videosResponse = await fetch(
              `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=20d49ce2ad2f63d7367ed04d216e345d`
            );
            const videosData = await videosResponse.json();
            const trailer = videosData.results.find(
              (video) => video.type === 'Trailer' && video.site === 'YouTube'
            );

            return {
              ...movie,
              posterPath: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
              actors: creditsData.cast.slice(0, 3).map((actor) => actor.name).join(', '),
              trailerId: trailer ? trailer.key : null,
            };
          })
        );

        setMovies(moviesWithDetails);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    }

    fetchPopularMovies();
  }, []);

  const handleSearch = async (query) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=20d49ce2ad2f63d7367ed04d216e345d&query=${query}`);
      const data = await response.json();

      const moviesWithDetails = await Promise.all(data.results.map(async (movie) => {
        const creditsResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=20d49ce2ad2f63d7367ed04d216e345d`);
        const creditsData = await creditsResponse.json();

        // Fetch trailer details
        const videosResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=20d49ce2ad2f63d7367ed04d216e345d`);
        const videosData = await videosResponse.json();
        const trailer = videosData.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');

        return {
          ...movie,
          posterPath: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          actors: creditsData.cast.slice(0, 3).map(actor => actor.name).join(', '),
          trailerId: trailer ? trailer.key : null,
        };
      }));

      setMovies(moviesWithDetails);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  return (
    <motion.div
     className="container-fluid"
      style={{ backgroundColor: '#f0f0f0', minHeight: '100vh' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}>
        
      <div className="container ">
        <h1 className="text-center mb-4 py-4 "><span style={{color: 'red'}}>M</span>oviex <br />Search</h1>

        <SearchBar onSearch={handleSearch} />
        
        <MovieList movies={movies} />
        <div className="row">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            movies.map((movie) => (
          //     <div className="col-lg-4" key={movie.id}>
          //       <div className="card h-100 shadow-sm" style={{ cursor: 'pointer' }}>
          //         <img
          //           src={movie.posterPath}
          //           className="card-img-top"
          //           alt={movie.title}
          //           style={{ height: '300px', objectFit: 'cover' }}
          //         />
                  // <div className="card-body">
                  //   <h5 className="card-title">{movie.title}</h5>
                  //   <p className="card-text">Actors: {movie.actors}</p>
                  // </div>
              //   </div>
              // </div>
              <div></div>
            ))

          )}
          </div>
      </div>
      <footer className="footer mt-auto py-3 bg-dark text-white">
  <div className="text-center">
    {/* Footer content goes here */}
    <p>&copy; 2024 <span style={{color: 'red'}}>M</span>oviex Search| Designed by Sharad Yadav</p>
    <a href="https://www.linkedin.com/in/sharad-yadav-6717a6220/" target="_blank" rel="noopener noreferrer" className="text-white">
      <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '24px' }} />
    </a>
  </div>
</footer>


    </motion.div>
  );
}

export default App;
