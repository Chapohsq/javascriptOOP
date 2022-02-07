class Preside {

    constructor(name, surname, age, gender, scuola) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.gender = gender;
        this.scuola = scuola;
        this.teachers = [];
    }
}

addTeacher(teacherPassed);{  // dopo, con map, reduce
    if (this.teachers.length === 0) {
        this.teachers.push(teacherPassed);
    } else {
        // for (const student of this.students) {
        //     if (studentPassed.generateCode() !== student.generateCode()) {
        //         this.students.push(studentPassed);
        //         break;
        //     } else {
        //         console.log("Lo studente che stai tentando di inserire c'è già.");
        //     }
        // }
        for (const teacher of this.teachers) {
            if (teacherPassed.addStudentGrade() === teacher.addStudentGrade()) {
                console.log("L'insegnante che stai tentando di inserire c'è già.");
                return;
            }
        }
        this.teachers.push(teacherPassed);
    }
}
