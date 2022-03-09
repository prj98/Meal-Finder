import React from "react";
import "./Meal.css";

function Meal(props) {
  // console.log("meal render");

  return (
    <div
      className="meal"
      onClick={() => {
        props.setDisplayMeal(props.meal);
      }}
    >
      <img
        className="meal-img"
        src={props.meal.strMealThumb}
        alt={props.meal.strMeal}
      ></img>
      <div className="hover-name">{props.meal.strMeal}</div>
    </div>
  );
}

export default React.memo(Meal);
