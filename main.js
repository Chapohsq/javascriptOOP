// let student1 = { name: "pippo", surname: "de paolis", age: 13, gender: "m", grades: [7, 9, 10, 3, 2.5] };

let student1 = new Student("pippo", "de paolis", 13, "m");

student1.addGrade(7);

student1.addGrade(9);

student1.addGrade(10);

student1.addGrade(3);

student1.addGrade(2.5);

let student2 = new Student("paperino", "duck", 13, "m");



// console.log(student1.calculateMean());


// console.log(student1.generateCode()); 

// console.log(student1.toString()); 


// console.log(student2.toString());



let teacher = new Teacher ("Monica", "Duck",69, "f", "terza media");

// teacher.addStudent(student1)
// teacher.addGrade("pide2009");


//console.log(teacher.toString()); 

teacher.addStudent(student2);

teacher.addGrade1("padu2009", 5)
 console.log(teacher);
//console.log(teacher.toString());










