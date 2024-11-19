/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import { DrinkChoice } from "./components/DrinkChoice";
import { useState } from "react";
import { DrinkSearch } from "./components/DrinkSearch";

const App = () => {
  const greeting = "Welcome to our cafe!";
  const [userDrink, setUserDrink] = useState();

  return (
    <div className="App">
      {userDrink ? (
        <DrinkChoice drink={userDrink} clickFn={setUserDrink} />
      ) : (
        <>
          <h1>{greeting}</h1>
          <DrinkSearch clickFn={setUserDrink} />
        </>
      )}
    </div>
  );
};

export default App;
