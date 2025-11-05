// 2️⃣ Create two student objects
var student1 = {
    firstName: "Alice",
    lastName: "Johnson",
    age: 22,
    location: "Lagos",
};
var student2 = {
    firstName: "David",
    lastName: "Okoro",
    age: 25,
    location: "Abuja",
};
// 3️⃣ Create an array containing the students
var studentsList = [student1, student2];
// 4️⃣ Render a table dynamically using Vanilla JavaScript
var table = document.createElement("table");
var tableBody = document.createElement("tbody");
// Add table header (optional)
var headerRow = document.createElement("tr");
var headerName = document.createElement("th");
var headerLocation = document.createElement("th");
headerName.textContent = "First Name";
headerLocation.textContent = "Location";
headerRow.appendChild(headerName);
headerRow.appendChild(headerLocation);
tableBody.appendChild(headerRow);
// 5️⃣ Loop through the array and append each student’s data
studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    var nameCell = document.createElement("td");
    nameCell.textContent = student.firstName;
    var locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tableBody.appendChild(row);
});
table.appendChild(tableBody);
document.body.appendChild(table);
