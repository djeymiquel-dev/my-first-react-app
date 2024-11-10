/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import "./DrinkButtons.css";

export const DrinkButtons = ({ drinkOne, drinkTwo }) => {
  return (
    <>
      <h2>Would you like Tea or Coffee?</h2>
      <div className="button-group">
        <button className="button">{drinkOne}</button>
        <button className="button">{drinkTwo}</button>
      </div>
    </>
  );
};
