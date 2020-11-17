$(document).ready(function () {
    var tableBody = $("tbody");
    var tableContainer = $(".table-container");

    var userName = $('#hiddenId');
    var nameSelect = $('#inputGroupEmployee');
    var dateSelect = $('#date');
    var categorySelect = $("#inputGroupCategory");
    var taskSelect = $('#inputGroupTask');
    var timeSelect = $('#inputGroupTime');
    var programId = $('#inputGroupProgram');
    var inputNotes = $('#inputGroupNotes');

    $(document).on("submit", "#timeSubmit", handleFormSubmit);
    $(document).on("click", ".delete-entry", handleDeleteButtonPress);

    // Getting the initial list of Authors
    getLastTenEntries();

    // A function for handling what happens when the form to create a new post is submitted
    function handleFormSubmit(event) {
        event.preventDefault();
        // Wont submit the post if we are missing a body, title, or author
        if (!nameSelect.val() || !dateSelect.val().trim() || !categorySelect.val() || !taskSelect.val() || !timeSelect.val() || !programId.val().trim()) {
            return;
        }
        // Constructing a newPost object to hand to the database
        var newTimeEntry = {
            employee_id: userName.val(),
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
        $.post("/api/timesheets", data)
            .then(getLastTenEntries);
    }

    // Function for creating a new list row for timeblocks

    // for some reason this is not working
    function createTimesheetRow(newTimeEntry) {
        var allEntries = [];
        for (var i = 0; i < newTimeEntry.length; i++) {
            var newTr = $("<tr>");
            newTr.data("timeblock", newTimeEntry[i].id);
            newTr.append("<td>" + newTimeEntry[i].id + "</td>");
            newTr.append("<td>" + newTimeEntry[i].name + "</td>");
            newTr.append("<td>" + newTimeEntry[i].date + "</td>");
            newTr.append("<td>" + newTimeEntry[i].category + "</td>");
            newTr.append("<td>" + newTimeEntry[i].task + "</td>");
            newTr.append("<td>" + newTimeEntry[i].timespent + "</td>");
            newTr.append("<td>" + newTimeEntry[i].program + "</td>");
            newTr.append("<td>" + newTimeEntry[i].ecr + "</td>");
            newTr.append("<td>" + newTimeEntry[i].notes + "</td>");
            newTr.append("<td><a style='cursor:pointer;color:red' class='delete-entry'>Delete Entry</a></td>");
            allEntries.push(newTr)
        }
        return allEntries;
    }

    // Function for retrieving timeblocks and getting them ready to be rendered to the page
    function getLastTenEntries() {
        var rowsToAdd = [];
        $.get("/api/timesheets/limit=10/" + userName.val(), function (data) {
            for (var i = 0; i < data.length; i++) {
                var newTimeEntry = {
                    id: data[i].id,
                    employee_id: data[i].employee_id,
                    name: data[i].name,
                    date: data[i].date,
                    category: data[i].category,
                    task: data[i].task,
                    ecr: data[i].ecr,
                    timespent: data[i].timespent,
                    program: data[i].program,
                    notes: data[i].notes,
                }
                // console.log(newTimeEntry);
                rowsToAdd.push(newTimeEntry);
                // console.log(rowsToAdd);
            }
            renderTimesheetList(createTimesheetRow(rowsToAdd));
        });
    }

    // A function for rendering the list of timeblocks to the page
    function renderTimesheetList(rowsToAdd) {
        tableBody.children().not(":last").remove();
        tableContainer.children(".alert").remove();
        if (rowsToAdd.length) {
            // console.log(rowsToAdd);
            tableBody.prepend(rowsToAdd);
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

    // Function for handling what happens when the delete button is pressed
    function handleDeleteButtonPress() {
        var id = $(this).parent("td").parent("tr").data("timeblock");
        console.log(id);
        $.ajax({
            method: "DELETE",
            url: "api/timesheets/" + id
        })
            .then(getLastTenEntries);
    }

});