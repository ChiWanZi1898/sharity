$(function () {
  $("#back-btn").click(function () {
    $(location).attr("href", '/' + redirect)
  });

  $("#save-btn").click(function () {
    const editedName = $("#name").val();
    const editedType = $("#type").val();
    const editedDescription = $("#desc").val();

    $.ajax({
      method: "POST",
      url: "/edit",
      data: {
        itemId: data.id,
        name: editedName,
        type: editedType,
        desc: editedDescription,
      }
    });
    $(location).attr("href", '/' + redirect)
  });

});
