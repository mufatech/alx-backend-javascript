// Write an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)
// Create two students, and create an array named studentsList containing the two variables
// Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
// Each row should contain the first name of the student and the location

// Define the Student interface
interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

// Create two student objects
const firstStudent: Student = {
	firstName: "Innocent",
	lastName: "Udo",
	age: 100,
	location: "Nigeria"
}

const secondStudent: Student = {
	firstName: "Charles",
	lastName: "Udo",
	age: 50,
	location: "Calabar"
}

// Create an array of students
const studentsList = [firstStudent, secondStudent];

const table = document.getElementById('studentTable') as HTMLTableElement;

// Create a new row for each student and append it to the table
studentsList.forEach((student) => {
	const row = table.insertRow();
	const firstNameCell = row.insertCell(0);
	const locationCell = row.insertCell(1);

	firstNameCell.innerHTML = student.firstName;
	locationCell.innerHTML = student.location;
})
[A[A[A[A[A[A[A[A[A[A[A[A[A[A[A[A[A[A[A[A[A[A[A[A[A[A[A[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[CSidiqat[B[D[D[D[D[D[DFasasi[B[D[D[D[D[D[D[D[D[A[C[C[C[C[C[C[C[C",[B[D[D[D[D[D[D[D[D[D[D[D5[3~[3~[3~[3~[3~[3~[3[C[C[[C[C[C 50,[B[B[B[B[B[C[C[C[C[3~[3~[3~[3~[3~[3~[3"[3~[3~[3~[C[C[C[C[Olaoye[B[D[D[DAbosede[B[D[D[D[D[D[D[D[D[D[D[D[4[B[C[C[C[C[C[C[C[C[C[Lagos[3~[C[C[C"[B[B[B[B[B[B[B[B[B[B[B[B[B[B[B[B[B[B[B[B[B[A[A[B[D[D[D[D[D[D[D[D[D[D[D[D[D[D[D[D[D[D[D[D[D[D[D
