import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";
import "../index.css";

const Search = () => {
  return (
    <div>
      <form className="search">
        <input type="search" className="search__text"></input>
        <FontAwesomeIcon icon={faSearch} className="search__icon" />
      </form>
    </div>
  );
};

export default Search;
