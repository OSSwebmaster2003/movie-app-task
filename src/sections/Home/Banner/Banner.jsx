import { useEffect, useState } from "react";
import BannerSlider from "./BannerSlider";
import "./banner.css";
import tmdbApi from "../../../api/tmdbApi";

const Banner = () => {
  const [bannerMovieItems, setBannerMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList("popular", {
          params,
        });
        setBannerMovieItems(response.results.slice(0, 4));
      } catch (error) {
        console.log("error fetching banner items", error);
      }
    };
    getMovies();
  }, []);
  return (
    <section className="bannerSection">
      <BannerSlider bannerMovieItems={bannerMovieItems} />
    </section>
  );
};

export default Banner;
