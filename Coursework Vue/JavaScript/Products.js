"use strict";

const pageData = new Vue({
  el: "#app",
  data: {
    sitename: "List of Lessons",
    lessons: [
      {
        id: 0,
        title: "After School Class",
        classType: "Maths",
        location: "London",
        price: 100,
        spaces: 5,
        image: "src/assets/Maths_Icon.png",
        imageAlt: "Maths Icon",
      },
      {
        id: 1,
        title: "Computer Class",
        classType: "Computer Science",
        location: "London",
        price: 120,
        spaces: 5,
        image: "src/assets/Maths_Icon.png",
        imageAlt: "Maths Icon",
      },
      {
        id: 2,
        title: "English Class",
        classType: "English",
        location: "London",
        price: 90,
        spaces: 5,
        image: "src/assets/Maths_Icon.png",
        imageAlt: "Maths Icon",
      },
      {
        id: 3,
        title: "Chess Lesson",
        classType: "Chess",
        location: "London",
        price: 140,
        spaces: 5,
        image: "src/assets/Maths_Icon.png",
        imageAlt: "Maths Icon",
      },
      {
        id: 4,
        title: "Maths Lesson",
        classType: "Maths",
        location: "London",
        price: 110,
        spaces: 5,
        image: "src/assets/Maths_Icon.png",
        imageAlt: "Maths Icon",
      },
      {
        id: 5,
        title: "History Lesson",
        classType: "History",
        location: "London",
        price: 100,
        spaces: 5,
        image: "src/assets/Maths_Icon.png",
        imageAlt: "Maths Icon",
      },
      {
        id: 6,
        title: "Electrical Engineering Class",
        classType: "Electrical Engineering",
        location: "London",
        price: 200,
        spaces: 5,
        image: "src/assets/Maths_Icon.png",
        imageAlt: "Maths Icon",
      },
      {
        id: 7,
        title: "Chemistry Class",
        classType: "Chemistry",
        location: "London",
        price: 160,
        spaces: 5,
        image: "src/assets/Maths_Icon.png",
        imageAlt: "Maths Icon",
      },
      {
        id: 8,
        title: "Computer Science Class",
        classType: "Computer Science",
        location: "London",
        price: 180,
        spaces: 5,
        image: "src/assets/Maths_Icon.png",
        imageAlt: "Maths Icon",
      },
      {
        id: 9,
        title: "Geography Class",
        classType: "Geography",
        location: "London",
        price: 110,
        spaces: 5,
        image: "src/assets/Maths_Icon.png",
        imageAlt: "Maths Icon",
      },
    ],
    cart: [],
    sortType: "id",
    sortAscending: true,
  },
  methods: {
    canAddToCart: function (index) {
      if (this.lessons[index].spaces > 0) {
        return true;
      } else {
        return false;
      }
    },
    cartNotEmpty: function () {
      if (this.cart.length > 0) {
        return true;
      } else {
        return false;
      }
    },
    addToCart: function (index) {
      if (this.canAddToCart(index)) {
        this.cart.push(this.lessons[index]);
        this.lessons[index].spaces--;
      }
    },
    displayCart: function () {
      for (i = 0; i < this.cart.length; i++) {
        console.log("ID: " + this.cart[i].id + " Price: " + this.cart[i].price);
      }
    },
  },
  computed: {
    sortedLessons() {
      let type = this.sortType;
      let order1;
      let order2;
      if (this.sortAscending) {
        order1 = 1;
        order2 = -1;
      } else {
        order1 = -1;
        order2 = 1;
      }
      function compare(a, b) {
        if (type === "id") {
          if (a.id > b.id) return order1;
          if (a.id < b.id) return order2;
          } else if (type === "subject") {
            if (a.classType > b.classType) return order1;
            if (a.classType < b.classType) return order2;
          } else if (type === "price") {
            if (a.price > b.price) return order1;
            if (a.price < b.price) return order2;
          } else if (type === "location") {
            if (a.location > b.location) return order1;
            if (a.location < b.location) return order2;
          } else if (type === "availability") {
            if (a.spaces > b.spaces) return order1;
            if (a.spaces < b.spaces) return order2;
        }
        return 0;
      }
      return this.lessons.sort(compare);
    },
  },
});
