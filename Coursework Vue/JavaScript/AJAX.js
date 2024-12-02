"use strict";

//Function for getting the list of lessons from the server.
async function retrieveLessons(print) {
  try {
    const response = await fetch("http://localhost:8080/lessons", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (print) {
      console.log(result);
    }
    if (result == undefined) {
      errorMessage = "No lessons found.";
      console.log(errorMessage);
    }
    return result;
  } catch (err) {
    console.log("Error.");
  }
}

//Testing code.
// let idiot;
// try {
//   idiot = await retrieveLessons(true);
//   console.log(idiot[0].classType);
// } catch (error) {
//   idiot = await retrieveLessons(false);
//   idiot = await retrieveLessons(false);
//   idiot = await retrieveLessons(false);
//   console.log(idiot[0].classType);
// }
