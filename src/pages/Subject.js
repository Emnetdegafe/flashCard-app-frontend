import React, { useEffect, useState } from "react";
import { fetchSubjectById } from "../store/subject/actions";
import { postNewFlashcard } from "../store/flashcard/actions";
import { selectActiveSubject } from "../store/subject/selectors";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import RoundedButton from '../components/RoundedButton'
import { useHistory } from "react-router-dom";

export default function MyPage() {
  const { subjectId } = useParams();
  const [showForm, set_showForm] = useState(false);
  const [name, set_name] = useState("");
  const [question, set_question] = useState("");
  const [answer, set_answer] = useState("");
  const dispatch = useDispatch();
  const activeSubject = useSelector(selectActiveSubject);
  const history = useHistory();


  useEffect(() => {
    dispatch(fetchSubjectById(subjectId));
  }, [subjectId, dispatch]);

  // here we breack the component from rendering if the actions didn't complete yet.
  if (!activeSubject || !activeSubject.name) return null;



  const randomFlashcard = activeSubject.flashcards[Math.floor(Math.random() * activeSubject.flashcards.length)];


  function handleNext(event) {
    history.push(`/flashcards/${randomFlashcard.id} `);
  }

  const submitNewFlascard = (e) => {
    e.preventDefault();
    const flashcardObject = {
      name,
      question,
      answer,
      subjectId: activeSubject.id,
    };
    dispatch(postNewFlashcard(flashcardObject));
  };



  return (
    <div className='wrapper colored hero'>
      <section className='button-navigation'>
        <div>

          <h3>The subject is: </h3>
          <h1>{activeSubject.name}</h1>
          <h3>All flashcards:</h3>
        </div>
        {!activeSubject.flashcards || activeSubject.flashcards.length < 1 ?
          null :

          <div>
            <RoundedButton onClick={handleNext}>Start playing</RoundedButton>
          </div>
        }
      </section>
      <div
        className='Mcard-group'
      >
        {activeSubject.flashcards.map((flashcard) => (
          <Link to={`/flashcards/${flashcard.id}`}>
            <div className='Mcard-group__card'
              key={flashcard.id}
            >
              {flashcard.name}
            </div>
          </Link>
        ))}
      </div>
      <section className='my-page-footer'>
        

        <RoundedButton fixedRadius={120} onClick={() => set_showForm(!showForm)}>Add new flashcard</RoundedButton>

        {showForm && (

          <form onSubmit={(e) => submitNewFlascard(e)} className='new-element-form'>
            <label htmlFor="name">Name</label>
            <input
              value={name}
              id="name"
              onChange={(e) => set_name(e.target.value)}
            />
            <label htmlFor="question">question</label>
            <input
              value={question}
              id="question"
              onChange={(e) => set_question(e.target.value)}
            />
            <label htmlFor="answer">answer</label>
            <input
              value={answer}
              id="answer"
              onChange={(e) => set_answer(e.target.value)}
            />
            <RoundedButton type="submit" fixedRadius={120}>Submit this flashcard</RoundedButton>
          </form>
        )}
      </section>
    </div>
  );
}
