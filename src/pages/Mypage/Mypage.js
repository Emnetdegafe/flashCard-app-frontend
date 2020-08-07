import React, { useEffect, useState } from "react";
import { fetchAllSubjets } from "../../store/subject/actions";
import { selectAllSubjects } from "../../store/subject/selectors";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddSubjectForm from "./AddSubjectForm";
import ProgressBar from "../../components/progressBar";

import Card from "react-bootstrap/Card";

import CardGroup from "react-bootstrap/CardGroup";

export default function MyPage() {
  const [showForm, set_showForm] = useState(false);

  const dispatch = useDispatch();
  const allSubjects = useSelector(selectAllSubjects);

  console.log("all subjects", allSubjects);

  useEffect(() => {
    dispatch(fetchAllSubjets());
  }, [dispatch]);

  if (!allSubjects || !allSubjects.length > 0) return null;

  const getStatusTrue = allSubjects.map((subject) => ({
    numberOfTrueCards: subject.flashcards.filter((card) => {
      return card.status === true;
    }).length,
    nameOfSubjectTrue: subject.name,
  }));

  const getStatusFalse = allSubjects.map((subject) => ({
    numerOfFalseCards: subject.flashcards.filter((card) => {
      return card.status === false;
    }).length,
    nameOftheSubject: subject.name,
  }));


  const getStatusNull = allSubjects.map(
    (subject) =>
      subject.flashcards && subject.flashcards.filter((card) => {
        return card.status === null;
      }).length
  );

  console.log(
    "getStatusTrue",
    getStatusTrue,
    "getStatusFalse",
    getStatusFalse,
    "getStatusNull",
    getStatusNull
  );
  return (
    <div className="wrapper">
      <section className="title">
        <h3>All subjects </h3>
      </section>
      <div className="Mcard-group">
        {allSubjects.map((subject) => (
          <div key={subject.id} className='Mcard-group__card'>
              <Link to={`/subject/${subject.id}`}>{subject.name}</Link>
          </div>
        ))}
      </div>
      <section>

      <ProgressBar
        getStatusTrue={getStatusTrue}
        getStatusFalse={getStatusFalse}
        getStatusNull={getStatusNull}
        />
      <button onClick={() => set_showForm(true)}>Create new Subject</button>
      {showForm ? <AddSubjectForm /> : null}
      </section>
    </div >
  );
}
