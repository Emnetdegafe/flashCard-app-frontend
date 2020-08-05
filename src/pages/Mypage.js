import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { fetchAllSubjets } from "../store/subject/actions";
import { selectAllSubjects } from "../store/subject/selectors";
import { useDispatch, useSelector } from "react-redux";

import { Jumbotron } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardGroup from "react-bootstrap/CardGroup";

export default function MyPage() {
  const dispatch = useDispatch();
  const allSubjects = useSelector(selectAllSubjects);
  console.log("all subjects", allSubjects);

  useEffect(() => {
    dispatch(fetchAllSubjets());
  }, [dispatch]);

  if (!allSubjects || !allSubjects.length > 0) return null;

  return (
    <div>
      <h1>All subjects </h1>
      {allSubjects.map((subject) => (
        <CardGroup
          style={{
            display: "flex",
            flexDirection: "row",
            width: "18rem",
            height: "10rem",
          }}
        >
          <Card style={{ flex: 1 }} key={subject.id}>
            <Card.Text>
              <Link to={`/subject/${subject.id}`}>{subject.name}</Link>
            </Card.Text>
          </Card>
        </CardGroup>
      ))}
    </div>
  );
}
