"use strict";

window.addEventListener("load", initApp);

function initApp() {
    readCharacters();
}

// ============ GLOBAL VARIABELS ============ //
let characters = [];
// ============ READ ============ //
// Read (GET) all users from Firebase (Database) using REST API
async function readCharacters() {
    const response = await fetch("https://raw.githubusercontent.com/cederdorff/dat-js/main/data/potter.json");
    characters = await response.json();
    console.log(characters);
    displayCharacters(characters);
}

// Create HTML and display all users from given list
function displayCharacters(characterList) {
    //loop through all users and create an article with content for each
    for (const character of characterList) {
        document.querySelector("#characters").insertAdjacentHTML(
            "beforeend",
            /*html*/ `
            <article>
                <img src="${character.image}">
                <h2>${character.name}</h2>
                <p>${character.house}</p>
            </article>
        `
        );
    }
}
