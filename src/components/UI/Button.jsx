/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import "./Button.css";

export const Button = ({ text, clickFn }) => (
  <button className="Button" onClick={clickFn}>
    {text}
  </button>
);
//
