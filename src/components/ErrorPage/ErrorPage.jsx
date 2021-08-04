import React from "react";
import { NavLink } from "react-router-dom";

const Errorpage = () => {
  return (
    <>
      <div id="not_found">
        <div className="not_found">
          <h1>404</h1>
          <h4>We are sorry! Page not found</h4>
          <NavLink to="/">Go to homepage</NavLink>
        </div>
      </div>
    </>
  );
};

export default Errorpage;
