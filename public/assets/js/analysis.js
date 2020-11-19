$(document).ready(function () {
    
    $(document).on("click", "#analyze", handleAnalysis);

    function handleAnalysis() {
        event.preventDefault();
        let programInput = $("#programInput").val();
        let ecrInput = $("#ecrInput").val();

        if ((programInput === '') && !ecrInput) {
            return;
        } else if (!ecrInput && (programInput != '')) {
            window.location.href = "/rfb/" + programInput
        } else {
            window.location.href = "/rfb/ecr/" + ecrInput
        } 
    }
});