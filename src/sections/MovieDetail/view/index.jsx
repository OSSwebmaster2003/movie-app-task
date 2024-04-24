import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailBanner from "../DetailBanner";
import Details from "../Details";
import "../movieDetail.css";
// api
import tmdbApi from "../../../api/tmdbApi";

const MovieDetailView = () => {
  const [item, setItem] = useState(null);
  const { category, id } = useParams();

  useEffect(() => {
    try {
      const getDetail = async () => {
        const response = await tmdbApi.detail(category, id, { params: {} });
        setItem(response);
        window.scrollTo(0, 0);
      };
      getDetail();
    } catch (error) {
      console.log("fetching movie detail", error);
    }
  }, [category, id]);

  return (
    <div className="movie-detail">
      <DetailBanner movie={item} />
      <Details movie={item} />
    </div>
  );
};

export default MovieDetailView;
