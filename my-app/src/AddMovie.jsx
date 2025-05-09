import React, { useState } from 'react';

const AddMovie = ({ addMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie({ title, description, posterURL, rating: Number(rating) });
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating(0);
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px' }}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      <input value={posterURL} onChange={(e) => setPosterURL(e.target.value)} placeholder="Poster URL" required />
      <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} placeholder="Rating" min="0" max="5" step="0.1" required />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
