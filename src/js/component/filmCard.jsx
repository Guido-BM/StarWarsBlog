import React from "react";
import Spinner from "../views/spinner.jsx";
import "../views/animeCard.css";

const FilmCard = ({ film }) => {
  return (
    <div className="flip-card rounded">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={film.image}
            alt={film.title}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="flip-card-back p-3">
          <h5 className="card-title">{film.title}</h5>
          <p className="card-text">
            <strong>Director:</strong> {film.director}
          </p>
          <p className="card-text">
            <strong>Producer:</strong> {film.producer}
          </p>
          <p className="card-text">
            <strong>Release Date:</strong> {film.release_date}
          </p>
          <p className="card-text">
            <strong>Opening Crawl:</strong> {film.opening_crawl}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
