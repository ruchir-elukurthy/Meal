import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  data: [],
  loading: true,
  error: "",
};

const reducer = (state, action) => {
  switch (action.status) {
    case "SUCCESS":
      return {
        data: action.info.meals,
        loading: false,
        error: "",
      };
    case "FAILURE":
      return {
        data: [],
        loading: false,
        error: "Fetch was not successful",
      };
    default:
      return state;
  }
};

function Lmeal() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?f=l`)
      .then((response) => dispatch({ info: response.data, status: "SUCCESS" }))
      .catch((error) => dispatch({ status: "FAILURE" }));
  }, []);

  return (
    <div>
      {state.loading
        ? "Loading.."
        : state.data.map((item) => {
            return (
              <div>
                <h3>Meal: {item.strMeal}</h3>
                <div>Category: {item.strCategory}</div>
                <div>Instructions: {item.strInstructions}</div>
                <img
                  src={item.strMealThumb}
                  alt={item.idMeal}
                  className="meal_image"
                />
                <br />
                <a
                  href={item.strYoutube}
                  target="_blank"
                  alt={item.strMeal}
                  rel="noopener noreferrer"
                >
                  Check the video
                </a>
              </div>
            );
          })}
      {state.error ? state.error : null}
    </div>
  );
}
export default Lmeal;
