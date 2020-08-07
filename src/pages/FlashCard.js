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
import PrivAndNext from "../components/PrivAndNext";
import RoundedButton from '../components/RoundedButton'
export default function FlashCard() {
  const [selectedOption, set_selectedOption] = useState();
  const { flashcardId } = useParams();
  console.log("flashcard ID", flashcardId);
  const dispatch = useDispatch();
  const currentFlashcard = useSelector(selectCurrentFlashcard);
  const alternativeCards = useSelector(selectAlternativeCards);

  const handleRadios = (e) => {
    set_selectedOption(parseInt(e.target.value));
  };

  useEffect(() => {
    dispatch(fetchFlashcardById(flashcardId));
  }, [dispatch, flashcardId]);

  console.log(alternativeCards.correctResponse);
  if (!currentFlashcard.title) return null;

  return (
    <div className="wrapper colored">
      <section>

        <PrivAndNext currentFlashcardId={flashcardId} />
        <h1>{currentFlashcard.title}</h1>
        <p className="flashcard-body">{currentFlashcard.question}</p>
      </section>
      <section>

        <h3>Options:</h3>

        <form className="options-form">
          {alternativeCards.possibleCards.map((card, index) => {
            const selected = index === selectedOption ? true : false;

            const classNames = !Number.isInteger(selectedOption)
              ? `options-form__response`
              : selectedOption === alternativeCards.correctResponse &&
                selectedOption === index
                ? `options-form__response checked__right`
                : `options-form__response checked__wrong`;

            return (
              <div key={index} className={classNames}>
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
      </section>
      <section>

        <h3>{currentFlashcard.status ? "Completed" : "Not completed yet"}</h3>
        <div className="flashcard-buttons">
          <RoundedButton
            onClick={() =>
              dispatch(updateFlashcardStatus(!currentFlashcard.status))
            }
          >
            Complete now
        </RoundedButton>
        </div>
      </section>
    </div>
  );
}
