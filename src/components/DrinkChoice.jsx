/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
export const DrinkChoice = ({ drink }) => {
  return (
    <>
      <h2>Your choice: {drink.name}</h2>
      <img src={drink.imgUrl} width={200} height={200} alt={drink.alt} />
      <p>Your drink will be ready in a few minutes</p>
    </>
  );
};
