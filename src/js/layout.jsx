import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

const Home = React.lazy(() => import("./views/home.jsx"));
const People = React.lazy(() => import("./views/people.jsx"));
const Vehicles = React.lazy(() => import("./views/vehicles.jsx"));
const Planets = React.lazy(() => import("./views/planets.jsx"));
const Films = React.lazy(() => import("./views/films.jsx"));
const Starships = React.lazy(() => import("./views/starships.jsx"));
const Species = React.lazy(() => import("./views/species.jsx"));
const Spinner = React.lazy(() => import("./views/spinner.jsx"));

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div className="d-flex flex-column vh-100 bg-black">
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />

          <div className="flex-grow-1 overflow-auto">
            <Suspense fallback={<Spinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/people" element={<People />} />
                <Route path="/vehicles" element={<Vehicles />} />
                <Route path="/planets" element={<Planets />} />
                <Route path="/films" element={<Films />} />
                <Route path="/starships" element={<Starships />} />
                <Route path="/species" element={<Species />} />
                <Route path="*" element={<h1>Not found!</h1>} />
              </Routes>
            </Suspense>
          </div>

          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
