import React, { useEffect } from "react";
import { fetchSubjectById } from "../store/subject/actions";
import { selectActiveSubject } from "../store/subject/selectors";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import "./index.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";

import Anime, { anime } from "react-anime";

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
      <h3>The subject is: </h3>
      <h1>{activeSubject.name}</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Anime delay={anime.stagger(100)} scale={[0.1, 0.9]}>
          <Button
            size="lg"
            style={{ background: "#031508", border: "#031508" }}
          >
            Start to play
          </Button>
        </Anime>
      </div>
      <h3>All flashcards:</h3>
      <CardGroup
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        {activeSubject.flashcards.map((flashcard) => (
          <Card
            style={{
              height: "250px",
              width: "200px",
              margin: "5px",
              background: "#71CB99",
            }}
            key={flashcard.id}
          >
            <Link to={`/flashcards/${flashcard.id}`}>{flashcard.name}</Link>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
}
