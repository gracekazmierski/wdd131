function getGrades(inputSelector) {
    const grades = document.querySelector(inputSelector).value;
    const gradeArray = grades.split(',');
    const cleanArray = gradeArray.map((x) => x.toUpperCase().trim());
    console.log(cleanArray);
    return cleanArray;
}

function lookupGrade(grade) {
    let points = 0;
    if (grade === "A") {
        points = points + 4;
    } else if (grade === "B") {
        points = points + 3;
    } else if (grade == "C") {
        points = points + 2;
    } else if (grade == "D") {
        points = points + 1;
    } else {
        points = points;
    }
    return points;
}

function calculateGPA(grades) {
    const gradePoints = grades.map((grade) => lookupGrade(grade));
    const GPA = gradePoints.reduce((total, num) => total + num) / gradePoints.length;
    return GPA.toFixed(2);
}

function outputGPA(GPA, selector) {
    const output = document.querySelector(selector);
    output.innerText = GPA;
}

function clickHandler() {
    const grades = getGrades("#grades");
    const gpa = calculateGPA(grades);
    outputGPA(gpa, "#output");
}

document.querySelector("#submitButton").addEventListener("click", clickHandler);
