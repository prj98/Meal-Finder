import React from "react";
import Meal from "./Meal";

function MealList(props) {
  // console.log("meallist render");
  return (
    <div className="meal-container">
      {props.meals.map((meal, index) => {
        return (
          <Meal
            meal={meal}
            key={index}
            setDisplayMeal={props.setDisplayMeal}
          ></Meal>
        );
      })}
    </div>
  );
}

export default React.memo(MealList);
