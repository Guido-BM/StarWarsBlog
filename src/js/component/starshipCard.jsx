import React from "react";
import Spinner from "../views/spinner.jsx";
import "../views/animeCard.css";

const StarshipCard = ({ starship }) => {
  return (
    <div className="flip-card rounded mb-2">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={starship.image}
            alt={starship.name}
            style={{ width: "100%", height: "100%" }}
          />
          <h2 className="overlay">{starship.name}</h2>
        </div>
        <div className="flip-card-back p-3">
          <h5 className="card-title">{starship.name}</h5>
          <p className="card-text">
            <strong>Model:</strong> {starship.model}
          </p>
          <p className="card-text">
            <strong>Manufacturer:</strong> {starship.manufacturer}
          </p>
          <p className="card-text">
            <strong>Cost in Credits:</strong> {starship.cost_in_credits}
          </p>
          <p className="card-text">
            <strong>Length:</strong> {starship.length} m
          </p>
          <p className="card-text">
            <strong>Max Atmosphering Speed:</strong>{" "}
            {starship.max_atmosphering_speed} km/h
          </p>
          <p className="card-text">
            <strong>Crew:</strong> {starship.crew}
          </p>
          <p className="card-text">
            <strong>Passengers:</strong> {starship.passengers}
          </p>
          <p className="card-text">
            <strong>Cargo Capacity:</strong> {starship.cargo_capacity} kg
          </p>
          <p className="card-text">
            <strong>Consumables:</strong> {starship.consumables}
          </p>
        </div>
      </div>
    </div>
  );
};
export default StarshipCard;
