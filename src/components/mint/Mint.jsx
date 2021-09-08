import React from 'react';
// To do: add scrolling 
// import { Link, animateScroll as scroll } from "react-scroll";

function Mint({ title, subtitle, dark, id }) {
  return (
    <div className={"mint" + (dark ? " mint-dark" : "")}>
    <div className="mint-content" id={id}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  </div>
  );
}



export default Mint;