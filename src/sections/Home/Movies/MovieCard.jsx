import { Card } from "antd";
import apiConfig from "../../../api/apiConfig";
import { Link } from "react-router-dom";
import { GrFormNextLink } from "react-icons/gr";

const MovieCard = ({ movie }) => {
  const poster = apiConfig.originalImage(movie.poster_path);
  return (
    <Link to={`/movie/${movie.id}`}>
      <Card
        style={{
          width: "100%",
          padding: "4px",
          background: "inherit",
          height: "300px",
        }}
        cover={
          <img
            alt={movie.title}
            src={poster}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "0px",
            }}
          />
        }
      >
        <div className="flexBetween card-body">
          <h3>{movie.title}</h3>
          <button>
            <GrFormNextLink />
          </button>
        </div>
      </Card>
    </Link>
  );
};

export default MovieCard;
