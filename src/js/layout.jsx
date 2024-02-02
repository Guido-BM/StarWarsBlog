import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Home from "./views/home.jsx";
import Planets from "./views/planets.jsx";
import { Species } from "./views/species.jsx";
import Films from "./views/films.jsx";
import { Starships } from "./views/starships.jsx";
const People = React.lazy(() => import("./views/people.jsx"));

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
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/people"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <People />
                  </Suspense>
                }
              />
              <Route path="/planets" element={<Planets />} />
              <Route path="/species" element={<Species />} />
              <Route path="/films" element={<Films />} />
              <Route path="starships" element={<Starships />} />
              <Route path="*" element={<h1>Not found!</h1>} />
            </Routes>
          </div>

          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
