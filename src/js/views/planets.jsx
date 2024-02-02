import React, { useContext, useEffect, useState, Suspense } from "react";
import { Context } from "../store/appContext";
import Spinner from "../views/spinner.jsx";
const PlanetCard = React.lazy(() => import("../component/planetCard.jsx"));

const Planets = () => {
  const { store, actions } = useContext(Context);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    actions.fetchPlanets(page).then(() => setLoading(false));
  }, [page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };
  if (loading) {
    return <Spinner />;
  }

  return (
    <div
      className="container"
      style={{ height: "calc(100vh - 60px)", width: "100%" }}
    >
      <h1>Planets</h1>
      <button onClick={handleLoadMore}>Load More</button>
      <div className="row">
        {store.planets.map((planet, index) => {
          return (
            <div className="col-lg-4 col-md-5 col-sm-8 mb-4" key={index}>
              <Suspense fallback={<Spinner />}>
                {planet && <PlanetCard planet={planet} />}
              </Suspense>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Planets;
