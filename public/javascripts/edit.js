$(function () {
    $("#back-btn").click(function () {
        $(location).attr("href", '/' + redirect)
    });

    $("#save-btn").click(function () {
        var editedName = $("#name").val();
        var editedType =$("#type").val();
        var editedDescription = $("#desc").val();

        $(location).attr("href", `/edit/save/${data.id}?name=${editedName}&type=${editedType}&desc=${editedDescription}`);

    });
});