import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectFlashCards } from "../store/subject/selectors";
import { selectCurrentFlashcard } from "../store/flashcard/selectors";
import { useHistory } from "react-router-dom";
import RoundedButton from './RoundedButton'
export default function PrivAndNext() {
  const history = useHistory();

  const flashcards = useSelector(selectFlashCards);
  console.log("1234", flashcards);
  // const currentCard = useSelector(selectCurrentFlashcard);
  // const currentCardId = props.currentFlashcardId;


  // const [activeCard, set_activeCard] = useState(currentCardId);

  if (!flashcards || flashcards.length < 1) {
    return null;
  }

  const cardsId = flashcards.map((card) => {
    return card.id;
  });
  console.log("cardsId", cardsId);
  function handleNext(event) {
    history.push(`/flashcards/${randomId} `);
  }
  const randomId = cardsId[Math.floor(Math.random() * cardsId.length)];
  console.log("random", randomId);

  function handlePrev(event) {
    history.goBack();
  }

  return (
    <div className='button-navigation'>
      <RoundedButton onClick={(event) => handlePrev(event)} fixedRadius={105}>Previous</RoundedButton>
      <RoundedButton onClick={(event) => handleNext(event)} fixedRadius={105}>Next</RoundedButton>
    </div>
  );
}
