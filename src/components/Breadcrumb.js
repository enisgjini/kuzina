import React from "react";
import { useLocation,Link } from "react-router-dom";

function Breadcrumb() {
  const location = useLocation();
  let path = window.location.pathname.replace(/\/+$/, "");
  path = path[0] == "/" ? path.substr(1) : path;

  return (
    <nav aria-label="breadcrumb" className="bg-white">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/" className="text-decoration-none " id="homeLink">
            Home
          </Link>
        </li>
        <li className="breadcrumb-item"></li>
        <li
          className="text-decoration-none"
          aria-current="page"
          id="locationPath"
        >
          {path}
        </li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;
