const PosterInfo = () => {
  return (
    <div className="movie-poster-hover">
      <p>{item.title || item.name}</p>
      <p>{item.genre_ids}</p>
    </div>
  );
};

export default PosterInfo;
