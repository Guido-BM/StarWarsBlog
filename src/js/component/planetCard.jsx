import React from "react";
import Spinner from "../views/spinner.jsx";

const PlanetCard = ({ planet, planetDetails }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">{planet.name}</h2>
        {planetDetails && (
          <div>
            <img
              src={planet.image}
              alt={planet.name}
              className="card-img-top"
            />
            <p className="card-text">
              <strong>Population:</strong> {planetDetails.population}
            </p>
            <p className="card-text">
              <strong>Climate:</strong> {planetDetails.climate}
            </p>
            <p className="card-text">
              <strong>Terrain:</strong> {planetDetails.terrain}
            </p>
            <p className="card-text">
              <strong>Surface Water:</strong> {planetDetails.surface_water}
            </p>
            <p className="card-text">
              <strong>Gravity:</strong> {planetDetails.gravity}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlanetCard;
