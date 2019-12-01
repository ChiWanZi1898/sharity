

$(function () {

  for (let i in data) {
    $(".item-list").append(listItem(data[i],i))
  }

  /*$(".item").click(function () {
    if ($(this).hasClass("selected")) {
      $(this).removeClass("selected");
    } else {
      $(this).addClass("selected");
    }
  });*/

  $("#back-btn").click(function () {
    $(location).attr("href", "/scan")
  });

  $("#confirm-btn").click(function () {
    $(location).attr("href", "/post")
  });
});

function listItem(data, i) {
  return `
  <div class="row item">
    <div class="col-4">
      <img src="${data.img}" class="item-pic">
    </div>
    <div class="col-8">
      <div class="row px-1 mb-2">
        <div class="col-8 p-0">
          ${data.name}
        </div>
        <div class="col-4 p-0 text-right">
          <input type="button" onclick="editWindow(${i})" value="edit">
        </div>
      </div>
      <div class="row px-1">
        <div class="col p-0 item-meta-text">
          ${data.type}
        </div>
        <div class="col p-0 text-right item-meta-text">
          ${data.post_date}
        </div>
      </div>
      <div class="row px-1">
        Description: ${data.description}
      </div>
    </div>
  </div>
  `
}

function editWindow(i){


  $(location).attr("href", `/edit/${i}?redirect=confirm`);
}