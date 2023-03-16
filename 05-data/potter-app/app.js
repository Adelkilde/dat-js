"use strict";

// ============ LOAD & INIT APP ============ //

window.addEventListener("load", initApp);

async function initApp() {
    const characters = await loadCharacters();
    displayCharacters(characters);
}

// ============ READ ============ //
// Read (GET) all users from Firebase (Database) using REST API
async function loadCharacters() {
    const response = await fetch("https://raw.githubusercontent.com/cederdorff/dat-js/main/data/potter.json");
    const data = await response.json();
    console.log(data);
    return data;
}

// Create HTML and display all users from given list
function displayCharacters(characterList) {
    //loop through all users and create an article with content for each
    for (const character of characterList) {
        displayCharacter(character);
    }
}

function displayCharacter(character) {
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
    document
        .querySelector("#characters article:last-child")
        .addEventListener("click", () => showCharacterModal(character));
}

function showCharacterModal(character) {
    console.log(character);
    document.querySelector("#dialog-title").textContent = character.name;
    document.querySelector("#dialog-house").textContent = character.house;
    document.querySelector("#dialog-birth-date").textContent = character.dateOfBirth;
    document.querySelector("#dialog-character").showModal();
}
