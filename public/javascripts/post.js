$(function () {
  $("#add-new-btn").click(function () {
    $(location).attr("href", "scan")
  });

  $("#home-btn").click(function () {
    $(location).attr("href", "home")
  });

  $("#post-btn").click(function () {
    $(location).attr("href", "post")
  });

  $("#account-btn").click(function () {
    $(location).attr("href", "#")
  });
});