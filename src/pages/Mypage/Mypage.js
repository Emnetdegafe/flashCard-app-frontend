import React, { useEffect, useState } from "react"
import { fetchAllSubjets } from '../../store/subject/actions'
import { selectAllSubjects, } from '../../store/subject/selectors'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import AddSubjectForm from "./AddSubjectForm";


export default function MyPage() {
  const [showForm, set_showForm] = useState(false)

  const dispatch = useDispatch();
  const allSubjects = useSelector(selectAllSubjects)
  console.log('all subjects', allSubjects)

  useEffect(() => {
    dispatch(fetchAllSubjets());

  }, [dispatch]);

  if (!allSubjects || !allSubjects.length > 0) return null

  return (

    <div>
      <h1>All subjects</h1>

      <ul>
        {allSubjects.map((subject) => <li key={subject.id}>
          <Link to={`/subject/${subject.id}`} >
            {subject.name}
          </Link>
        </li>)}
      </ul>

      <button onClick={()=> set_showForm(true)}>Create new Subject</button>
      {showForm? <AddSubjectForm/>: null}
    </div>
  )

}