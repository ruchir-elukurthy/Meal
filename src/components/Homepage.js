import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <h1 className="head">Pick your meal</h1>
      <ul className="list">
        <li>
          <Link to="/Homepage/B-meal" className="meal-page">
            B Meal
          </Link>
          <Link to="/Homepage/C-meal" className="meal-page">
            C Meal
          </Link>
          <Link to="/Homepage/F-meal" className="meal-page">
            F Meal
          </Link>
          <br /> <br /> <br /> <br /> <br />
          <Link to="/Homepage/L-meal" className="meal-page">
            L Meal
          </Link>
          <Link to="/Homepage/Coin-Toss" className="meal-page">
            Coin Toss
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Homepage;
