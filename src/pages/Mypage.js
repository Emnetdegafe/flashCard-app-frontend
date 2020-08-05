import React, { useEffect } from "react"
import { fetchAllSubjets, fetchSubjectById } from '../store/subject/actions'
import { selectAllSubjects, } from '../store/subject/selectors'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
export default function MyPage() {
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
          <Link to={`/subject`} onClick={() => dispatch(fetchSubjectById(subject.id))}>
            {subject.name}
          </Link>
        </li>)}
      </ul>
    </div>
  )

}