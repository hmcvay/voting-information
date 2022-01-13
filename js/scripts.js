$(document).ready(function () {
  $("form.ageInput").submit(function (event) {
    event.preventDefault();
    // Take ageTyped from HTML form, assign to variable 'result'.
    const result = $("input#ageHTML").val();
    console.log("result"+result);
    // Parse the input from 'result' to get a number and assign to 'ageJs'.
    const ageJs = parseInt(result);
    console.log("ageJs" + ageJs);


    if (ageJs >= 18) {
      $('#over18').show();
    }

    else {
      $('#under18').show();
    
  });
});
