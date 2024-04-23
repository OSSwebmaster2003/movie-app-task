import Slider from "react-slick";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import BannerCard from "./BannerCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <GrFormNext />
      </button>
    </div>
  );
};
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <GrFormPrevious />
      </button>
    </div>
  );
};

const BannerSlider = ({ bannerMovieItems }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <div className="bannerSlider">
      <Slider {...settings}>
        {bannerMovieItems?.map((item) => {
          return <BannerCard key={item.id} item={item} />;
        })}
      </Slider>
    </div>
  );
};

export default BannerSlider;
