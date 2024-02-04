import "./Nav.scss";
import { Link } from "react-router-dom";
import searchlogo from "../../assets/Icons/search.svg";
import uploadlogo from "../../assets/Icons/upload.svg";

export default function nav() {
  return (
    <>
      <nav className="nav">
        <div className="nav__logobox">
          <Link to="/" className="nav__link">
            <div className="nav__logo"> </div>
          </Link>
        </div>

        <div className="nav__flex">
          <div className="nav__mobileflex">
            <form className="nav__search">
              <img
                className="nav__searchlogo"
                src={searchlogo}
                alt="search logo"
              />
              <input
                type="text"
                placeholder="Search"
                id="searchBar"
                className="nav__input"
              />
            </form>
            <div className="nav__profile nav__profile--mobile"></div>
          </div>
          <Link to="/upload" className="nav__link">
            <button className="nav__button">
              <img
                className="nav__uploadlogo"
                src={uploadlogo}
                alt="Upload logo"
              />
              UPLOAD
              <div className="nav__buttonempty"></div>
            </button>
          </Link>
          <div className="nav__profile nav__profile--tablet"></div>
        </div>
      </nav>
    </>
  );
}
