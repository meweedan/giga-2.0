import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="300"
      height="300"
      x="0"
      y="0"
      viewBox="0 0 300 300"
    >
      <defs>
        <path
          id="circlePathtwo"
          d="M90 150a60 60 0 01120 0 60 60 0 01-120 0"></path>
      </defs>
      <circle cx="150" cy="100" r="75" fill="none"></circle>
      <use fill="none" xlinkHref="#circlePathtwo"></use>
      <text fill="#3249b3">
        <textPath xlinkHref="#circlePathtwo">
        Giga Giga Giga Giga Giga Giga Giga Giga Giga Giga Giga Giga Giga Giga 
        </textPath>
      </text>
    </svg>
  );
}

export default Icon;