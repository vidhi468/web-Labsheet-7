// Get form and table body
let form = document.getElementById("studentForm");
let tableBody = document.querySelector("#studentTable tbody");

// Email validation function
function isValidEmail(email) {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return email.match(pattern);
}

// Form submit event
form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get values
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let course = document.getElementById("course").value;
    let email = document.getElementById("email").value;

    // Validation
    if (!isValidEmail(email)) {
        alert("Invalid Email Format");
        return;
    }

    // Create row
    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${roll}</td>
        <td>${course}</td>
        <td>${email}</td>
        <td><button class="deleteBtn">Delete</button></td>
    `;

    // Delete functionality
    row.querySelector(".deleteBtn").addEventListener("click", function() {
        row.remove();
    });

    // Add row to table
    tableBody.appendChild(row);

    // Reset form after submission
    form.reset();
});
