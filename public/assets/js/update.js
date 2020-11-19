$(document).ready(function () {
    var tableBody = $("tbody");
    var tableContainer = $(".table-container");

    var userName = $('#hidden-employeeId').text();
    var entryId = $('#hidden-logId').text();
    var nameSelect = $('#inputGroupEmployee');
    var dateSelect = $('#date');
    var categorySelect = $("#inputGroupCategory");
    var taskSelect = $('#inputGroupTask');
    var timeSelect = $('#inputGroupTime');
    var programId = $('#inputGroupProgram');
    var inputEcr = $('#inputGroupEcr');
    var inputNotes = $('#inputGroupNotes');

    //Probably need to recode this for deployment
    // var windowURL = window.location.href
    // var entryId = windowURL.split("http://localhost:8080/update/", 2)
    // entryId = entryId[1]

    console.log(entryId)

    updating = true;

    $(document).on("click", "#timeSubmit", handleFormSubmit);
    $(document).on("click", ".delete-entry", handleDeleteButtonPress);

    // Getting the initial list of Time Entries
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
            employee_id: userName,
            name: nameSelect.val(),

            // may need to reformat date information for mySQL?
            date: dateSelect.val(),
            category: categorySelect.val(),
            task: taskSelect.val(),
            timespent: timeSelect.val(),
            program: programId.val().trim(),
            ecr: inputEcr.val(),
            notes: inputNotes.val(),
        };

        if (updating) {
            console.log("fetching updates");
            newTimeEntry.id = entryId;
            updateTimeblock(newTimeEntry);
        } else {
            submitTimeblock(newTimeEntry);
        }
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
            newTr.append("<td><i style='cursor:pointer;color:#a72b32' class='edit-entry fa fa-pencil-square-o aria-hidden='true'></i></td>");
            newTr.append("<td><i style='cursor:pointer;color:#a72b32' class='delete-entry fa fa-trash-o'></i></td>");
            allEntries.push(newTr)
        }
        return allEntries;
    }

    // Function for retrieving timeblocks and getting them ready to be rendered to the page
    function getLastTenEntries() {
        var rowsToAdd = [];
        var route = "";
        if (updating) {
            route = "/api/timesheets/entries/" + entryId;
        } else {
            route = "/api/timesheets/limit=20/" + userName;
        }
        console.log(route);
        $.get(route, function (data) {
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
        alertDiv.text("There are no entries for the selected employee");
        tableContainer.append(alertDiv);
    }

    // Function for handling what happens when the delete button is pressed
    function handleDeleteButtonPress() {
        var id = $(this).parent("td").parent("tr").data("timeblock");
        console.log(id);
        $.ajax({
            method: "DELETE",
            url: "api/timesheets/entries/" + id
        })
            .then(getLastTenEntries);
    }

    // working on editing
    $(document).on("click", ".edit-entry", handleEdit);

    // This function figures out which post we want to edit and takes it to the appropriate url
    function handleEdit() {
        console.log("yes");
        var currentEntry = $(this).parent("td").parent("tr").data("timeblock");
        console.log(currentEntry);
        updating = true;
        window.location.href = "/update/" + currentEntry
    }

    // Update a given post, bring user to the blog page when done ***NEED TO IMPLEMENT SWITCH BETWEEN DEPARTMENTS***
    function updateTimeblock(entry) {
        $.ajax({
            method: "PUT",
            url: "/api/timesheets/entries/" + entryId,
            data: entry
        })
            .then(function () {
                window.location.href = "/eng/" + userName;
            });
    }
});