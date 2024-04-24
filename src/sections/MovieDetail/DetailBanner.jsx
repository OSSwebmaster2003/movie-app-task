import apiConfig from "../../api/apiConfig";

const DetailBanner = ({ movie }) => {
  const bannerImg = apiConfig.originalImage(
    movie?.backdrop_path ? movie?.backdrop_path : movie?.poster_path
  );

  return (
    <section
      className="banner"
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    ></section>
  );
};

export default DetailBanner;
