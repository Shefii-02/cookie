// NAVBAR

$(document).ready(function () {
  $("#open-button").click(function () {
    $("#my-div").show();
    $("#open-button").hide(); // Hide the open button when the div is shown
  });

  $("#close-button").click(function () {
    $("#my-div").hide();
    $("#open-button").show(); // Show the open button when the div is hidden
  });
});

