import React, { useEffect, useState } from "react";
import { fetchAllSubjets } from "../../store/subject/actions";
import { selectAllSubjects } from "../../store/subject/selectors";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddSubjectForm from "./AddSubjectForm";
import ProgressBar from "../../components/progressBar";

import { Jumbotron } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardGroup from "react-bootstrap/CardGroup";

export default function MyPage() {
  const [showForm, set_showForm] = useState(false);

  //todo: Get the data -> Q1 out of all of the questions, you have this many right and wrong and this many unresolved
  //todo:

  const dispatch = useDispatch();
  const allSubjects = useSelector(selectAllSubjects);

  console.log("all subjects", allSubjects);

  useEffect(() => {
    dispatch(fetchAllSubjets());
  }, [dispatch]);

  if (!allSubjects || !allSubjects.length > 0) return null;

  const getStatusTrue = allSubjects.map(
    (subject) =>
      subject.flashcards && subject.flashcards.filter((card) => {
        return card.status === true;
      }).length
  );

  const getStatusFalse = allSubjects.map(
    (subject) =>
      subject.flashcards && subject.flashcards.filter((card) => {
        return card.status === false;
      }).length
  );

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
