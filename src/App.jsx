/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import { DrinkButtons } from "./components/DrinkButtons";

function App() {
  const greeting = "Welcome to our cafe!";
  const tea = "Tea";
  const coffee = "Coffee";

  return (
    <div className="App">
      <h1>{greeting}</h1>
      <DrinkButtons drinkOne={tea} drinkTwo={coffee} />
    </div>
  );
}

export default App;
