$(document).ready(function () {
    programInput = $("#program").val();
    ecrInput = $("#ecr").val();
    
    $(document).on("click", ".analyze", handleAnalysis);

    function handleAnalysis(event) {
        event.preventDefault();
        console.log("working");
        programInput = $("#program").val();
        ecrInput = $("#ecr").val();
        console.log(programInput);
        console.log(ecrInput);
        // window.location.href = "/update/" + currentEntry
    }
});