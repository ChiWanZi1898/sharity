$(function () {
  $(".item").click(function () {
    if ($(this).hasClass("selected")) {
      $(this).removeClass("selected");
    } else {
      $(this).addClass("selected");
    }
  });

  $("#back-btn").click(function () {
    $(location).attr("href", "/scan")
  });

  $("#confirm-btn").click(function () {
    $(location).attr("href", "/home")
  });
});
