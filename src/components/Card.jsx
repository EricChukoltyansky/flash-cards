import React, { useState } from "react";

export default function Card({ card }) {
  const [side, setSide] = useState();

  function handleClick() {
    setSide(!side);
  }
  return (
    <div className={`card ${side ? "side" : ""}`} onClick={handleClick}>
      <small>
        <span>Card ID</span>
        {card.id}
      </small>
      <div className="front">{card.question}</div>
      <div className="back">{card.correct_answer}</div>
    </div>
  );
}
