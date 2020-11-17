$(document).ready(function () {

    let task = {
        pm_tasks: ["Kick-Off", "Project Planning", "Design Meeting", "Program Tracking", "Customer Support", "Program (Meeting)"],
        mfg_tasks: ["Tooling-LP", "Tooling-Mold", "Tooling-Hotwire", "Tooling Programming", "GPD cushion rev", "GPD dress covers", "Admin"],
        eng_tasks: ["Drawings"],
        admin_tasks: ["Training", "Out of Office", "Work Share", "Furlough"],
    }

    let category = {
        eng_category: ["ECR", "Development", "Non-Development", "Sales Samples", "Admin"],
        mfg_category: ["ECR", "Development", "Non-Development", "Sales Samples", "Admin"],
        pm_category: ["ECR", "Development", "Non-Development", "Sales Samples", "Admin"],
    }

    const minutes = [15, 30, 45, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450, 480, 510]

    var employees = [];
    var employeeId = [];

    // Function for retrieving employees and for dynamic drop down filler
    function getEmployees() {
        $.get("/api/employees", function (data) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].status === 'Active') {
                    employees.push(data[i].name);
                    employeeId.push(data[i].employee_id);
                }
            }
        })
        .then(employeesDropdown);
    };

    function employeesDropdown() {
        if (window.location.href === "http://localhost:8080/eng" || "http://localhost:8080/mfg" || "http://localhost:8080/pm") {
            for (let i = 0; i < employees.length; i++) {
                let dropdown = $("<option>").attr("value", employees[i]).text(employees[i]);
                // dropdown = dropdown.text(category.eng_category[i]);
                $("#inputGroupEmployee").append(dropdown);
            }
    }};

    function categoriesDropdown() {
        console.log("getting Categories");
        if (window.location.href === "http://localhost:8080/eng" || "http://localhost:8080/eng" + employeeId) {
            for (let i = 0; i < category.eng_category.length; i++) {
                let dropdown = $("<option>").attr("value", category.eng_category[i]).text(category.eng_category[i]);
                // dropdown = dropdown.text(category.eng_category[i]);
                $("#inputGroupCategory").append(dropdown);
            }
        } else if (window.location.href === "http://localhost:8080/mfg" || "http://localhost:8080/mfg" + employeeId) {
            for (let i = 0; i < category.mfg_category.length; i++) {
                let dropdown = $("<option>").attr("value", category.mfg_category[i]).text(category.mfg_category[i]);
                $("#inputGroupCategory").append(dropdown);
            }
        } else if (window.location.href === "http://localhost:8080/pm" || "http://localhost:8080/pm" + employeeId) {
            for (let i = 0; i < category.pm_category.length; i++) {
                let dropdown = $("<option>").attr("value", category.pm_category[i]).text(category.pm_category[i]);
                $("#inputGroupCategory").append(dropdown);
            }
        }
    };

    function tasksDropdown() {
        console.log("getting Tasks");
        if (window.location.href === "http://localhost:8080/eng" || "http://localhost:8080/eng" + employeeId) {
            for (let i = 0; i < task.eng_tasks.length; i++) {
                let dropdown = $("<option>").attr("value", task.eng_tasks[i]).text(task.eng_tasks[i]);
                $("#inputGroupTask").append(dropdown);
            }
        } else if (window.location.href === "http://localhost:8080/mfg" || "http://localhost:8080/mfg" + employeeId) {
            for (let i = 0; i < task.mfg_tasks.length; i++) {
                let dropdown = $("<option>").attr("value", task.mfg_tasks[i]).text(task.mfg_tasks[i]);
                $("#inputGroupTask").append(dropdown);
            }
        } else if (window.location.href === "http://localhost:8080/pm" || "http://localhost:8080/pm" + employeeId) {
            for (let i = 0; i < task.pm_tasks.length; i++) {
                let dropdown = $("<option>").attr("value", task.pm_tasks[i]).text(task.pm_tasks[i]);
                $("#inputGroupTask").append(dropdown);
            }
        }
    }

    function timesDropdown() {
        console.log("getting Times");
        for (let i = 0; i < minutes.length; i++) {
            let dropdown = $("<option>").attr("value", minutes[i]).text(minutes[i]);
            $("#inputGroupTime").append(dropdown);
        }
    }

    getEmployees();
    categoriesDropdown();
    tasksDropdown();
    timesDropdown();

});