import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/Home";
import MovieDetailPage from "./pages/MovieDetail";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:category/:id" element={<MovieDetailPage />} />
      </Routes>
    </>
  );
};

export default App;
