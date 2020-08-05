import React, { useEffect } from "react"
import { fetchFlashcardById } from '../store/flashcard/actions'
import { selectCurrentFlashcard } from '../store/flashcard/selectors'
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom'

export default function FlashCard() {
    const { flashcardId } = useParams()
    console.log('flashcard ID', flashcardId)
    const dispatch = useDispatch();
    const currentFlashcard = useSelector(selectCurrentFlashcard)

    useEffect(() => {
        dispatch(fetchFlashcardById(flashcardId));

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