import React, { useEffect, useState } from "react"
import { fetchFlashcardById } from '../store/flashcard/actions'
import { selectCurrentFlashcard } from '../store/flashcard/selectors'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'

export default function FlashCard() {
    const [selectedOption, set_selectedOption] = useState()
    const { flashcardId } = useParams()
    console.log('flashcard ID', flashcardId)
    const dispatch = useDispatch();
    const currentFlashcard = useSelector(selectCurrentFlashcard)

    const handleRadios = (e) => {
        set_selectedOption(parseInt(e.target.value))
        console.log(e.target.value)
    }

    useEffect(() => {
        dispatch(fetchFlashcardById(flashcardId));

    }, [dispatch, flashcardId]);

    if (!currentFlashcard.title) return null

    return (

        <div>
            <h1>{currentFlashcard.title}</h1>
            <p>{currentFlashcard.question}</p>
            <h3>Options:</h3>

            <form>
                {currentFlashcard.possibleCards.map((card, index) => {
                    const selected = index === selectedOption ? true : false
                    console.log('is selected?', selected)
                    return < div key={index} >
                        <label htmlFor={index} >{card.answer}</label>
                        <input type={'radio'} checked={selected} name={index} id={index} onChange={handleRadios} value={index} />
                    </div>
                }
                )

                }
            </form>
            <span>Correct card: {currentFlashcard.correctResponse === selectedOption ? 'WIIIIIII' : 'MEEEE'}</span>
        </div >
    )

}