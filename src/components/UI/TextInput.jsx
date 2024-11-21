/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import "./TextInput.css";
export const TextInput = ({ changeFn }) => {
  return (
    <>
      <input className="text-input" onChange={changeFn}></input>
    </>
  );
};
