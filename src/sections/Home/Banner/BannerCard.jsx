import { Link } from "react-router-dom";
import apiConfig from "../../../api/apiConfig";

const BannerCard = ({ item }) => {
  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  return (
    <div className="box">
      <div className="coverImg">
        <img src={background} alt="" />
      </div>
      <div className="details">
        <div className="content flex">
          <div className="details row">
            <h1>{item.title}</h1>
          </div>
          <div className="rating flex">
            <span>IMDB</span>
            <label className="imdb">{item.vote_average.toFixed(1)}</label>
            <span>Released</span>
            <label>{item.release_date}</label>
          </div>
          <p>{item.overview}</p>
          <div className="flex buttons">
            <button className="about-btn">
              <Link to={`/movie/${item.id}`}>About Movie</Link>
            </button>
            <button className="outlined-btn">Watch trailer</button>
          </div>
        </div>
        <div className="poster">
          <img src={apiConfig.w500Image(item.poster_path)} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
