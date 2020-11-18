$(document).ready(function () {

    let task = {
        pm_tasks: ["Kick-Off", "Project Planning", "Internal Meeting", "Program Tracking", "Customer Support", "Customer Meeting"],
        mfg_tasks: ["Tooling LP", "Tooling Mold", "Tooling Hotwire", "Tooling Programming", "GPD Cushion Rev", "GPD dress covers"],
        eng_tasks: ["Design", "Samples", "GPDs", "Patterns", "TLDs", "BOMs", "Labels", "Product Development", "Review", "Other"],
        ecr_tasks: ["Design", "GPDs", "Patterns", "TLDs", "BOMs", "Product Development", "Labels", "Review", "Processing", "Other"],
        admin_tasks: ["Other", "Internal Meeting", "Customer Meeting", "Training", "H-cell Support", "Production/Mfg Supprort", "Emails"],
        rd_tasks: ["Product Development", "Production Implementation", "Sales Samples"]
    }

    let category = {
        eng_category: ["ECR", "Development", "Admin", "R&D"],
        mfg_category: ["ECR", "Development", "Admin", "R&D"],
        pm_category: ["Program Management", "Admin"],
    }

    let company = ["US", "UK", "POL"]
    let type = ["Dress Cover", "Cushions", "Armcaps", "Other"]

    const minutes = [15, 30, 45, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450, 480, 510]

    var employees = [];
    var employeeId = [];

    // Function that dyanmically creates the time input options for the user in the html
    function companyDropdown() {
        console.log("fetching Company...");
        for (let i = 0; i < company.length; i++) {
            let dropdown = $("<option>").attr("value", company[i]).text(company[i]);
            $("#inputGroupCompany").append(dropdown);
        }
    }

    function typeDropdown() {
        console.log("fetching Types...");
        for (let i = 0; i < type.length; i++) {
            let dropdown = $("<option>").attr("value", type[i]).text(type[i]);
            $("#inputGroupType").append(dropdown);
        }
    }

    // Function for retrieving employees and for dynamic drop down filler
    function getEmployees() {
        console.log("fetching Employees...");
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
        //For loop that checks the URL for a userId and compares to the employee_id key in the database. If accurate, it sets the Name value in the html for the user by default.
        for (let i = 0; i < employeeId.length && employees.length; i++) {
            if (window.location.href === "http://localhost:8080/eng" + employeeId || "http://localhost:8080/mfg" + employeeId || "http://localhost:8080/pm" + employeeId) {
                if (window.location.href.indexOf(employeeId[i]) > -1) {
                    let dropdown = $("<option>").attr("value", employees[i]).text(employees[i]);
                    $("#inputGroupEmployee").append(dropdown);
                    return;
                }
            }
        };
        // For loop that gets all employees and dynamically creates listin the html for the respective departments.
        if (window.location.href === "http://localhost:8080/eng" || "http://localhost:8080/mfg" || "http://localhost:8080/pm") {
            for (let i = 0; i < employees.length; i++) {
                let dropdown = $("<option>").attr("value", employees[i]).text(employees[i]);
                // dropdown = dropdown.text(category.eng_category[i]);
                $("#inputGroupEmployee").append(dropdown);
            }
        }
    };

    // Function that dyanmically creates the categories input options for the user in the html
    function categoriesDropdown() {
        console.log("fetching Categories...");
        if (window.location.href === "http://localhost:8080/eng" || "http://localhost:8080/eng" + employeeId) {
            for (let i = 0; i < category.eng_category.length; i++) {
                let dropdown = $("<option>").attr("value", category.eng_category[i]).text(category.eng_category[i]);
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

    // Function that dyanmically creates the task input options for the user in the html
    function tasksDropdown() {
        console.log("fetching Tasks...");
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

    // Function that dyanmically creates the time input options for the user in the html
    function timesDropdown() {
        console.log("fetching Times...");
        for (let i = 0; i < minutes.length; i++) {
            let dropdown = $("<option>").attr("value", minutes[i]).text(minutes[i]);
            $("#inputGroupTime").append(dropdown);
        }
    }

    getEmployees();
    categoriesDropdown();
    tasksDropdown();
    timesDropdown();
    typeDropdown();
    companyDropdown();

    //Set default date of today in date input field
    var today = new Date();
    var dd = ("0" + (today.getDate())).slice(-2);
    var mm = ("0" + (today.getMonth() + 1)).slice(-2);
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    $("#date").attr("value", today);

});