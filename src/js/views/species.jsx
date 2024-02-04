import React, { useContext, useEffect, useState, Suspense } from "react";
import { Context } from "../store/appContext";
import Spinner from "./spinner.jsx";
import SpeciesCard from "../component/speciesCard.jsx";

const Species = () => {
  const { store, actions } = useContext(Context);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    actions.fetchSpecies(page).then(() => setLoading(false));
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
        <h1 className="text-warning">Species</h1>
        <button onClick={handleLoadMore}>Load More</button>
        <div className="row">
          {store.species.map((species, index) => {
            const speciesDetails = store.speciesDetails[species.uid];
            return (
              <div className="col-lg-4 col-md-5 col-sm-8 mb-4" key={index}>
                <SpeciesCard
                  species={species}
                  speciesDetails={speciesDetails}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Suspense>
  );
};
export default Species;
