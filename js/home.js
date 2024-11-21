let employees = [];
let employeeCount = 0;

// Select the <tbody> of the table to render rows into
const employeeTable = document.querySelector('.main'); // Or target a <tbody> if present
const addEmployeeBtn = document.getElementById('addEmployee');

addEmployeeBtn.addEventListener('click', function () {
    const name = prompt('Enter Name:');
    const contact = prompt('Enter Contact Number:');
    const passport = prompt('Enter Passport Number:');
    const passportValid = prompt('Enter Passport Expiration Date:');
    const salary = prompt('Enter Salary:');

    if (name && contact && passport && passportValid && salary) {
        employees.push({ id: ++employeeCount, name, contact, passport, passportValid, salary });
        renderTable();
    } else {
        alert('Please fill in all fields!');
    }
});

function renderTable() {
    // Clear existing rows except the header
    const rows = employeeTable.querySelectorAll('tr:not(:first-child)');
    rows.forEach(row => row.remove());

    // Add rows for each employee
    employees.forEach((employee) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.contact}</td>
            <td>${employee.passport}</td>
            <td>${employee.passportValid}</td>
            <td>${employee.salary}</td>
            <td class="actions">
                <button class="edit" onclick="editEmployee(${employee.id})">Edit</button>
                <button class="delete" onclick="deleteEmployee(${employee.id})">Delete</button>
            </td>
        `;

        employeeTable.appendChild(row);
    });
}

function editEmployee(id) {
    const employee = employees.find(emp => emp.id === id);

    if (employee) {
        employee.name = prompt('Enter Name:', employee.name);
        employee.contact = prompt('Enter Contact Number:', employee.contact);
        employee.passport = prompt('Enter Passport Number:', employee.passport);
        employee.passportValid = prompt('Enter Passport Expiration Date:', employee.passportValid);
        employee.salary = prompt('Enter Salary:', employee.salary);

        renderTable();
    }
}

function deleteEmployee(id) {
    employees = employees.filter(emp => emp.id !== id);
    renderTable();
}
