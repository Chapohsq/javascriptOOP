class Teacher {
    constructor(name, surname, age, gender, degree) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.gender = gender;
        this.degree = degree;
        this.students = [];

    }

    toString() {
        let description = "nome: " + this.name + "\n"
            + "Cognome " + this.surname + "\n"
            + "Età " + this.age + "\n"
            + "Gender " + this.gender + "\n"
            + "Degree " + this.degree + "\n"

        return description


    }
    addStudent(student) {

        let eCompreso = false;
        for (const stud of this.students) {
            if (stud.generateCode() === student.generateCode()) {
                eCompreso = true;
            }
        }
        if (eCompreso === false) {
            this.students.push(student)
        }

    }

    addGrade1(studentCode, grade) {

        for (const stud of this.students) {
            if (stud.generateCode() === studentCode) {
                stud.addGrade(grade);
            }
        }
        return;
       
    }

    bestStudent(student){
if (this.student.length === 0) {
    return "nessun miglior studente"
}

        let bestStudent = this.students[0]
for (let i = 1; i < this.students.length; i++) {
    const element = this.students[i];

    if (stud.calcolateMean()> bestStudent.calcolateMean()) {
        bestStudent = stud;
    }return bestStudent.toString();
}


    }

}

