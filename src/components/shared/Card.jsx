import React from "react";

function Card({ reverse }) {
  return <div className={`card ${reverse && "reverse"}`}>
      </div>;
}

export default Card;
