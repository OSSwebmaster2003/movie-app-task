import { IoSearch } from "react-icons/io5";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";
import "./movies.css";
import { useCallback, useEffect, useState } from "react";

const Movies = ({ movies, keyword }) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState(keyword ? keyword : "");

  const search = useCallback(() => {
    if (inputValue.trim().length > 0) {
      navigate(`/movie/search/${inputValue}`);
    }
  }, [inputValue, navigate]);

  useEffect(() => {
    const enterEvent = (e) => {
      e.preventDefault();
      if (e.keyCode === 13) {
        search();
      }
    };
    document.addEventListener("keyup", enterEvent);
    return () => {
      document.removeEventListener("keyup", enterEvent);
    };
  }, [inputValue, search]);
  return (
    <section className="movies container">
      <div className="section-header flexBetween">
        <h1>Trending Movies</h1>
        <div className="search-wrapper flexBetween">
          <input
            type="text"
            placeholder="search..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button>
            <IoSearch />
          </button>
        </div>
      </div>
      <div className="section-body">
        <Row gutter={16}>
          {movies.map((movie) => (
            <Col
              xs={24}
              sm={12}
              md={8}
              lg={6}
              xxl={4}
              key={movie.id}
              style={{ marginTop: "16px" }}
            >
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Movies;
