import React, { useEffect } from "react";
import { fetchSubjectById } from "../store/subject/actions";
import { selectActiveSubject } from "../store/subject/selectors";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

export default function MyPage() {
  const { subjectId } = useParams();
  const dispatch = useDispatch();
  const activeSubject = useSelector(selectActiveSubject);

  useEffect(() => {
    dispatch(fetchSubjectById(subjectId));
  }, [subjectId, dispatch]);

  if (!activeSubject || !activeSubject.name) return null;
  return (
    <div>
      <h1>The subject is {activeSubject.name}</h1>
      <h3>All flashcards:</h3>
      {activeSubject.flashcards.map((flashcard) => (
        <CardGroup
          style={{
            display: "flex",
            flexDirection: "row",
            width: "18rem",
            height: "10rem",
          }}
        >
          <Card key={flashcard.id}>
            <Link to={`/flashcards/${flashcard.id}`}>{flashcard.name}</Link>
          </Card>
        </CardGroup>
      ))}
    </div>
  );
}
