import React, { useContext, useEffect, useState, Suspense } from "react";
import { Context } from "../store/appContext";
import Spinner from "./spinner.jsx";
import FilmCard from "../component/filmCard.jsx";

const Films = () => {
  const { store, actions } = useContext(Context);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    actions.fetchFilms(page).then(() => setLoading(false));
  }, [page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <h1>Films</h1>
      <button className="btn btn-primary mb-3" onClick={handleLoadMore}>
        Load More
      </button>
      <div className="row">
        {store.films.map((film, index) => {
          const filmDetails =
            store.filmsDetails && store.filmsDetails[film.uid];
          return (
            <div className="col-lg-4 col-md-5 col-sm-8 mb-4" key={index}>
              <Suspense fallback={<Spinner />}>
                <FilmCard film={film} filmDetails={filmDetails} />
              </Suspense>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Films;
