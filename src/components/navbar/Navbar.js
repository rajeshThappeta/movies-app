import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import SearchMovie from "../searchmovie/SearchMovie";
import { themeContext } from "../../contexts/ThemeContextProvider";
import { FaRegLightbulb } from "react-icons/fa";

function Navbar() {
  let [theme, changeTheme] = useContext(themeContext);

  return (
    <div className="navbar">
      <NavLink className="h3 movie-heading nav-link" to="/">
        <span>
          <img
            src="data:image/png;base64,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"
            className="me-3"
            alt=""
            width="30px"
          />
        </span>
        Movies
      </NavLink>
      <SearchMovie />
      <button onClick={changeTheme} className="btn text-warning">
        <FaRegLightbulb />
      </button>
    </div>
  );
}

export default Navbar;
