
$(".employeeEntry-form").on("submit", function(event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  var newEmployee = {
    name: $("#name").val().trim(),
    dept: $("#dept").val().trim()
  };

  // Send the POST request.
  $.ajax("/api/employees", {
    type: "POST",
    data: newEmployee
  }).then(
    function() {
      console.log("created new employee");
      // Reload the page to get the updated list
      location.reload();
    }
  );
});
