$(document).ready(function () {


    let pm_tasks = ["Kick-Off", "Project Planning", "Internal Meeting", "Program Tracking", "Customer Support", "Customer Meeting"]
    let mfg_tasks = ["Tooling LP", "Tooling Mold", "Tooling Hotwire", "Tooling Programming", "GPD Cushion Rev", "GPD dress covers"]
    let eng_tasks = ["Design", "Samples", "GPDs", "Patterns", "TLDs", "BOMs", "Labels", "Product Development", "Review", "Other"]
    let ecr_tasks = ["Design", "GPDs", "Patterns", "TLDs", "BOMs", "Product Development", "Labels", "Review", "Processing", "Other"]
    let admin_tasks = ["Other", "Internal Meeting", "Customer Meeting", "Training", "H-cell Support", "Production/Mfg Supprort", "Emails"]
    let rd_tasks = ["Product Development", "Production Implementation", "Sales Samples"]


    let eng_category = ["ECR", "Development", "Admin", "R&D"]
    let mfg_category = ["ECR", "Development", "Admin", "R&D"]
    let pm_category = ["Program Management", "Admin"]


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
            if (window.location.href === "/eng" + employeeId || "/mfg" + employeeId || "/pm" + employeeId) {
                if (window.location.href.indexOf(employeeId[i]) > -1) {
                    let dropdown = $("<option>").attr("value", employees[i]).text(employees[i]);
                    $("#inputGroupEmployee").append(dropdown);
                    return;
                }
            }
        };
        // For loop that gets all employees and dynamically creates listin the html for the respective departments.
        if (window.location.href === "/eng" || "/mfg" || "/pm") {
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
        if (window.location.href === "/eng" || "/eng" + employeeId) {
            for (let i = 0; i < eng_category.length; i++) {
                let dropdown = $("<option>").attr("value", eng_category[i]).text(eng_category[i]);
                $("#inputGroupCategory").append(dropdown);
            }
        } else if (window.location.href === "/mfg" || "/mfg" + employeeId) {
            for (let i = 0; i < mfg_category.length; i++) {
                let dropdown = $("<option>").attr("value", mfg_category[i]).text(mfg_category[i]);
                $("#inputGroupCategory").append(dropdown);
            }
        } else if (window.location.href === "/pm" || "/pm" + employeeId) {
            for (let i = 0; i < pm_category.length; i++) {
                let dropdown = $("<option>").attr("value", pm_category[i]).text(pm_category[i]);
                $("#inputGroupCategory").append(dropdown);
            }
        }
    };

    // Function that dyanmically creates the task input options for the user in the html
    function tasksDropdown() {
        console.log("fetching Tasks...");
        if (window.location.href === "/eng" || "/eng" + employeeId) {
            for (let i = 0; i < eng_tasks.length; i++) {
                let dropdown = $("<option>").attr("value", eng_tasks[i]).text(eng_tasks[i]);
                $("#inputGroupTask").append(dropdown);
            }
        } else if (window.location.href === "/mfg" || "/mfg" + employeeId) {
            for (let i = 0; i < mfg_tasks.length; i++) {
                let dropdown = $("<option>").attr("value", mfg_tasks[i]).text(mfg_tasks[i]);
                $("#inputGroupTask").append(dropdown);
            }
        } else if (window.location.href === "/pm" || "/pm" + employeeId) {
            for (let i = 0; i < pm_tasks.length; i++) {
                let dropdown = $("<option>").attr("value", pm_tasks[i]).text(pm_tasks[i]);
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

    $(document).on("change", "#inputGroupCategory", getSelects);

    function getSelects() {
        console.log("fetching Selects...");
        var categoryInput = $("#inputGroupCategory").val();
        var taskInput = $("#inputGroupTask");
        var dept = $('#dept').text();
        taskInput.children().remove();
        console.log(categoryInput);
        if (categoryInput === "ECR") {
            for (let i = 0; i < ecr_tasks.length; i++) {
                let dropdown = $("<option>").attr("value", ecr_tasks[i]).text(ecr_tasks[i]);
                $("#inputGroupTask").append(dropdown);
            }
        } else if (categoryInput === "Development") {
            if (dept === 'Engineering') {
                for (let i = 0; i < eng_tasks.length; i++) {
                    let dropdown = $("<option>").attr("value", eng_tasks[i]).text(eng_tasks[i]);
                    $("#inputGroupTask").append(dropdown);
                }
            } else if (dept === 'Manufacturing') {
                for (let i = 0; i < mfg_tasks.length; i++) {
                    let dropdown = $("<option>").attr("value", mfg_tasks[i]).text(mfg_tasks[i]);
                    $("#inputGroupTask").append(dropdown);
                }
            }
        } else if (categoryInput === "Admin") {
            for (let i = 0; i < admin_tasks.length; i++) {
                let dropdown = $("<option>").attr("value", admin_tasks[i]).text(admin_tasks[i]);
                $("#inputGroupTask").append(dropdown);
            }
        } else if (categoryInput === "Program Management") {
            for (let i = 0; i < pm_tasks.length; i++) {
                let dropdown = $("<option>").attr("value", pm_tasks[i]).text(pm_tasks[i]);
                $("#inputGroupTask").append(dropdown);
            }
        } else if (categoryInput === "R&D") {
            for (let i = 0; i < rd_tasks.length; i++) {
                let dropdown = $("<option>").attr("value", rd_tasks[i]).text(rd_tasks[i]);
                $("#inputGroupTask").append(dropdown);
            }
        }
    }
});