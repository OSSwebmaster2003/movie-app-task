import { Helmet } from "react-helmet-async";
import MovieDetailView from "../sections/MovieDetail/view";

const MovieDetail = () => {
  return (
    <>
      <Helmet>
        <title>Movie Detail</title>
      </Helmet>

      <MovieDetailView />
    </>
  );
};

export default MovieDetail;
