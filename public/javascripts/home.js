$(function () {
  for (let i in data) {
    $(".item-list").append(listItem(data[i]))
  }

  $("#home-btn").click(function () {
    $(location).attr("href", "/home")
  });

  $("#post-btn").click(function () {
    $(location).attr("href", "/post")
  });

  $("#account-btn").click(function () {
    $(location).attr("href", "/#")
  });
});
