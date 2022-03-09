import React from "react";
import Ingredient from "./Ingredient";
import "./Recipe.css";

function Recipe(props) {
  // console.log("recipe render");
  return (
    <div className="recipe-container">
      <h2 className="heading-secondary">{props.displayMeal.strMeal}</h2>
      <img
        className="display-img"
        src={props.displayMeal.strMealThumb}
        alt={props.displayMeal.strMeal}
      ></img>
      <div className="tag-container">
        <p>{props.displayMeal.strArea}</p>
        <p>{props.displayMeal.strCategory}</p>
      </div>
      <p className="instructions">{props.displayMeal.strInstructions}</p>
      <h3 className="heading-tertiary">Ingredients</h3>
      <ul className="ingredients-list">
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((number) => {
          if (props.displayMeal["strIngredient" + number]) {
            return (
              <Ingredient
                ingredient={props.displayMeal["strIngredient" + number]}
                measure={props.displayMeal["strMeasure" + number]}
                key={number}
              ></Ingredient>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
}

export default React.memo(Recipe);
