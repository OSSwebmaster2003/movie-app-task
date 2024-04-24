import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Banner from "../Banner/Banner";
import Movies from "../Movies/Movies";
import useMovieStore from "../../../store/movies";
import Spinner from "../../../components/Spinner/Spinner";
import "../home.css";
import { useEffect } from "react";

export default function HomeView() {
  const { keyword } = useParams();
  const { fetchMovies } = useMovieStore();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["movies"],
    queryFn: () => fetchMovies(keyword),
  });

  useEffect(() => {
    refetch();
  }, [keyword, refetch]);

  if (isError) return <h1 style={{ color: "white" }}>Something went wrong</h1>;

  if (isLoading) return <Spinner />;
  return (
    <div className="home">
      <Banner />
      <Movies movies={data} keyword={keyword} />
    </div>
  );
}
