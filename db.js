class DB {
  constructor() {
    this.currentUser = "Ion";
    this.currentUser = "Ion";
    this.users = [
      {
        name: "Ion",
        email: "iondonor@email.com",
        description: "Loves to donate items to help the needy.",
        occupation: "Chemist"
      },
      {
        name: "Tom",
        email: "tomlovestoshare@email.com",
        description: "Loves to donate items to help the needy.",
        occupation: "Banker"
      },
      {
        name: "Jane",
        email: "contactjane@email.com",
        description: "Loves to donate items to help the needy.",
        occupation: "Teacher"
      },
      {
        name: "Lily",
        email: "lily_xyz90@email.com",
        description: "Loves to donate items to help the needy.",
        occupation: "Electrician"
      },
      {
        name: "Kimberley",
        email: "kim_2345@email.com",
        description: "Loves to donate items to help the needy.",
        occupation: "Dancer"
      }
    ];
    this.data = [
      {
        id: "1",
        img: "/images/item1.jpg",
        name: "iPad Pro",
        type: "Electronic",
        post_date: "Dec 1, 2019",
        from: "Tom",
        requested: false,
        requested_by: [],
        confirmed: false,
        description: "iPad is a tablet for browsing the web, watching videos, listening to music, playing games, reading e-books and more."
      },
      {
        id: "2",
        img: "/images/item2.jpg",
        name: "Headset",
        type: "Electronic",
        post_date: "Dec 1, 2019",
        from: "Ion",
        requested: false,
        requested_by: ["Tom", "Lily"],
        confirmed: false,
        description: "A headset is a hardware device that connects to a telephone or computer that allow the user to talk and listen while keeping their hands free."
      },
      {
        id: "3",
        img: "/images/item3.jpg",
        name: "Blanket",
        type: "Housing",
        post_date: "Dec 1, 2019",
        from: "Ion",
        requested: false,
        requested_by: ["Tom"],
        confirmed: false,
        description: "Blanket is a large piece of woolen material used as a covering for warmth."
      },
      {
        id: "4",
        img: "/images/item4.jpg",
        name: "Hoodie",
        type: "Clothes",
        post_date: "Dec 1, 2019",
        from: "Jane",
        requested: false,
        requested_by: [],
        confirmed: false,
        description: "A hoodie is a sweatshirt or a jacket with a hood."
      },
      {
        id: "5",
        img: "/images/item1.jpg",
        name: "iPad Pro",
        type: "Electronic",
        post_date: "Dec 1, 2019",
        from: "Tom",
        requested: false,
        requested_by: [],
        confirmed: false,
        description: "iPad is a tablet for browsing the web, watching videos, listening to music, playing games, reading e-books and more."
      },
      {
        id: "6",
        img: "/images/item2.jpg",
        name: "Headset",
        type: "Electronic",
        post_date: "Dec 1, 2019",
        from: "Lily",
        requested: false,
        requested_by: [],
        confirmed: false,
        description: "A headset is a hardware device that connects to a telephone or computer that allow the user to talk and listen while keeping their hands free."
      },
      {
        id: "7",
        img: "/images/item3.jpg",
        name: "Blanket",
        type: "Housing",
        post_date: "Dec 1, 2019",
        from: "Jake",
        requested: false,
        requested_by: [],
        confirmed: false,
        description: "Blanket is a large piece of woolen material used as a covering for warmth."
      },
      {
        id: "8",
        img: "/images/item4.jpg",
        name: "Hoodie",
        type: "Clothes",
        post_date: "Dec 1, 2019",
        from: "Jane",
        requested: false,
        requested_by: [],
        confirmed: false,
        description: "A hoodie is a sweatshirt or a jacket with a hood."
      },
      {
        id: "9",
        img: "/images/item1.jpg",
        name: "iPad Pro",
        type: "Electronic",
        post_date: "Dec 1, 2019",
        from: "Tom",
        requested: false,
        requested_by: [],
        confirmed: false,
        description: "iPad is a tablet for browsing the web, watching videos, listening to music, playing games, reading e-books and more."
      },
      {
        id: "10",
        img: "/images/item2.jpg",
        name: "Headset",
        type: "Electronic",
        post_date: "Dec 1, 2019",
        from: "Jake",
        requested: false,
        requested_by: [],
        confirmed: false,
        description: "A headset is a hardware device that connects to a telephone or computer that allow the user to talk and listen while keeping their hands free."
      },
      {
        id: "11",
        img: "/images/item3.jpg",
        name: "Blanket",
        type: "Housing",
        post_date: "Dec 1, 2019",
        from: "Jake",
        requested: false,
        requested_by: [],
        confirmed: false,
        description: "Blanket is a large piece of woolen material used as a covering for warmth."
      },
      {
        id: "12",
        img: "/images/item4.jpg",
        name: "Hoodie",
        type: "Clothes",
        post_date: "Dec 1, 2019",
        from: "Jane",
        requested: false,
        requested_by: [],
        confirmed: false,
        description: "A hoodie is a sweatshirt or a jacket with a hood."
      },
      {
        id: "13",
        img: "/images/item1.jpg",
        name: "iPad Pro",
        type: "Electronic",
        post_date: "Dec 1, 2019",
        from: "Tom",
        requested: false,
        requested_by: [],
        confirmed: false,
        description: "iPad is a tablet for browsing the web, watching videos, listening to music, playing games, reading e-books and more."
      },
      {
        id: "14",
        img: "/images/item2.jpg",
        name: "Headset",
        type: "Electronic",
        post_date: "Dec 1, 2019",
        from: "Jake",
        requested: false,
        requested_by: [],
        confirmed: false,
        description: "A headset is a hardware device that connects to a telephone or computer that allow the user to talk and listen while keeping their hands free."
      },
      {
        id: "15",
        img: "/images/item3.jpg",
        name: "Blanket",
        type: "Housing",
        post_date: "Dec 1, 2019",
        from: "Jane",
        requested: false,
        requested_by: [],
        confirmed: false,
        description: "Blanket is a large piece of woolen material used as a covering for warmth."
      },
      {
        id: "16",
        img: "/images/item4.jpg",
        name: "Hoodie",
        type: "Clothes",
        post_date: "Dec 1, 2019",
        from: "Jane",
        requested: false,
        requested_by: [],
        confirmed: false,
        description: "A hoodie is a sweatshirt or a jacket with a hood."
      }
    ];
    this.dataScan = [
      {
        id: "20",
        img: "/images/bag.jpg",
        name: "School Bag",
        type: "Bag",
        from: 'Ion',
        requested: false,
        requested_by: [],
        confirmed: false,
        post_date: "Dec 1, 2019",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh."
      },
      {
        id: "21",
        img: "/images/bag2.jpg",
        name: "Hand Bag",
        type: "Bag",
        from: 'Ion',
        requested: false,
        requested_by: [],
        confirmed: false,
        post_date: "Dec 1, 2019",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh."
      },
      {
        id: "22",
        img: "/images/pen.jpg",
        name: "Pen",
        type: "Stationary",
        from: 'Ion',
        requested: false,
        requested_by: [],
        confirmed: false,
        post_date: "Dec 1, 2019",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh."
      },
      {
        id: "23",
        img: "/images/drone.jpg",
        name: "DJI Drone",
        type: "Electronic",
        from: 'Ion',
        requested: false,
        requested_by: [],
        confirmed: false,
        post_date: "Dec 1, 2019",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh."
      }
    ];
    this.temp = [];
  }
}

module.exports.db = new DB();
