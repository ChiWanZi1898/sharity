$(function () {
  for (let i in data) {
    $(".item-list").append(listItem(data[i]));
  }

  let itemSelected = {};
  $(".select-btn").click(function () {
    const id = $(this).attr('itemid');
    const itemDom = $(`#item-${id}`);
    if (itemDom.hasClass("selected")) {
      itemDom.removeClass("selected");
      delete itemSelected[id];
    } else {
      itemDom.addClass("selected");
      itemSelected[id] = data[id];
    }
  });

  $("#back-btn").click(function () {
    $(location).attr("href", "/scan")
  });

  $("#confirm-btn").click(function () {
    $.ajax({
      method: "POST",
      url: "/confirm/addNew",
      data: {
        text: JSON.stringify(Object.keys(itemSelected))
      }
    });
    $(location).attr("href", "/post")
  });

  $(".edit-btn").click(function () {
    console.log(`/edit/${$(this).attr('itemid')}?redirect=confirm`);
    $(location).attr("href", `/edit/${$(this).attr('itemid')}?redirect=confirm`);
  });

  function listItem(data, i) {
    return `
  <div class="row item" id="item-${data.id}">
    <div class="col-4">
      <img src="${data.img}" class="item-pic">
    </div>
    <div class="col-8">
      <div class="row px-1 mb-2">
        <div class="col-6 p-0">
          ${data.name}
        </div>
        <div class="col-3 p-0 text-right">
          <span class="single-item-desc-row-label px-1 select-btn" itemid=${data.id}>select</span>
        </div>
        <div class="col-3 p-0 text-right">
          <span class="single-item-desc-row-label px-1 edit-btn" itemid=${data.id}>edit</span>
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
});

