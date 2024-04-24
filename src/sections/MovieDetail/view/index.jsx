import { useEffect } from "react";
import useMovieStore from "../../../store/movies";
import { useParams } from "react-router-dom";
import DetailBanner from "../DetailBanner";
import Details from "../Details";
import "../movieDetail.css";

const MovieDetailView = () => {
  const { category, id } = useParams();
  const { fetchMovieDetail, movieDetail, isLoading, error } = useMovieStore();

  useEffect(() => {
    fetchMovieDetail(category, id);
  }, [category, id]);

  return (
    <div className="movie-detail">
      <DetailBanner movie={movieDetail} />
      <Details movie={movieDetail} />
    </div>
  );
};

export default MovieDetailView;
