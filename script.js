"use strict";
// html elememts needed
const ratingNumbers = document.getElementById("rating-numbers");

const selected = document.getElementById("rating");
const submitButton = document.getElementById("submit-button");
const firstContainer = document.getElementsByClassName("first-container");

const secondContainer = document.getElementsByClassName("second-container");

// All previous siblings

const prevSiblings = (e) => {
  let siblings = [];

  while ((e = e.previousElementSibling)) {
    siblings.push(e);
  }
  return siblings;
};

// second container display is set to none!
const visibility2 = secondContainer.item(0).classList.add("visibility");

// Change in state
const lists = (e) => {
  if (e.target.nodeName === "LI") {
    //the value used in the thank you container
    const value = e.target.textContent;

    // giving the lists an ascending color
    prevSiblings(e.target).forEach((list, i) => {
      list.style.background = `rgba(251, 116, 19, ${-(i + 1 - 6) / 6}`;
      list.style.transition = "background 250ms ease-out";
      list.style.color = "white";
    });

    // style of the clicked list
    e.target.style.background = "rgb(251, 116, 19)";
    e.target.style.color = "white";

    // the submit button triggers the visibility class
    submitButton.addEventListener("click", () => {
      firstContainer.item(0).classList.toggle("visibility");
      secondContainer.item(0).classList.toggle("visibility");
      selected.textContent = value;
    });
  }
  return;
};

// the event listener

ratingNumbers.addEventListener("click", lists);
