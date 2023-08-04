/*eslint-env es6*/
"use strict";

const btnLink = document.querySelector(".GFG");

var quotes1 = [
  "The happiness of your life depends upon the quality of your thoughts.",
  "You have power over your mind - not outside events. Realize this, and you will find strength.",
  "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
  "The best revenge is to be unlike him who performed the injury.",
  "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.",
  "The universe is change; our life is what our thoughts make it.",
  "The best revenge is to be unlike him who performed the injury.",
  "The only way to deal with fear is to face it head on.",
  "The first rule is to keep an untroubled spirit. The second is to look things in the face and know them for what they are.",
  "Do not waste your time on what you cannot control.",
];
function marcusquote() {
  var randomNumber = Math.floor(Math.random() * quotes1.length);
  document.getElementById("quoteDisplay").innerHTML = quotes1[randomNumber];
}
var quotes2 = [
  "The best revenge is to be unlike him who performed the injury.",
  "It is not because things are difficult that we do not dare, it is because we do not dare that they are difficult.",
  "As long as you live, keep learning how to live.",
  "The first step in crafting the life you want is to decide what you want.",
  "The mind that is anxious about future events is miserable.",
  "Difficulties strengthen the mind, as labor does the body.",
  "The man who has anticipated the coming of troubles takes away their power when they arrive.",
  "The best revenge is to be unlike him who performed the injury.",
  "It is not because things are difficult that we do not dare, it is because we do not dare that they are difficult.",
];
function senecaquote() {
  var randomNumber = Math.floor(Math.random() * quotes2.length);
  document.getElementById("quoteDisplay").innerHTML = quotes2[randomNumber];
}
