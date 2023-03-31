import React from "react";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";

import userAvatar from "../assets/images/user-avatar.png";

const headerLinks = [
  "Popular",
  "Movies",
  "Tv Serials",
  "Cartoons",
  "Trailers",
];

const Header = () => {
  const [visabilitySearch, setVisabilitySearch] = React.useState(false);

  const hendleVisabilitySearch = (v) => {
    setVisabilitySearch(!visabilitySearch);
  };
  const searchInpitAnime = useSpring({
    visibility: visabilitySearch ? "visible" : "hidden",
    display: visabilitySearch ? "block" : "none",
    opacity: visabilitySearch ? 1 : 0,
  });

  const searchBlockAnime = useSpring({});

  const [activeLink, setActiveLink] = React.useState("");



  return (
    <React.Fragment>
      <nav className="header-nav">
        {headerLinks.map((link, i) => (
          <Link
          onClick={() => setActiveLink(link)}
          to={`/${link}`}
            key={i}
           
            className={activeLink === link ? "header-nav__link active" : "header-nav__link"}
          >
            {link}
          </Link>
        ))}
      </nav>
      <animated.div style={searchBlockAnime} className="header-user">
        <div className="header-user__name">FlameKing</div>
        <img className="header-user__avatar" src={userAvatar} />
        <div className="header-user-search">
          <div className="header-user__search">
            <svg
              onClick={() => hendleVisabilitySearch(visabilitySearch)}
              className="header-search__icon"
              width="29"
              height="30"
              viewBox="0 0 29 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.854 22.354C6.34 22.354 1.854 17.868 1.854 12.354C1.854 6.84 6.34 2.354 11.854 2.354C17.368 2.354 21.854 6.84 21.854 12.354C21.854 17.868 17.368 22.354 11.854 22.354ZM11.854 4.354C7.443 4.354 3.854 7.943 3.854 12.354C3.854 16.765 7.443 20.354 11.854 20.354C16.265 20.354 19.854 16.765 19.854 12.354C19.854 7.943 16.266 4.354 11.854 4.354Z"
                fill="white"
              />
              <path
                d="M26.146 27.646C26.0147 27.6461 25.8846 27.6203 25.7633 27.57C25.6419 27.5198 25.5317 27.446 25.439 27.353L17.745 19.659C17.6522 19.5662 17.5785 19.4559 17.5283 19.3346C17.478 19.2133 17.4521 19.0833 17.4521 18.952C17.4521 18.8207 17.478 18.6907 17.5283 18.5694C17.5785 18.4481 17.6522 18.3378 17.745 18.245C17.8378 18.1522 17.9481 18.0785 18.0694 18.0283C18.1907 17.978 18.3207 17.9521 18.452 17.9521C18.5833 17.9521 18.7133 17.978 18.8346 18.0283C18.9559 18.0785 19.0662 18.1522 19.159 18.245L26.853 25.939C26.9933 26.0787 27.0889 26.2569 27.1278 26.451C27.1666 26.6451 27.1469 26.8464 27.0712 27.0293C26.9954 27.2122 26.867 27.3684 26.7023 27.4782C26.5376 27.588 26.344 27.6464 26.146 27.646Z"
                fill="white"
              />
            </svg>
            <animated.div style={searchInpitAnime}>
              <input
                placeholder="Search"
                className={
                  visabilitySearch === true
                    ? "header-user-search__input active"
                    : "header-user-search__input"
                }
                type="search"
              />
            </animated.div>
          </div>
        </div>
      </animated.div>
    </React.Fragment>
  );
};

export default Header;
