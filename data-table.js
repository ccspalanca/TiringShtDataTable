// Handle form submission
const studentForm = document.getElementById('student-form');
const dataTable = document.getElementById('data-table').querySelector('tbody');

studentForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const course = document.getElementById('course').value;

    // Add a new row to the table
    const newRow = dataTable.insertRow();
    newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${gender}</td>
        <td>${course}</td>
    `;

    // Clear form fields
    studentForm.reset();
});

// Reset button to clear the table
const resetButton = studentForm.querySelector('button[type="reset"]');
resetButton.addEventListener('click', function () {
    dataTable.innerHTML = '';
});

// Filter functionality
function filterTable() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const genderFilter = document.querySelector('input[name="genderFilter"]:checked').value;
    const courseFilter = document.getElementById('courseFilter').value;

    const rows = dataTable.querySelectorAll('tr');

    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const [firstName, lastName, gender, course] = Array.from(cells).map(cell => cell.textContent.toLowerCase());

        const matchesSearch = firstName.includes(searchInput) || lastName.includes(searchInput);
        const matchesGender = !genderFilter || gender === genderFilter.toLowerCase();
        const matchesCourse = !courseFilter || course === courseFilter.toLowerCase();

        if (matchesSearch && matchesGender && matchesCourse) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}
