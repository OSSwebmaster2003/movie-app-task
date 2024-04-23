import BannerSlider from "./BannerSlider";
import "./banner.css";

const Banner = ({ bannerMovieItems }) => {
  return (
    <section className="bannerSection">
      <BannerSlider bannerMovieItems={bannerMovieItems} />
    </section>
  );
};

export default Banner;
