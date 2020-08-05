import React, { useState, useEffect } from "react";
import { Form, Col, Button } from "react-bootstrap";
import { AddNewSubject } from "../../store/subject/actions";
import { useDispatch } from "react-redux";

export default function AddSubjectForm() {
  const [name, set_name] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(AddNewSubject(name));
  };
  return (
    <div>
      <h1>Add a subject</h1>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <Form.Group controlId="text">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(event) => set_name(event.target.value)}
            type="name"
            placeholder="Enter name of subject"
            required
          />
        </Form.Group>
        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Add Subject
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
