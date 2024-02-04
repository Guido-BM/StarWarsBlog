import React, { useContext, useEffect, useState, useRef } from "react";
import { Context } from "../store/appContext";
import Spinner from "../views/spinner.jsx";
import PlanetCard from "../component/planetCard.jsx";

const Planets = () => {
  const { store, actions } = useContext(Context);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const loadMoreRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    actions.fetchPlanets(page).then(() => setLoading(false));
  }, [page]);

  const handleLoadMore = () => {
    setPage(page + 1);
    loadMoreRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="container"
      style={{ height: "calc(100vh - 60px)", width: "100%" }}
    >
      <h1 className="text-warning">Planets</h1>
      <div className="row">
        {store.planets.map((planet, index) => {
          return (
            <div className="col-lg-4 col-md-5 col-sm-8 mb-4" key={index}>
              <PlanetCard planet={planet} />
            </div>
          );
        })}
        {loading && <Spinner />}
      </div>
      <div ref={loadMoreRef}>
        <button
          onClick={handleLoadMore}
          style={{
            position: "fixed",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "gold",
            borderRadius: "50%",
            padding: "10px 20px",
          }}
        >
          Load More
        </button>
      </div>
    </div>
  );
};
export default Planets;
