import React, { useEffect, useState } from "react";
import { fetchAllSubjets } from "../../store/subject/actions";
import { selectAllSubjects } from "../../store/subject/selectors";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddSubjectForm from "./AddSubjectForm";
import ProgressBar from "../../components/progressBar";
import RoundedButton from '../../components/RoundedButton'


export default function MyPage() {
  const [showForm, set_showForm] = useState(false);

  const dispatch = useDispatch();
  const allSubjects = useSelector(selectAllSubjects);


  useEffect(() => {
    dispatch(fetchAllSubjets());
  }, [dispatch]);




  const getStatusTrue = allSubjects && allSubjects.map((subject) => ({
    numberOfTrueCards: subject.flashcards && subject.flashcards.filter((card) => {
      return card.status === true;
    }).length,
    nameOfSubjectTrue: subject.name,
  }));

  const getStatusFalse = allSubjects && allSubjects.map((subject) => ({
    numerOfFalseCards: subject.flashcards && subject.flashcards.filter((card) => {
      return card.status === false;
    }).length,
    nameOftheSubject: subject.name,
  }));


  const getStatusNull = allSubjects && allSubjects.map(
    (subject) =>
      subject.flashcards && subject.flashcards.filter((card) => {
        return card.status === null;
      }).length
  );


  return (
    <div className="wrapper colored hero">
      <section className="title">
        <h3>All subjects </h3>
      </section>
      <div className="Mcard-group">
        {allSubjects && allSubjects.map((subject) => (
          <Link to={`/subject/${subject.id}`} key={subject.id} >
            <div className='Mcard-group__card'>
              {subject.name}
            </div>
          </Link>
        ))}
      </div>
      <section className='my-page-footer'>
        <RoundedButton fixedRadius={124} onClick={() => set_showForm(!showForm)}>Create new Subject</RoundedButton>
        {showForm ? <AddSubjectForm /> : null}

        {allSubjects && allSubjects.length > 3 && (


          <ProgressBar
            getStatusTrue={getStatusTrue}
            getStatusFalse={getStatusFalse}
            getStatusNull={getStatusNull}
          />
        )}

      </section>
    </div >
  );
}
