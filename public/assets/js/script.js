$(document).ready(function () {

    let task = {
        pm_tasks: ["Kick-Off", "Project Planning", "Design Meeting", "Program Tracking", "Customer Support", "Program (Meeting)"],
        mfg_tasks: ["Tooling-LP", "Tooling-Mold", "Tooling-Hotwire", "Tooling Programming", "GPD cushion rev", "GPD dress covers", "Admin"],
        eng_tasks: ["Drawings",],
        admin_tasks: ["Training", "Out of Office", "Work Share", "Furlough"],
    }

    let category = {
        eng_category: ["ECR", "Development", "Non-Development", "Sales Samples", "Admin"],
        mfg_category: ["ECR", "Development", "Non-Development", "Sales Samples", "Admin"],
        pm_category: ["ECR", "Development", "Non-Development", "Sales Samples", "Admin"],
    }
    const minutes = [30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450, 480, 510]

    let options = $("<option>");

    function categories() {
        console.log("this works");
        if (window.location.href === "http://localhost:8080/eng") {
            for (let i = 0; i < category.eng_category; i++) {
                let dropdown = options.attr("value: " + category.eng_category[i]).text(category.eng_category[i]);
                $("#inputGroupCategory").append(dropdown);
            }
        } else if (window.location.href === "http://localhost:8080/mfg") {
            for (let i = 0; i < category.mfg_category; i++) {
                let dropdown = options.attr("value: " + category.mfg_category[i]).text(category.mfg_category[i]);
                $("#inputGroupCategory").append(dropdown);
            }
        } else if (window.location.href === "http://localhost:8080/pm") {
            for (let i = 0; i < category.pm_category; i++) {
                let dropdown = options.attr("value: " + category.pm_category[i]).text(category.pm_category[i]);
                $("#inputGroupCategory").append(dropdown);
            }
        }
    };

    function tasks() {
        console.log("this works");
        if (window.location.href === "http://localhost:8080/eng") {
            for (let i = 0; i < task.eng_tasks; i++) {
                let dropdown = options.attr("value: " + task.eng_tasks[i]).text(task.eng_tasks[i]);
                $("#inputGroupTask").append(dropdown);
            }
        } else if (window.location.href === "http://localhost:8080/mfg") {
            for (let i = 0; i < task.mfg_tasks; i++) {
                let dropdown = options.attr("value: " + task.mfg_tasks[i]).text(task.mfg_tasks[i]);
                $("#inputGroupTask").append(dropdown);
            }
        } else if (window.location.href === "http://localhost:8080/pm") {
            for (let i = 0; i < task.pm_tasks; i++) {
                let dropdown = options.attr("value: " + task.pm_tasks[i]).text(task.pm_tasks[i]);
                $("#inputGroupTask").append(dropdown);
            }
        }
    }

    function times() {
        console.log("this works");
        for (let i = 0; i < minutes; i++) {
            let dropdown = options.attr("value: " + minutes[i]).text(minutes[i]);
            $("#inputGroupTime").append(dropdown);
        }
    }

    categories();
    tasks();
    times();

});