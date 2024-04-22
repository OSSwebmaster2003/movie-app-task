import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import "./navbar.css";
import SearchModal from "../SearchModal/SearchModal";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const [searchModal, setSearchModal] = useState(false);

  const handleSearchModal = () => {
    setSearchModal((prev) => !prev);
  };

  return (
    <>
      <header>
        <div className="container flexBetween">
          <nav className="flexBetween">
            <div className="logo">Movies</div>
            <ul
              className={mobile ? "navMenu-list" : "flexBetween"}
              onClick={() => setMobile(false)}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/series">Series</Link>
              </li>
              <li>
                <Link to="/movies">Movies</Link>
              </li>
            </ul>
            <button className="toggle" onClick={() => setMobile(!mobile)}>
              {mobile ? <FaTimes /> : <FaBarsStaggered />}
            </button>
          </nav>
          <div className="account flexBetween">
            <IoSearch onClick={handleSearchModal} />
            <button>Subscribe Now</button>
          </div>
        </div>
      </header>
      <SearchModal
        searchModal={searchModal}
        handleSearchModal={handleSearchModal}
      />
    </>
  );
};

export default Navbar;
