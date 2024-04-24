import { useEffect } from "react";
import BannerSlider from "./BannerSlider";
import "./banner.css";
import useMovieStore from "../../../store/movies";

const Banner = () => {
  const { bannerMovieItems, isLoading, error, fetchBannerMovies } =
    useMovieStore();

  useEffect(() => {
    fetchBannerMovies();
  }, []);
  return (
    <section className="bannerSection">
      <BannerSlider bannerMovieItems={bannerMovieItems} />
    </section>
  );
};

export default Banner;
