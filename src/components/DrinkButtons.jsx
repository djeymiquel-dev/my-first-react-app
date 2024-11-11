/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import "./DrinkButtons.css";
import { Button } from "./UI/Button";

export const DrinkButtons = ({ drinkOne, drinkTwo }) => {
  return (
    <>
      <h2>Would you like Tea or Coffee?</h2>
      <div className="button-group">
        <Button text={drinkOne} />
        <Button text={drinkTwo} />
      </div>
    </>
  );
};
