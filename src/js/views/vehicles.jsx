import React, { useContext, useEffect, useState, Suspense } from "react";
import { Context } from "../store/appContext.js";
import Spinner from "./spinner.jsx";

const VehicleCard = React.lazy(() => import("../component/vehicleCard.jsx"));

const Vehicles = () => {
  const { store, actions } = useContext(Context);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    actions.fetchVehicle(page).then(() => setLoading(false));
  }, [page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <Suspense fallback={<Spinner />}>
      <div className="container">
        <h1 className="text-warning">Vehicles</h1>
        <button onClick={handleLoadMore}>Load More</button>
        <div className="row">
          {store.vehicles.map((vehicle, index) => {
            const vehicleDetails = store.vehiclesDetails[vehicle.uid];
            return (
              <div className="col-lg-4 col-md-5 col-sm-8 mb-4" key={index}>
                <VehicleCard
                  vehicle={vehicle}
                  vehicleDetails={vehicleDetails}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Suspense>
  );
};

export default Vehicles;
