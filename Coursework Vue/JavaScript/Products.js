"use strict";

//Imported data.
import * as Page from "./Data/Page_Data.js";

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
    searchInput: "",
    checkoutPage: false,
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
      for (let i = 0; i < this.cart.length; i++) {
        console.log("ID: " + this.cart[i].id + " Price: " + this.cart[i].price);
      }
      this.checkoutPage = !this.checkoutPage;
      this.switchPage();
    },
    switchPage: function () {
      const lessonsPages = [];
      const sortControls = document.getElementById("sortControls");
      const searchBarContainer = document.getElementById("searchBarContainer");
      const lessonsList = document.getElementById("lessonsList");
      lessonsPages.push(sortControls);
      lessonsPages.push(searchBarContainer);
      lessonsPages.push(lessonsList);
      if (this.checkoutPage) {
        console.log(true);
        for (let i = 0; i < lessonsPages.length; i++) {
          lessonsPages[i].style.display = "none";
        }
      } else {
        console.log(false);
        for (let i = 0; i < lessonsPages.length; i++) {
          lessonsPages[i].style.display = "block";
        }
      }
    },
  },
  computed: {
    sortedLessons() {
      let type = this.sortType;
      try {
        this.sortAscending = JSON.parse(this.sortAscending);
      } catch (error) {}
      function compare(a, b) {
        if (type === "id") {
          if (a.id > b.id) {
            return 1;
          }
          if (a.id < b.id) {
            return -1;
          }
        } else if (type === "title") {
          if (a.title > b.title) {
            return 1;
          }
          if (a.title < b.title) {
            return -1;
          }
        } else if (type === "price") {
          if (a.price > b.price) {
            return 1;
          }
          if (a.price < b.price) {
            return -1;
          }
        } else if (type === "location") {
          if (a.location > b.location) {
            return 1;
          }
          if (a.location < b.location) {
            return -1;
          }
        } else if (type === "classType") {
          if (a.classType > b.classType) {
            return 1;
          }
          if (a.classType < b.classType) {
            return -1;
          }
        } else if (type === "spaces") {
          if (a.spaces > b.spaces) {
            return 1;
          }
          if (a.spaces < b.spaces) {
            return -1;
          }
        }
        return 0;
      }
      if (this.sortAscending) {
        return this.lessons.sort(compare);
      } else {
        return this.lessons.sort(compare).reverse();
      }
    },
    search() {
      const searchInput = this.searchInput;
      function checkItem(item) {
        return (
          item.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          item.classType.toLowerCase().includes(searchInput.toLowerCase()) ||
          item.location.toLowerCase().includes(searchInput.toLowerCase()) ||
          JSON.stringify(item.price).includes(searchInput.toLowerCase()) ||
          JSON.stringify(item.spaces).includes(searchInput.toLowerCase())
        );
      }
      return this.lessons.filter(checkItem);
    },
  },
});
