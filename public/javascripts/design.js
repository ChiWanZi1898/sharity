const data = [
  {
    id: "1",
    img: "/images/item1.jpg",
    name: "iPad Pro",
    type: "Electronic",
    post_date: "Dec 1, 2019",
    from: "Tom",
    requested_by: "none",
    description: "iPad is a tablet for browsing the web, watching videos, listening to music, playing games, reading e-books and more."
  },
  {
    id: "2",
    img: "/images/item2.jpg",
    name: "Headset",
    type: "Electronic",
    post_date: "Dec 1, 2019",
    from: "Ion",
    requested_by: "none",
    description: "A headset is a hardware device that connects to a telephone or computer that allow the user to talk and listen while keeping their hands free."
  },
  {
    id: "3",
    img: "/images/item3.jpg",
    name: "Blanket",
    type: "Housing",
    post_date: "Dec 1, 2019",
    from: "Ion",
    requested_by: "none",
    description: "Blanket is a large piece of woolen material used as a covering for warmth."
  },
  {
    id: "4",
    img: "/images/item4.jpg",
    name: "Hoodie",
    type: "Clothes",
    post_date: "Dec 1, 2019",
    from: "Jane",
    requested_by: "none",
    description: "A hoodie is a sweatshirt or a jacket with a hood."
  }
];

function listItem(data) {
  return `
  <div class="row item" id="${data.id}">
    <div class="col-4">
      <img src="${data.img}" class="item-pic">
    </div>
    <div class="col-8">
      <div class="row px-1 mb-2">
        ${data.name}
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

for (let i in data) {
  $(".item-list").append(listItem(data[i]))
}
