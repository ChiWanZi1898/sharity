$(function () {

  const data = [
    {
      img: "/images/bag.jpg",
      name: "School Bag",
      type: "Bag",
      post_date: "Dec 1, 2019",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh."
    },
    {
      img: "/images/bag2.jpg",
      name: "Hand Bag",
      type: "Bag",
      post_date: "Dec 1, 2019",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh."
    },
    {
      img: "/images/pen.jpg",
      name: "Pen",
      type: "Stationary",
      post_date: "Dec 1, 2019",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh."
    },
    {
      img: "/images/drone.jpg",
      name: "DJI Drone",
      type: "Electronic",
      post_date: "Dec 1, 2019",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh."
    }
  ];

  for (let i in data) {
    $(".item-list").append(listItem(data[i]))
  }

  $(".item").click(function () {
    if ($(this).hasClass("selected")) {
      $(this).removeClass("selected");
    } else {
      $(this).addClass("selected");
    }
  });

  $("#back-btn").click(function () {
    $(location).attr("href", "/scan")
  });

  $("#confirm-btn").click(function () {
    $(location).attr("href", "/post")
  });
});

function listItem(data) {
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
          <span class="single-item-desc-row-label px-1">edit</span>
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
