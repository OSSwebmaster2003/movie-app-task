import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Banner from "../Banner/Banner";
import Movies from "../Movies/Movies";
import useMovieStore from "../../../store/movies";
import "../home.css";

export default function HomeView() {
  const { keyword: routeKeyword } = useParams();
  const { movieItems, keyword, isLoading, error, fetchMovies } =
    useMovieStore();
  useEffect(() => {
    fetchMovies(routeKeyword);
  }, [routeKeyword, fetchMovies]);

  return (
    <div className="home">
      <Banner />
      <Movies movies={movieItems} keyword={keyword} />
    </div>
  );
}
