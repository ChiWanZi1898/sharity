$(function () {

  const data = [
    {
      img: "/images/item1.jpg",
      name: "iPad Pro",
      type: "Electronic",
      post_date: "Dec 1, 2019",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh."
    },
    {
      img: "/images/item2.jpg",
      name: "Headset",
      type: "Electronic",
      post_date: "Dec 1, 2019",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh."
    },
    {
      img: "/images/item3.jpg",
      name: "Blanket",
      type: "Housing",
      post_date: "Dec 1, 2019",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh."
    },
    {
      img: "/images/item4.jpg",
      name: "Hoodie",
      type: "Clothes",
      post_date: "Dec 1, 2019",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh."
    },
    {
      img: "/images/item1.jpg",
      name: "iPad Pro",
      type: "Electronic",
      post_date: "Dec 1, 2019",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh."
    },
    {
      img: "/images/item2.jpg",
      name: "Headset",
      type: "Electronic",
      post_date: "Dec 1, 2019",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh."
    },
    {
      img: "/images/item3.jpg",
      name: "Blanket",
      type: "Housing",
      post_date: "Dec 1, 2019",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh."
    },
    {
      img: "/images/item4.jpg",
      name: "Hoodie",
      type: "Clothes",
      post_date: "Dec 1, 2019",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh."
    },
    {
      img: "/images/item1.jpg",
      name: "iPad Pro",
      type: "Electronic",
      post_date: "Dec 1, 2019",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh."
    },
    {
      img: "/images/item2.jpg",
      name: "Headset",
      type: "Electronic",
      post_date: "Dec 1, 2019",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh."
    },
    {
      img: "/images/item3.jpg",
      name: "Blanket",
      type: "Housing",
      post_date: "Dec 1, 2019",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh."
    },
    {
      img: "/images/item4.jpg",
      name: "Hoodie",
      type: "Clothes",
      post_date: "Dec 1, 2019",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh."
    },
    {
      img: "/images/item1.jpg",
      name: "iPad Pro",
      type: "Electronic",
      post_date: "Dec 1, 2019",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh."
    },
    {
      img: "/images/item2.jpg",
      name: "Headset",
      type: "Electronic",
      post_date: "Dec 1, 2019",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh."
    },
    {
      img: "/images/item3.jpg",
      name: "Blanket",
      type: "Housing",
      post_date: "Dec 1, 2019",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh."
    },
    {
      img: "/images/item4.jpg",
      name: "Hoodie",
      type: "Clothes",
      post_date: "Dec 1, 2019",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh."
    },
  ];

  for (let i in data) {
    $(".item-list").append(listItem(data[i]))
  }

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
