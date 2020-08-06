import React from "react";
import { ProgressBar} from "react-bootstrap"

export default function progressBar() {
  return <div>
      <ProgressBar now={60} />
  </div>;
}

//When a user gets a question right -> put request to update the status
//from the database we get all the questions from a specific subject with the status:true
//then we need the number of all the flashcards for that subject and the number with status:true for calculations
