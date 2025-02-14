const steps = ["one", "two", "three"];
const listTemplate = (step) => {
  return `<li>${step}</li>`;
};
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join(""); 

const grades = ["A", "B", "A"];
const gpaTemplate = (grade) => {
    if (grade === "A") {
        return 4;
    } else if (grade === "B") {
        return 3;
    }
};
const gradeGPA = grades.map(gpaTemplate);
console.log(gradeGPA);

const gpaPoints = grades.map(convertGradeToPoints);
const pointsTotal = gpaPoints.reduce(function (total, item) {
    return total + item;
});
const gpa = pointsTotal / gpaPoints.length;

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const sixFruits = fruits.filter((word) => word.Length < 6);
console.log(sixFruits)

const nums = [12, 34, 21, 54];
const luckyNumber = 21;
console.log(nums.indexOf(luckyNumber));

