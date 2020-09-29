import React from "react";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <React.Fragment>
      <h1>Error :(</h1>
      <h2> We're sorry but the page requested in the url does not exist.</h2>
      <Link className="nav-link" to="/">
        Go Back to the Landing Page
      </Link>
    </React.Fragment>
  );
};
