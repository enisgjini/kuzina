import React, { useState } from "react";
import Footer from "../components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import "./pages.css";
import { tabs } from "./DATA";

function Menu() {
  const location = useLocation();
  let path = window.location.pathname.replace(/\/+$/, "");
  path = path[0] == "/" ? path.substr(1) : path;

  const [currentTab, setCurrentTab] = useState("1");

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };
  return (
    <>
      <div className="container mt-5">
        {/* Breadcrumb of site , try later to make dynamic */}
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
        <div className="row gx-5" id="menuSection">
          <div className=" col-md-6 col-xs-12">
            <h1 id="menuTitle">Menu</h1>
          </div>
          <div className="col-md-6 col-xs-12 ">
            <p id="menuDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <nav class="nav mt-5 mb-5" id="foodCategory">
          {tabs.map((tab, i) => (
            <a
              key={i}
              id={tab.id}
              disabled={currentTab === `${tab.id}`}
              onClick={handleTabClick}
              className="nav-link active text-dark"
            >
              {tab.food_category}
            </a>
          ))}
        </nav>
        <br />
        <div className="container-fluid">
          <div class="row">
            {tabs.map((tab, i) => (
              <>
                {currentTab === `${tab.id}` && (
                  <>
                    {tab.foods.map((addVal, j) => {
                      return (
                        <div
                          key={"add" + j}
                          class="col-md-4 col-sm-6 col-xs-12  bootCols"
                        >
                          <img src={addVal.image} alt="" className="w-100 img-thumbnail"/>
                          <hr />
                          <p className="nameOfFood">{addVal.name}</p>
                          <p>{addVal.ingredients}</p>
                          <p>{addVal.price}</p>
                        </div>
                      );
                    })}
                  </>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
}

export default Menu;
