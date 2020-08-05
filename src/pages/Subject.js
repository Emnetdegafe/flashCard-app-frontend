import React, { useEffect, useState } from "react"
import { fetchSubjectById } from '../store/subject/actions'
import { postNewFlashcard } from '../store/flashcard/actions'
import { selectActiveSubject } from '../store/subject/selectors'
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom'

export default function MyPage() {
    const { subjectId } = useParams()
    const [showForm, set_showForm] = useState(false)
    const [name, set_name] = useState('')
    const [question, set_question] = useState('')
    const [answer, set_answer] = useState('')
    const dispatch = useDispatch();
    const activeSubject = useSelector(selectActiveSubject)

    const submitNewFlascard = (e) => {
        e.preventDefault()
        const flashcardObject = {
            name,
            question,
            answer,
            subjectId: activeSubject.id
        }
        dispatch(postNewFlashcard(flashcardObject))

    }



    useEffect(() => {
        dispatch(fetchSubjectById(subjectId))
    }, [subjectId, dispatch])

    if (!activeSubject || !activeSubject.name) return null
    return (

        <div>
            <h1>The subject is {activeSubject.name}</h1>
            <h3>All flashcards:</h3>
            <ul>
                {activeSubject.flashcards.map((flashcard) => <li key={flashcard.id}>
                    <Link to={`/flashcards/${flashcard.id}`} >
                        {flashcard.name}
                    </Link>
                </li>)}
            </ul>

            <button onClick={() => set_showForm(!showForm)}>Add new flashcard</button>

            {showForm && (
                <form onSubmit={(e) => submitNewFlascard(e)}>
                    <label htmlFor='name'>Name</label>
                    <input value={name} id='name' onChange={(e) => set_name(e.target.value)} />
                    <label htmlFor='question'>question</label>
                    <input value={question} id='question' onChange={(e) => set_question(e.target.value)} />
                    <label htmlFor='answer'>answer</label>
                    <input value={answer} id='answer' onChange={(e) => set_answer(e.target.value)} />
                    <button type='submit'>Submit this flashcard</button>
                </form>
            )}
        </div>
    )

}