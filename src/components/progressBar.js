import React from "react";
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";
import { useSelector } from "react-redux";
import { selectAllSubjects } from "../store/subject/selectors";


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];



export default function ProgressBar() {
  const allSubjects = useSelector(selectAllSubjects);
  if (allSubjects.length < 1) return (
    <p>Create some lessons to see your statistics</p>
  )

  const notEmptySubjects = allSubjects.filter((subject) => subject.flashcards && subject.flashcards.length > 0)

  if (notEmptySubjects.length < 1) return (
    <p>Add cards to your subjects to see some statistics</p>
  )

  const getStatusTrue = notEmptySubjects.map((subject) => ({
    value: subject.flashcards && subject.flashcards.filter((card) => card.status === true).length,
    name: subject.name,
  }));

  const getStatusFalse = notEmptySubjects.map((subject) => ({
    value: subject.flashcards && subject.flashcards.filter((card) => card.status === false || !card.status).length,
    name: subject.name,
  }));


  // const subjectWithMostMistakes = getStatusFalse.sort(
  //   (a, b) => b.numerOfFalseCards - a.numerOfFalseCards
  // );

  // const bestSubjects = getStatusTrue.sort(
  //   (a, b) => b.numberOfTrueCards - a.numberOfTrueCards
  // );



  // const MostWrong = [
  //   {
  //     name: subjectWithMostMistakes[0].nameOftheSubject,
  //     value: subjectWithMostMistakes[0].numerOfFalseCards,
  //   },
  //   {
  //     name: subjectWithMostMistakes[1].nameOftheSubject,
  //     value: subjectWithMostMistakes[1].numerOfFalseCards,
  //   },
  //   {
  //     name: subjectWithMostMistakes[2].nameOftheSubject,
  //     value: subjectWithMostMistakes[2].numerOfFalseCards,
  //   },
  //   {
  //     name: subjectWithMostMistakes[3].nameOftheSubject,
  //     value: subjectWithMostMistakes[3].numerOfFalseCards,
  //   },
  // ];

  // const topThreeMostRight = [
  //   {
  //     name: bestSubjects[0].nameOfSubjectTrue,
  //     value: bestSubjects[0].numberOfTrueCards,
  //   },
  //   {
  //     name: bestSubjects[1].nameOfSubjectTrue,
  //     value: bestSubjects[1].numberOfTrueCards,
  //   },
  //   {
  //     name: bestSubjects[2].nameOfSubjectTrue,
  //     value: bestSubjects[2].numberOfTrueCards,
  //   },
  // ];

  //In Which Subject do I make the most mistakes
  //In which Subject am I the best

  return (
    <>
      <section className='charts'>
        <div className='pieHolder'>
          <h3>

            Number of pending flashcards
    </h3>

          <PieChart width={300} height={300}>
            <Legend verticalAlign="top" height={36} />
            <Pie
              dataKey="value"
              isAnimationActive={true}
              data={getStatusFalse}
              cx={150}
              cy={150}
              labelLine={false}
              label={true}
              nameKey='name'
            >
              {getStatusFalse.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]}>{entry.name}</Cell>
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </div>
        <div className='pieHolder'>

          <h3>

            Number of completed flashcards
      </h3>
          <PieChart width={300} height={300}>
            <Legend verticalAlign="top" height={36} />
            <Pie
              dataKey="value"
              isAnimationActive={true}
              data={getStatusTrue}
              cx={150}
              labelLine={false}
              cy={150}
              label={true}
              nameKey='name'

            >
              {getStatusTrue.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]}>{entry.name}</Cell>

              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </div>
      </section>
    </>
  );
}
