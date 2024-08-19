
const student = {
    calcTax() {
        console.log("Cut the Salary by 10%");

    }
}

const student1 ={
    roll_no: 13,
}

student1.__proto = student;
console.log(student.calcTax());
