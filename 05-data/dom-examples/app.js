console.log("app.js is running 🎉");

// .createElement and .appendChild
const title = document.createElement("h1");
title.textContent = "Hi!";
document.querySelector("body").appendChild(title);

// backticks and .insertAdjacentHTML
const html = /*html*/ `<h1>Hi, again!</h1>`;
document.querySelector("body").insertAdjacentHTML("beforeend", html);

// .textContent - you must have a h1 element in your html
const title = "Hi, again, again!";
document.querySelector("h1").textContent = title;
