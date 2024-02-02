import React from "react";
import Spinner from "../views/spinner.jsx";
import "../views/animeCard.css";

const PlanetCard = ({ planet, planetDetails }) => {
  return (
    <div className="flip-card rounded mb-2 planet-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {planet.image ? (
            <img src={planet.image} alt={planet.name} />
          ) : (
            <img src="https://example.com/default-image.jpg" alt="default" /> // replace with your default image URL
          )}
          <h2 className="overlay">{planet.name}</h2>
        </div>

        <div className="flip-card-back p-3">
          <h5 className="card-title">{planet.name}</h5>
          <p className="card-text">
            <strong>Population:</strong> {planet.population}
          </p>
          <p className="card-text">
            <strong>Rotation Period:</strong> {planet.rotation_period} hours
          </p>
          <p className="card-text">
            <strong>Orbital Period:</strong> {planet.orbital_period} days
          </p>
          <p className="card-text">
            <strong>Diameter:</strong> {planet.diameter} km
          </p>
          <p className="card-text">
            <strong>Climate:</strong> {planet.climate}
          </p>
          <p className="card-text">
            <strong>Gravity:</strong> {planet.gravity}
          </p>
          <p className="card-text">
            <strong>Terrain:</strong> {planet.terrain}
          </p>
          <p className="card-text">
            <strong>Surface Water:</strong> {planet.surface_water}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlanetCard;
