/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { Button } from "/src/components/UI/Button.jsx";
export const DrinkChoice = ({ drink, clickFn }) => {
  return (
    <>
      <h2>Your choice: {drink.name}</h2>
      <img src={drink.imgUrl} width={100} height={100} alt={drink.alt} />
      <p>Your drink will be ready in a few minutes</p>
      <Button text={"Change selection"} clickFn={() => clickFn()} />
    </>
  );
};
