/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import { DrinkButtons } from "./components/DrinkButtons";
import { DrinkChoice } from "./components/DrinkChoice";
import { coffee, tea } from "../utils/data";
import { useState } from "react";
import { DrinkSearch } from "./components/DrinkSearch";

const App = () => {
  const greeting = "Welcome to our cafe!";
  const [userDrink, setUserDrink] = useState();

  return (
    <div className="App">
      {userDrink ? (
        <DrinkChoice drink={userDrink} />
      ) : (
        <>
          <h1>{greeting}</h1>
          <DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />
          <DrinkSearch />
        </>
      )}
    </div>
  );
};

export default App;
