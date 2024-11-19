/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { DrinkItem } from "./DrinkItem";

export const DrinkList = ({ drinks, clickFn }) => {
  return (
    <>
      {drinks.map((drink) => (
        <DrinkItem key={drink.id} drink={drink} clickFn={clickFn} />
      ))}
    </>
  );
};
