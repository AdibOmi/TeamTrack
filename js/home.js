document.addEventListener('DOMContentLoaded', () => {
    let employeeData = [];
    const employeeTableBody = document.getElementById('employeeTableBody');
    const addEmployeeBtn = document.getElementById('addEmployeeBtn');

    // Function to render employee data in the table
    function renderTable() {
        employeeTableBody.innerHTML = '';
        employeeData.forEach((employee, index) => {
            const row = `
                <tr>
                    <td>${index + 1}</td>
                    <td>${employee.firstName}</td>
                    <td>${employee.lastName}</td>
                    <td>${employee.email}</td>
                    <td>${employee.salary}</td>
                    <td>${employee.date}</td>
                    <td>
                        <button onclick="editEmployee(${index})">Edit</button>
                        <button onclick="deleteEmployee(${index})">Delete</button>
                    </td>
                </tr>
            `;
            employeeTableBody.insertAdjacentHTML('beforeend', row);
        });
    }

    // Add sample logic for adding, editing, and deleting employees
    addEmployeeBtn.addEventListener('click', () => {
        // Add new employee logic
    });

    window.editEmployee = function(index) {
        // Edit employee logic
    };

    window.deleteEmployee = function(index) {
        // Delete employee logic
        employeeData.splice(index, 1);
        renderTable();
    };

    renderTable(); // Initial render
});
