$(document).ready(function () {
    var tableBody = $("tbody");
    var tableContainer = $(".table-container");

    var nameSelect = $('#name')
    var dateSelect = $('#date');
    var categorySelect = $("#inputGroupCategory");
    var taskSelect = $('#inputGroupTask');
    var timeSelect = $('#inputGroupTime');
    var programId = $('#inputGroupProgram');
    var inputNotes = $('#inputGroupNotes');





    $(document).on("submit", "#timeSubmit", handleFormSubmit);
    $(document).on("click", ".delete", handleDeleteButtonPress);

    // A function for handling what happens when the form to create a new post is submitted
    function handleFormSubmit(event) {
        event.preventDefault();
        // Wont submit the post if we are missing a body, title, or author
        if (!nameSelect.val() || !dateSelect.val().trim() || !categorySelect.val() || !taskSelect.val() || !timeSelect.val() || !programId.val().trim()) {
            return;
        }
        // Constructing a newPost object to hand to the database
        var newTimeEntry = {
            employee_id: window.location.href,
            name: nameSelect.val(),

            // may need to reformat date information for mySQL?
            date: dateSelect.val(),
            category: categorySelect.val(),
            task: taskSelect.val(),
            timespent: timeSelect.val(),
            program: programId.val().trim(),
            notes: inputNotes.val().trim(),
        };

        submitTimeblock(newTimeEntry);
    };

    // Submits a new timeblock entry
    function submitTimeblock(data) {
        $.post("/api/timesheet", data)
            .then(getLastTenEntries);
    }


    // Function for creating a new list row for timeblocks
    function createTimesheetRow(newTimeEntry) {
        var newTr = $("<tr>");
        newTr.data("timeblock", newTimeEntry);
        newTr.append("<td>" + newTimeEntry.name + "</td>");
        newTr.append("<td>" + newTimeEntry.date + "</td>");
        newTr.append("<td>" + newTimeEntry.category + "</td>");
        newTr.append("<td>" + newTimeEntry.task + "</td>");
        newTr.append("<td>" + newTimeEntry.program + "</td>");
        newTr.append("<td>" + newTimeEntry.notes + "</td>");
        newTr.append("<td><a style='cursor:pointer;color:red' class='delete-entry'>Delete Entry</a></td>");
        return newTr;
    }

    // Function for retrieving timeblocks and getting them ready to be rendered to the page
    function getLastTenEntries() {
        $.get("/api/timesheet/limit=10", function (data) {
            var rowsToAdd = [];
            for (var i = 2; i < 9; i++) {
                rowsToAdd.push(createTimesheetRow(data[i]));
            }
            renderTimesheetList(rowsToAdd);
        });
    }

    // A function for rendering the list of timeblocks to the page
    function renderTimesheetList(rows) {
        tableBody.children().not(":last").remove();
        tableContainer.children(".alert").remove();
        if (rows.length) {
            console.log(rows);
            tableBody.prepend(rows);
        }
        else {
            renderEmpty()
        }
    }

    // Function for handling what to render when there are no authors
    function renderEmpty() {
        var alertDiv = $("<div>");
        alertDiv.addClass("alert alert-danger");
        alertDiv.text("Some text here");
        tableContainer.append(alertDiv);
    }

});