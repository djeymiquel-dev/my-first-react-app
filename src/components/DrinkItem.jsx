/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import "./DrinkItem.css";
export const DrinkItem = ({ drink }) => {
  return (
    <div className="drink-item">
      <img src={drink.imgUrl} width={50} height={50} alt={drink.alt} />
      <p>{drink.name}</p>
    </div>
  );
};
