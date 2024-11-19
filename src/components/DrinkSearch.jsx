/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import { TextInput } from "./UI/TextInput";
import { DrinkList } from "./DrinkList";
import { availableDrinks } from "../../utils/data";

export const DrinkSearch = ({ clickFn }) => {
  const [searchField, useSearchField] = useState("test-drink");

  return (
    <>
      <label>Search for Drinks: </label>
      <TextInput />
      <DrinkList clickFn={clickFn} drinks={availableDrinks} />
    </>
  );
};
