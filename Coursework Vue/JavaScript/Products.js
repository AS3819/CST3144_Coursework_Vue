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
  },
  methods: {
    canAddToCart: function (index) {
      if (this.lessons[index].spaces > 0) {
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
      // the comparison function that defines the order
      function compare(a, b) {
        if (a.price > b.price) return 1;
        if (a.price < b.price) return -1;
        return 0;
      }
      // sort the 'products' array and return it
      return this.lessons.sort(compare);
    },
  },
});
