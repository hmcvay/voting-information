$(document).ready(function () {
  const age = parseInt( ("How old are you?"));

  if (age >= 18) {
    $('#over18').show();
  }

  else {
    $('#under18').show();
  }

});
