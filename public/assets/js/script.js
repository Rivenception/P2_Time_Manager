// not sure why this isn't working

let tasks = {
    pm_tasks: ["Kick-Off", "Project Planning", "Design Meeting", "Program Tracking", "Customer Support", "Program (Meeting)"],
    mfg_tasks: ["Tooling-LP", "Tooling-Mold", "Tooling-Hotwire", "Tooling Programming", "GPD cushion rev", "GPD dress covers", "Admin"],
    eng_tasks: ["Drawings",],
    admin_tasks: ["Training", "Out of Office", "Work Share", "Furlough"],
}

let categories = {
    eng_category: ["ECR", "Development", "Non-Development", "Sales Samples", "Admin"],
    mfg_category: ["ECR", "Development", "Non-Development", "Sales Samples", "Admin"],
    pm_category: ["ECR", "Development", "Non-Development", "Sales Samples", "Admin"],
}
const minutes = [30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450, 480, 510]

let options = $("<option>");

function categories() {
    if (window.location.href === "http://localhost:8080/eng") {
        for (let i = 0; i < eng_category; i++) {
            let dropdown = options.attr("value: " + eng_category[i]).text(eng_category[i])
            $("#inputGroupCategory").append(dropdown);
        }
    } else if (window.location.href === "http://localhost:8080/mfg") {
        for (let i = 0; i < mfg_category; i++) {
            let dropdown = options.attr("value: " + mfg_category[i]).text(mfg_category[i])
            $("#inputGroupCategory").append(dropdown);
        }
    } else if (window.location.href === "http://localhost:8080/pm") {
        for (let i = 0; i < pm_category; i++) {
            let dropdown = options.attr("value: " + pm_category[i]).text(pm_category[i])
            $("#inputGroupCategory").append(dropdown);
        }
    }
};

$("#form-row").on("load", function () {
    if (window.location.href === "http://localhost:8080/eng") {
        for (let i = 0; i < eng_category; i++) {
            let dropdown = options.attr("value: " + eng_category[i]).text(eng_category[i])
            $("#inputGroupCategory").append(dropdown);
        }
    } else if (window.location.href === "http://localhost:8080/mfg") {
        for (let i = 0; i < mfg_category; i++) {
            let dropdown = options.attr("value: " + mfg_category[i]).text(mfg_category[i])
            $("#inputGroupCategory").append(dropdown);
        }
    } else if (window.location.href === "http://localhost:8080/pm") {
        for (let i = 0; i < pm_category; i++) {
            let dropdown = options.attr("value: " + pm_category[i]).text(pm_category[i])
            $("#inputGroupCategory").append(dropdown);
        }
    }
});


function tasks() {
    if (window.location.href === "http://localhost:8080/eng") {
        for (let i = 0; i < eng_tasks; i++) {
            let dropdown = options.attr("value: " + eng_tasks[i]).text(eng_tasks[i])
            $("#inputGroupTask").append(dropdown);
        }
    } else if (window.location.href === "http://localhost:8080/mfg") {
        for (let i = 0; i < emfg_tasks; i++) {
            let dropdown = options.attr("value: " + mfg_tasks[i]).text(mfg_tasks[i])
            $("#inputGroupTask").append(dropdown);
        }
    } else if (window.location.href === "http://localhost:8080/pm") {
        for (let i = 0; i < pm_tasks; i++) {
            let dropdown = options.attr("value: " + pm_tasks[i]).text(pm_tasks[i])
            $("#inputGroupTask").append(dropdown);
        }
    }
}

function program() {

}

function times() {
    for (let i = 0; i < minutes; i++) {
        let dropdown = options.attr("value: " + minutes[i]).text(minutes[i])
        $("#inputGroupTime").append(dropdown);
    }
}

categories();
tasks();
times();