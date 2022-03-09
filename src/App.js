import React, { useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsShuffle } from "react-icons/bs";
import "./App.css";
import MealList from "./Components/MealList";
import Recipe from "./Components/Recipe";

function App() {
  // console.log("App render");
  const userInput = useRef();
  const [currKeyword, setCurrKeyword] = useState("");
  const [meals, setMeals] = useState(null);
  const [displayMeal, setDisplayMeal] = useState(null);

  async function search() {
    const keyword = userInput.current.value;
    if (keyword === "") {
      alert("Please enter a search term");
      return;
    }
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`
    );
    const data = await response.json();
    setMeals(data.meals);
    setDisplayMeal(null);
    setCurrKeyword(keyword);
    userInput.current.value = "";
  }

  async function random() {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const data = await response.json();
    setDisplayMeal(data.meals[0]);
    setMeals(null);
    setCurrKeyword("");
  }

  return (
    <div className="app">
      <h1 className="heading-primary">Meal Finder</h1>
      <div className="form-container">
        <form>
          <input
            ref={userInput}
            placeholder="Search for meals or keywords..."
          ></input>
          <button
            className="btn btn-search"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              search();
            }}
          >
            <AiOutlineSearch></AiOutlineSearch>
          </button>
        </form>
        <button
          className="btn btn-shuffle"
          onClick={() => {
            random();
          }}
        >
          <BsShuffle></BsShuffle>
        </button>
      </div>
      {currKeyword === "" ? null : meals ? (
        <h3 className="message">Search results for '{currKeyword}':</h3>
      ) : (
        <h3 className="message">Sorry! There are no search results</h3>
      )}
      {meals ? (
        <MealList meals={meals} setDisplayMeal={setDisplayMeal}></MealList>
      ) : null}
      {displayMeal ? <Recipe displayMeal={displayMeal}></Recipe> : null}
    </div>
  );
}

export default App;
