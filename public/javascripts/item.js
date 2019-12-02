$(function () {
  $("#back-btn").click(function () {
    $(location).attr("href", '/' + redirect)
  });

  $("#request-btn").click(function () {
    const itemID = $(this).attr('itemid');
    $.ajax({
      method: "POST",
      url: `/item/${itemID}`,
      success: function() {
        $(location).attr('href', `/item/${itemID}?redirect=${redirect}`)
      }
    });
  });

  $(".accept-btn").click(function () {
    const name = $(this).attr('nameid');
    const itemID = $(this).attr('itemid');
    $.ajax({
      method: "POST",
      url: `/item/${itemID}/accept/${name}`,
      success: function() {
        $(location).attr('href', `/item/${itemID}?redirect=${redirect}`)
      }
    });
  });

  $(".decline-btn").click(function () {
    const name = $(this).attr('nameid');
    const itemID = $(this).attr('itemid');
    $.ajax({
      method: "POST",
      url: `/item/${itemID}/decline/${name}`,
      success: function() {
        $(location).attr('href', `/item/${itemID}?redirect=${redirect}`)
      }
    });
  })

});
