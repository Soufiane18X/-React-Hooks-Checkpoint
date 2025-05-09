
import './App.css'

import React, { useState } from 'react';
// import MovieList from './components/MovieList';
// import Filter from './components/Filter';
// import AddMovie from './components/AddMovie';
import MovieList from './MovieList';
import Filter from './Filter';
import AddMovie from './AddMovie';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology.",
      posterURL: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
      rating: 4.8
    },
    {
      title: "Interstellar",
      description: "A team of explorers travel through a wormhole in space.",
      posterURL: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
      rating: 4.5
    }
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState(0);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRating
  );

  return (
    <div>
      <h1>🎬 My Movie App</h1>
      <Filter
        setFilterTitle={setFilterTitle}
        setFilterRating={setFilterRating}
      />
      <AddMovie addMovie={addMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
