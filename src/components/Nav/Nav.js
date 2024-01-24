import "./Nav.scss";
import { Link } from "react-router-dom";
import searchlogo from "../../assets/Icons/search.svg";
import uploadlogo from "../../assets/Icons/upload.svg";

export default function Header() {
  return (
    <>
      <div className="header">
        <Link to="/">
          <div className="header__logobox">
            <div className="header__logo"> </div>
          </div>
        </Link>
        <div className="header__flex">
          <div className="header__mobileflex">
            <form className="header__search">
              <img
                className="header__searchlogo"
                src={searchlogo}
                alt="search logo"
              />
              <input
                type="text"
                placeholder="Search"
                id="searchBar"
                className="header__input"
              />
            </form>
            <div className="header__profile header__profile--mobile"></div>
          </div>
          <Link to="/upload">
            <button className="header__button">
              <img
                className="header__uploadlogo"
                src={uploadlogo}
                alt="Upload logo"
              />
              UPLOAD
              <div className="header__buttonempty"></div>
            </button>
          </Link>
          <div className="header__profile header__profile--tablet"></div>
        </div>
      </div>
    </>
  );
}
