/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import { TextInput } from "./UI/TextInput";

export const DrinkSearch = () => {
  const [searchField, useSearchField] = useState("test-drink");

  return (
    <>
      <label>Search for Drinks: </label>
      <TextInput />
      <p>{searchField}</p>
    </>
  );
};
