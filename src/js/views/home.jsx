import React, { useState, useEffect } from "react";
import useTypeWriter from "react-typewriter-hook";

const Home = () => {
  const welcomeMessage = useTypeWriter(
    `A long time ago in a galaxy far, far away... a time was coming when the galaxy was in the middle of a civil war. Spies stole secret plans to the Empire's ultimate weapon, the Death Star, an armored space station with enough power to destroy an entire planet. Pursued by the Empire's sinister agents, Princess exploration of the galaxy.`
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
