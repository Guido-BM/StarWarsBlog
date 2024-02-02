import React, { useContext, useEffect, useState, Suspense } from "react";
import { Context } from "../store/appContext";
import Spinner from "../views/spinner.jsx";
const StarshipCard = React.lazy(() => import("../component/starshipCard.jsx"));

const Starships = () => {
  const { store, actions } = useContext(Context);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    actions.fetchStarships(page).then(() => setLoading(false));
  }, [page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };
  if (loading) {
    return <Spinner />;
  }
  const starshipsArray = Object.values(store.starships);
  return (
    <div
      className="container"
      style={{ height: "calc(100vh - 60px)", width: "100%" }}
    >
      <h1>Starships</h1>
      <button onClick={handleLoadMore}>Load More</button>
      <div className="row">
        {starshipsArray.map((starship, index) => {
          return (
            <div className="col-lg-4 col-md-5 col-sm-8 mb-4" key={index}>
              <Suspense fallback={<Spinner />}>
                {starship && <StarshipCard starship={starship} />}
              </Suspense>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Starships;
