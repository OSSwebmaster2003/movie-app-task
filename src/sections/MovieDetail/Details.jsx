import ReactStars from "react-stars";

const Details = ({ movie }) => {
  return (
    <section className="movie-details container">
      <div className="details-card">
        <h4>
          {movie?.status} : {movie?.release_date}
        </h4>
        <h1>{movie?.title}</h1>
        <div className="flex alignCenter">
          <ReactStars
            value={movie?.vote_average.toFixed(1) / 2}
            count={5}
            edit={false}
            size={24}
            color2={"#ffd700"}
          />
          <span>IMDB</span>
        </div>
        <div className="production flex">
          <label>Production companies :</label>
          {movie?.production_companies.map((company) => (
            <span key={company.id}>{company.name},</span>
          ))}
        </div>
        <p>{movie?.overview}</p>
        <div className="flex genres">
          {movie?.genres.map((genre) => (
            <span key={genre.id}>#{genre.name}</span>
          ))}
        </div>
        <a
          className="website"
          href={movie?.homepage}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit official website
        </a>
      </div>
      <button className="watch">Watch Trailer</button>
    </section>
  );
};

export default Details;
