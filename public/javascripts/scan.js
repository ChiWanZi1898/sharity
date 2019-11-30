$(function () {
  let clicked = false;
  $("#camera-icon").click(function () {
    if (clicked)
      return;
    else
      clicked = true;
    $(".loading-mask").attr("hidden", false);
    setTimeout(
      function()
      {
        $(location).attr("href", "confirm")
      }, 500);
  });
});
