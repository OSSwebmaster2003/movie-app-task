import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useMovieStore from "../../../store/movies";
import DetailBanner from "../DetailBanner";
import Details from "../Details";
import Spinner from "../../../components/Spinner/Spinner";
import "../movieDetail.css";

const MovieDetailView = () => {
  const { category, id } = useParams();
  const { fetchMovieDetail, isLoading } = useMovieStore();

  const { data, isError, refetch } = useQuery({
    queryKey: ["movie-detail"],
    queryFn: () => fetchMovieDetail(category, id),
  });

  useEffect(() => {
    refetch();
  }, [category, id, refetch]);

  if (isError) return <h1 style={{ color: "white" }}>Something went wrong</h1>;

  if (isLoading) return <Spinner />;

  return (
    <div className="movie-detail">
      <DetailBanner movie={data} />
      <Details movie={data} />
    </div>
  );
};

export default MovieDetailView;
