$(document).ready(function() {
  $("#blank-info form").submit(function(){
    var firstName = $("#fname").val();
    var lastName = $("#lname").val();
    var userDate = $("#date").val();
    var timeStart = $("#start-time").val();
    var timeEnd = $("#end-time").val();

    $(".output1").text(firstName);
    $(".output2").text(userDate);
    $(".output3").text(timeStart);
    $(".output4").text(timeEnd);

    $("#confirm").show();
    event.preventDefault();

  });
});
