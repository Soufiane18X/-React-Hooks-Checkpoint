

const MovieCard = ({ movie }) => (
  <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '250px' }}>
    <img src={movie.posterURL} alt={movie.title} style={{ width: '100%' }} />
    <h2>{movie.title}</h2>
    <p>{movie.description}</p>
    <p>⭐ {movie.rating}</p>
  </div>
);

export default MovieCard;
