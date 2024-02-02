import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-black bg-black mb-3">
      <div>
        <Link to="/">
          <span className="navbar-brand text-warning mb-0 p-3 h1">
            Star Wars
          </span>
        </Link>
      </div>

      <div className="ml-auto">
        <Link to="/people" className="m-2">
          <button className="btn star-wars-btn">People</button>
        </Link>
        <Link to="/planets" className="m-2">
          <button className="btn star-wars-btn">Planets</button>
        </Link>
        <Link to="/vehicles" className="m-2">
          <button className="btn star-wars-btn">Vehicles</button>
        </Link>

        <Link to="/films" className="m-2">
          <button className="btn star-wars-btn">Films</button>
        </Link>
        <Link to="/starships" className="m-2">
          <button className="btn star-wars-btn">Starships</button>
        </Link>
      </div>
    </nav>
  );
};
