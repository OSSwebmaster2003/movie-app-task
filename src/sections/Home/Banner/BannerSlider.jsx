import Slider from "react-slick";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import BannerCard from "./BannerCard";

import tmdbApi, { category, movieType } from "../../../api/tmdbApi";
import apiConfig from "../../../api/apiConfig";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

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

const BannerSlider = () => {
  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });
        setMovieItems(response.results.slice(1, 4));
      } catch {
        console.log("error fetching movies");
      }
    };
    getMovies();
  }, []);

  console.log(movieItems);

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
        {movieItems?.map((item) => {
          return <BannerCard key={item.id} item={item} />;
        })}
      </Slider>
    </div>
  );
};

export default BannerSlider;
