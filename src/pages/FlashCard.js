import React, { useEffect, useState } from "react";
import {
  fetchFlashcardById,
  updateFlashcardStatus,
} from "../store/flashcard/actions";
import {
  selectCurrentFlashcard,
  selectAlternativeCards,
} from "../store/flashcard/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "./index.css";

export default function FlashCard() {
  const [selectedOption, set_selectedOption] = useState();
  const { flashcardId } = useParams();
  console.log("flashcard ID", flashcardId);
  const dispatch = useDispatch();
  const currentFlashcard = useSelector(selectCurrentFlashcard);
  const alternativeCards = useSelector(selectAlternativeCards);

  const handleRadios = (e) => {
    set_selectedOption(parseInt(e.target.value));
    console.log(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchFlashcardById(flashcardId));
  }, [dispatch, flashcardId]);

  console.log(currentFlashcard.status);
  if (!currentFlashcard.title) return null;

  return (
    <div>
      <h1>{currentFlashcard.title}</h1>
      <p>{currentFlashcard.question}</p>
      <h3>Options:</h3>

      <form>
        {alternativeCards.possibleCards.map((card, index) => {
          const selected =
            index === alternativeCards.selectedOption ? true : false;
          console.log("is selected?", selected);
          return (
            <div className="center" key={index}>
              <label htmlFor={index}>{card.answer}</label>
              <input
                type={"radio"}
                checked={selected}
                name={index}
                id={index}
                onChange={handleRadios}
                value={index}
              />
            </div>
          );
        })}
      </form>

      <h3>{currentFlashcard.status ? "Completed" : "Not completed yet"}</h3>
      <span>
        Correct card:{" "}
        {currentFlashcard.correctResponse === selectedOption
          ? "WIIIIIII"
          : "MEEEE"}
      </span>

      <button
        onClick={() =>
          dispatch(updateFlashcardStatus(!currentFlashcard.status))
        }
      >
        Complete now
      </button>
    </div>
  );
}
