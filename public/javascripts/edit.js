$(function () {
    $("#back-btn").click(function () {
        $(location).attr("href", '/' + redirect)
    });

    $("#save-btn").click(function () {
        $(location).attr("href", `/edit/save/${data.id}`);
    });
});