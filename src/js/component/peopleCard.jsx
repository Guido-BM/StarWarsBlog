import React from "react";
import Spinner from "../views/spinner.jsx";
import "../views/animeCard.css";

const PeopleCard = ({ person }) => {
  return (
    <div className="flip-card rounded mb-2">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={person.image}
            alt={person.name}
            style={{ width: "100%", height: "100%" }}
          />
          <h2 className="overlay">{person.name}</h2>
        </div>
        <div className="flip-card-back p-3">
          <h5 className="card-title">{person.name}</h5>
          <p className="card-text">
            <strong>Birth Year:</strong> {person.birth_year}
          </p>
          <p className="card-text">
            <strong>Gender:</strong> {person.gender}
          </p>
          <p className="card-text">
            <strong>Height:</strong> {person.height} cm
          </p>
          <p className="card-text">
            <strong>Mass:</strong> {person.mass} kg
          </p>
          <p className="card-text">
            <strong>Hair Color:</strong> {person.hair_color}
          </p>
          <p className="card-text">
            <strong>Skin Color:</strong>
            {person.skin_color}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;
