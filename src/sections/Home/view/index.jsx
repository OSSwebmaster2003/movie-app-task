import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import "../home.css";
// api
import tmdbApi, { movieType } from "../../../api/tmdbApi";
import Movies from "../Movies/Movies";

export default function HomeView() {
  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });
        setMovieItems(response.results);
      } catch {
        console.log("error fetching movies");
      }
    };
    getMovies();
  }, []);

  return (
    <div className="home">
      <Banner bannerMovieItems={movieItems.slice(1, 4)} />
      <Movies movies={movieItems} />
    </div>
  );
}
