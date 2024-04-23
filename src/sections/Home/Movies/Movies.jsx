import { IoSearch } from "react-icons/io5";
import "./movies.css";
import { Col, Row } from "antd";
import MovieCard from "./MovieCard";

const Movies = ({ movies }) => {
  return (
    <section className="movies container">
      <div className="section-header flexBetween">
        <h1>Trending Movies</h1>
        <div className="search-wrapper flexBetween">
          <input type="text" placeholder="search..." />
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
