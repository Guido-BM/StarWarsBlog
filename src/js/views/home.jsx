import React, { useState, useEffect } from "react";
import useTypeWriter from "react-typewriter-hook";

const Home = () => {
  const welcomeMessage = useTypeWriter(
    `Turmoil has engulfed the Galactic Republic. The taxation of trade routes to outlying star system is in dispute. Hoping to resolve the matter with a blockade of deadly battleships, the greedy Trade Federation has stopped all shipping to the small planet of Naboo. While the Congress of the Republic endlessly debates this alarming chain of events, the Supreme Chancellor has secretly dispatched two Jedi Knights, the guardians of peace and justice in the galaxy, to settle the conflict...`
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      welcomeMessage;
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container bg-black vh-100">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center text-warning mt-5">
              Welcome to Star Wars Blog
            </h1>
          </div>

          <div className="col-12">
            <h2 className="text-warning">{welcomeMessage}</h2>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
