import BannerSlider from "./BannerSlider";
import "./banner.css";
import useMovieStore from "../../../store/movies";
import { useQuery } from "@tanstack/react-query";

const Banner = () => {
  const { fetchBannerMovies } = useMovieStore();

  const { data } = useQuery({
    queryKey: ["banner-movies"],
    queryFn: () => fetchBannerMovies(),
  });

  return (
    <section className="bannerSection">
      <BannerSlider bannerMovieItems={data} />
    </section>
  );
};

export default Banner;
