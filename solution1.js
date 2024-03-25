function Grade(marks) {
    if(marks>79) {
        return "A";
    } else if (marks>= 60 && marks <=79 ) {
        return "B";
    } else if (marks>= 50 && marks <=59) {
        return "C";
    } else if (marks>=40 && marks <=49) {
        return "D";
    }else{
        return "E";
    }
}


let studentMarks =studentGrades(prompt("Input studentMarks(between 0 and 100):"));


if (studentMarks >=0 && studentMarks <=100) {
    let grade = calculateGrade(studentMarks);
    console.log("The grade for ${studentMarks} marks is: ${grade}");
}else {
    console.log("Invalid");
}