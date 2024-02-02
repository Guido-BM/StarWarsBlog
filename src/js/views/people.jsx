import React, { useContext, useEffect, useState, Suspense } from "react";
import { Context } from "../store/appContext";
import Spinner from "./spinner.jsx";
import PeopleCard from "../component/peopleCard.jsx";

const Card = React.lazy(() => import("../component/peopleCard.jsx"));

const People = () => {
  const { store, actions } = useContext(Context);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    actions.fetchPeople(page).then(() => setLoading(false));
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
        <h1 className="text-warning">Characters</h1>
        <button onClick={handleLoadMore}>Load More</button>
        <div className="row">
          {store.people.map((person, index) => {
            const personDetails = store.peopleDetails[person.uid];
            return (
              <div className="col-lg-4 col-md-5 col-sm-8 mb-4" key={index}>
                <PeopleCard person={person} personDetails={personDetails} />
              </div>
            );
          })}
        </div>
      </div>
    </Suspense>
  );
};
export default People;
