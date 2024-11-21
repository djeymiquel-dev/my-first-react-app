/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import { TextInput } from "./UI/TextInput";
import { DrinkList } from "./DrinkList";
import { availableDrinks } from "../../utils/data";

export const DrinkSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const matchedDrinks = availableDrinks.filter((drink) => {
    return drink.name.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <>
      <label>Search for Drinks: </label>
      <TextInput changeFn={handleChange} />
      <DrinkList clickFn={clickFn} drinks={matchedDrinks} />
    </>
  );
};
