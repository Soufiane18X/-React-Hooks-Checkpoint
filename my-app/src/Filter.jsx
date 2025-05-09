

const Filter = ({ setFilterTitle, setFilterRating }) => {
  return (
    <div style={{ margin: '20px' }}>
      <input
        type="text"
        placeholder="Search by title..."
        onChange={(e) => setFilterTitle(e.target.value)}
      />
      <input
        type="number"
        min="0"
        max="5"
        step="0.1"
        placeholder="Minimum rating"
        onChange={(e) => setFilterRating(Number(e.target.value))}
      />
    </div>
  );
};

export default Filter;
