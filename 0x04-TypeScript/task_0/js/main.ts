interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2️⃣ Create two student objects
const student1: Student = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 22,
  location: "Lagos",
};

const student2: Student = {
  firstName: "David",
  lastName: "Okoro",
  age: 25,
  location: "Abuja",
};

// 3️⃣ Create an array containing the students
const studentsList: Student[] = [student1, student2];

// 4️⃣ Render a table dynamically using Vanilla JavaScript
const table = document.createElement("table");
const tableBody = document.createElement("tbody");

// Add table header (optional)
const headerRow = document.createElement("tr");
const headerName = document.createElement("th");
const headerLocation = document.createElement("th");
headerName.textContent = "First Name";
headerLocation.textContent = "Location";
headerRow.appendChild(headerName);
headerRow.appendChild(headerLocation);
tableBody.appendChild(headerRow);

// 5️⃣ Loop through the array and append each student’s data
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);
