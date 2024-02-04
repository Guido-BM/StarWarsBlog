import React from "react";
import Spinner from "../views/spinner.jsx";
import "../views/animeCard.css";

const SpeciesCard = ({ species }) => {
  return (
    <div className="flip-card rounded mb-2">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={species.image}
            alt={species.name}
            style={{ width: "100%", height: "100%" }}
          />
          <h2 className="overlay">{species.name}</h2>
        </div>
        <div className="flip-card-back p-3">
          <h5 className="card-title">{species.name}</h5>
          <p className="card-text">
            <strong>Classification:</strong> {species.classification}
          </p>
          <p className="card-text">
            <strong>Designation:</strong> {species.designation}
          </p>
          <p className="card-text">
            <strong>Average Height:</strong> {species.average_height} cm
          </p>
          <p className="card-text">
            <strong>Skin Colors:</strong> {species.skin}
          </p>
          <p className="card-text">
            <strong>Hair Colors:</strong> {species.hair}
          </p>
          <p className="card-text">
            <strong>Eye Colors:</strong> {species.eyes}
          </p>
          <p className="card-text">
            <strong>Average Lifespan:</strong> {species.average_lifespan} years
          </p>
          <p className="card-text">
            <strong>Language:</strong> {species.language}
          </p>
        </div>
      </div>
    </div>
  );
};
export default SpeciesCard;
