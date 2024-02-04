import React, { useContext, useEffect, useState, useRef } from "react";
import { Context } from "../store/appContext.js";
import Spinner from "./spinner.jsx";
const VehicleCard = React.lazy(() => import("../component/vehicleCard.jsx"));
const Vehicles = () => {
  const { store, actions } = useContext(Context);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const loadMoreRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    actions.fetchVehicle(page).then(() => setLoading(false));
  }, [page]);

  const handleLoadMore = () => {
    setPage(page + 1);
    loadMoreRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const vehicleArray = Object.values(store.vehicles);

  return (
    <div className="container">
      <h1 className="text-warning">Vehicles</h1>
      <div className="row">
        {vehicleArray.map((vehicle, index) => {
          const vehicleDetails = store.vehiclesDetails[vehicle.uid];
          return (
            <div className="col-lg-4 col-md-5 col-sm-8 mb-4" key={index}>
              <VehicleCard vehicle={vehicle} vehicleDetails={vehicleDetails} />
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

export default Vehicles;
