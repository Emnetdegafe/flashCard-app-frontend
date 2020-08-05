import React, { useEffect } from "react"
import { fetchSubjectById } from '../store/subject/actions'
import { selectActiveSubject } from '../store/subject/selectors'
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom'

export default function MyPage() {
    const { subjectId } = useParams()
    const dispatch = useDispatch();
    const activeSubject = useSelector(selectActiveSubject)



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
        </div>
    )

}