$(document).ready(function () {
    var employeeId = $("#employee-id");
    var name = $('#name')
    var department = $('#department');
    var title = $("#title");
    var salary = $('#salary');

    $(document).on("submit", "#timeSubmit", handleFormSubmit);
    $(document).on("click", ".delete", handleDeleteButtonPress);

    // A function for handling what happens when the form to create a new employee is submitted
    function handleFormSubmit(event) {
        event.preventDefault();
        // Wont submit if data is missing.
        if (!employeeId.val().trim() || !name.val().trim() || !department.val().trim() || !title.val().trim() || !salary.val().trim()) {
            return;
        }
        // Constructing a newEmployee object to hand to the database
        var newEmployee = {
            employee_id: employeeId.val().trim(),
            name: name.val().trim(),
            dept: department.val().trim(),
            title: title.val().trim(),
            salary: salary.val().trim(),
        };

        //below function still needs to be written.
        submitEmployee(newEmployee);
    };
});
