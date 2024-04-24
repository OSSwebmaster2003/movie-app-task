import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import "../home.css";
// api
import tmdbApi, { movieType } from "../../../api/tmdbApi";
import Movies from "../Movies/Movies";
import { useParams } from "react-router-dom";

export default function HomeView() {
  const [movieItems, setMovieItems] = useState([]);
  const { keyword } = useParams();

  useEffect(() => {
    const getMovies = async () => {
      let response = null;
      if (keyword === undefined) {
        const params = { page: 1 };
        try {
          response = await tmdbApi.getMoviesList(movieType.popular, {
            params,
          });
          setMovieItems(response.results);
          console.log(response);
        } catch (error) {
          console.log("error fetching movies", error);
        }
      } else {
        const params = { query: keyword };
        try {
          response = await tmdbApi.search("movie", { params });
          setMovieItems(response.results);
        } catch (error) {
          console.log("error search movie", error);
        }
      }
    };
    getMovies();
  }, [keyword]);

  return (
    <div className="home">
      <Banner />
      <Movies movies={movieItems} keyword={keyword} />
    </div>
  );
}
