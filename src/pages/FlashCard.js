import React, { useEffect } from "react"
import { fetchFlashcardById } from '../store/flashcard/actions'
import { selectCurrentFlashcard } from '../store/flashcard/selectors'
import { useDispatch, useSelector } from "react-redux";

export default function FlashCard() {
    const dispatch = useDispatch();
    const currentFlashcard = useSelector(selectCurrentFlashcard)

    useEffect(() => {
        dispatch(fetchFlashcardById(1));

    }, [dispatch]);

    if (!currentFlashcard.title) return null

    return (

        <div>
            <h1>{currentFlashcard.title}</h1>
            <p>{currentFlashcard.question}</p>
            <h3>Options:</h3>
            <ul>
                {currentFlashcard.possibleCards.map((card, index) => <li key={index}>{card.answer}</li>)}
            </ul>
            <span>Correct card: {currentFlashcard.correctResponse}</span>
        </div>
    )

}