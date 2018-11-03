var studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scoresObject) {
  var recordSummary = {
    studentGrades: [],
    exams: [],
  };
  Object.keys(scoresObject).forEach(function(student) {
    var resultsObject = {};
    var examScores = scoresObject[student]['scores']['exams'];
    var exerciseScores = scoresObject[student]['scores']['exercises'];
    var numericGrade = determineNumericGrade(averageExamScore(examScores), totalExerciseScore(exerciseScores));
    var letterGrade = determineLetterGrade(numericGrade);
    resultsObject['average'] = averageExamScore(examScores);
    resultsObject['minimum'] = Math.min(...examScores);
    resultsObject['maximum'] = Math.max(...examScores);
    recordSummary.studentGrades.push(`${numericGrade} (${letterGrade})`);
    recordSummary.exams.push(resultsObject);
  }); 
  return recordSummary;
}

function averageExamScore(examScoresArray) {
  var result = (examScoresArray.reduce ((acc, currVal) => {return acc + currVal})) / examScoresArray.length;
  return Number(result.toFixed(1));
}

function totalExerciseScore(exerciseScoreArray) {
  return exerciseScoreArray.reduce ((acc, currVal) => {return acc + currVal});
}

function determineNumericGrade(examScore, exerciseScore) {
  var EXAM_WEIGHTING = 0.65;
  var EXERCISE_WEIGHTING = 0.35;
  var numericGrade = Math.round((examScore * EXAM_WEIGHTING) + (exerciseScore * EXERCISE_WEIGHTING));
  return numericGrade;
}

function determineLetterGrade(finalScore) {
  if (finalScore >= 93) {
    return 'A';
  } else if (finalScore < 93 && finalScore >= 85) {
    return 'B';
  } else if (finalScore < 85 && finalScore >= 77) {
    return 'C';
  } else if (finalScore < 77 && finalScore >= 69) {
    return 'D';
  } else if (finalScore < 69 && finalScore >= 60) {
    return 'E';
  } else if (finalScore < 60 && finalScore >= 0) {
    return 'F';
  }
}

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }