/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import { DrinkButtons } from "./components/DrinkButtons";
import { DrinkChoice } from "./components/DrinkChoice";
import { coffee, tea } from "../utils/data";

const App = () => {
  const greeting = "Welcome to our cafe!";
  const userDrink = undefined;

  return (
    <div className="App">
      {userDrink ? (
        <DrinkChoice drink={userDrink} />
      ) : (
        <>
          <h1>{greeting}</h1>
          <DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />
        </>
      )}
    </div>
  );
};

export default App;
