$(function () {
  for (let i in data) {
    $(".item-list").append(listItem(data[i]))
  }

  $(".item").click(function () {
    $(location).attr("href", `/item/${$(this).attr("id")}?redirect=home`);
  });

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
