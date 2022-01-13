$(document).ready(function () {
  $("#ageInput").submit(function () {
    event.preventDefault();
    // Take ageTyped from HTML form, assign to variable 'result'.
    const result = $("ageTyped").val();
    // Parse the input from 'result' to get a number and assign to 'ageJs'.
    const ageJs = parseInt(result);
    


    if (ageJs >= 18) {
      $('#over18').show();
    }

    else {
      $('#under18').show();
    }
  });
});
