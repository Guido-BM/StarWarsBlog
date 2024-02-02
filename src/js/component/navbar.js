import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-black bg-black mb-3">
      <div>
        <Link to="/">
          <span className="navbar-brand mb-0 p-3 h1">Star Wars API</span>
        </Link>
      </div>

      <div className="ml-auto">
        <Link to="/people" className="m-2">
          <button className="btn btn-primary">People</button>
        </Link>
        <Link to="/planets" className="m-2">
          <button className="btn btn-primary">Planets</button>
        </Link>
        <Link to="/vehicles" className="m-2">
          <button className="btn btn-primary">Vehicles</button>
        </Link>
        <Link to="/species" className="m-2">
          <button className="btn btn-primary">Species</button>
        </Link>
        <Link to="/films" className="m-2">
          <button className="btn btn-primary">Films</button>
        </Link>
      </div>
    </nav>
  );
};
