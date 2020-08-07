import React from "react";
import { PieChart, Pie, Legend, Tooltip } from "recharts";

export default function progressBar(props) {
  const {
    getStatusTrue,
    getStatusFalse,
  } = props;

  if (!getStatusTrue ||
    !getStatusTrue.length < 1 ||
    !getStatusFalse ||
    !getStatusFalse.length < 1

  ) return null

  const subjectWithMostMistakes = getStatusFalse.sort(
    (a, b) => b.numerOfFalseCards - a.numerOfFalseCards
  );

  const bestSubjects = getStatusTrue.sort(
    (a, b) => b.numberOfTrueCards - a.numberOfTrueCards
  );



  const MostWrong = [
    {
      name: subjectWithMostMistakes[0].nameOftheSubject,
      value: subjectWithMostMistakes[0].numerOfFalseCards,
    },
    {
      name: subjectWithMostMistakes[1].nameOftheSubject,
      value: subjectWithMostMistakes[1].numerOfFalseCards,
    },
    {
      name: subjectWithMostMistakes[2].nameOftheSubject,
      value: subjectWithMostMistakes[2].numerOfFalseCards,
    },
    {
      name: subjectWithMostMistakes[3].nameOftheSubject,
      value: subjectWithMostMistakes[3].numerOfFalseCards,
    },
  ];

  const topThreeMostRight = [
    {
      name: bestSubjects[0].nameOfSubjectTrue,
      value: bestSubjects[0].numberOfTrueCards,
    },
    {
      name: bestSubjects[1].nameOfSubjectTrue,
      value: bestSubjects[1].numberOfTrueCards,
    },
    {
      name: bestSubjects[2].nameOfSubjectTrue,
      value: bestSubjects[2].numberOfTrueCards,
    },
  ];

  //In Which Subject do I make the most mistakes
  //In which Subject am I the best

  return (
    <div>
      Most answered wrong
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={MostWrong}
          cx={200}
          cy={200}
          fill="#8884d8"
        />

        <Tooltip />
      </PieChart>
      Top 3 Best
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={topThreeMostRight}
          cx={200}
          cy={200}
          fill="#8884d8"
        />

        <Tooltip />
      </PieChart>
    </div>
  );
}
