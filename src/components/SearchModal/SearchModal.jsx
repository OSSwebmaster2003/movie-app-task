import { IoSearch } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";
import "./searchModal.css";

const SearchModal = ({ searchModal, handleSearchModal }) => {
  return (
    <div className={searchModal ? "modal active" : "modal"}>
      <div className="wrapper">
        <button>
          <IoSearch />
        </button>
        <input type="text" placeholder="search movies" />
        <span onClick={handleSearchModal}>
          <LiaTimesSolid />
        </span>
      </div>
    </div>
  );
};

export default SearchModal;
