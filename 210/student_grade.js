score1 = parseInt(prompt('Enter Score 1'), 10);
score2 = parseInt(prompt('Enter Score 2'), 10);
score3 = parseInt(prompt('Enter Score 3'), 10);
average = (score1 + score2 + score3) / 3;
letterGrade = null
if (average >= 90) {
  letterGrade = 'A';
} else if (average >= 70 && average < 90) {
  letterGrade = 'B';
} else if (average >= 50 && average < 70) {
  letterGrade = 'C';
} else if (average < 50) {
  letterGrade = 'F';
}

console.log(`Based on the average of your three scores, your average grade is ${letterGrade}`);