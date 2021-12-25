import React, { useState, useEffect } from "react";
import "./CardsStyles.css";
import Card from "./Card";
import axios from "axios";

export default function Cards() {
  const [flashcarddata, setFlashcarddata] = useState([]);
  const [current, setCurrent] = useState(0);

  const getDataAxios = async () => {
    const url = await axios.get("https://opentdb.com/api.php?amount=20");

    setFlashcarddata(...flashcarddata,url.data.results);
  };

  useEffect(() => {
    getDataAxios();
  }, []);

  const cards = flashcarddata.map((card) => {
    return <Card card={card} key={card.id} />;
  });

  const loading = <div className="loading">Loading flashcard content...</div>;

  function previousCard() {
    setCurrent(current - 1);
  }
  function nextCard() {
    setCurrent(current + 1);
  }

  return (
    <div>
      {console.log(flashcarddata)}
      {flashcarddata && flashcarddata.length > 0 ? (
        <div className="cardNumber">
          Card {current + 1} of {flashcarddata.length}
        </div>
      ) : (
        ""
      )}

      {flashcarddata && flashcarddata.length > 0 ? cards[current] : loading}

      <div className="nav">
        {current > 0 ? (
          <button onClick={previousCard}>Previous card</button>
        ) : (
          <button className="disabled" disabled>
            Previous card
          </button>
        )}
        {current < flashcarddata.length - 1 ? (
          <button onClick={nextCard}>Next card</button>
        ) : (
          <button className="disabled" disabled>
            Next card
          </button>
        )}
      </div>
    </div>
  );
}
