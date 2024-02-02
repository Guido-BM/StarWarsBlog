import React from "react";
import Spinner from "../views/spinner.jsx";
import "../views/animeCard.css";

const VehicleCard = ({ vehicle }) => {
  return (
    <div className="flip-card rounded mb-5">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            style={{ width: "100%", height: "100%" }}
          />
          <h2 className="overlay">{vehicle.name}</h2>
        </div>
        <div className="flip-card-back p-3">
          <h5 className="card-title">{vehicle.name}</h5>
          <p className="card-text">
            <strong>Model:</strong> {vehicle.model}
          </p>
          <p className="card-text">
            <strong>Manufacturer:</strong> {vehicle.manufacturer}
          </p>
          <p className="card-text">
            <strong>Cost in Credits:</strong> {vehicle.cost_in_credits}
          </p>
          <p className="card-text">
            <strong>Length:</strong> {vehicle.length} m
          </p>
          <p className="card-text">
            <strong>Max Atmosphering Speed:</strong>{" "}
            {vehicle.max_atmosphering_speed} km/h
          </p>
          <p className="card-text">
            <strong>Crew:</strong> {vehicle.crew}
          </p>
          <p className="card-text">
            <strong>Passengers:</strong> {vehicle.passengers}
          </p>
          <p className="card-text">
            <strong>Cargo Capacity:</strong> {vehicle.cargo_capacity} kg
          </p>
          <p className="card-text">
            <strong>Consumables:</strong> {vehicle.consumables}
          </p>
        </div>
      </div>
    </div>
  );
};
export default VehicleCard;
