"use strict";

window.addEventListener("load", start);

async function start() {
  const characters = await loadJSON();
  displayCharacterList(characters);
}


async function loadJSON() {
  const response = await fetch("potter.json");
  const data = await response.json();
  console.log("Received data:", data);
  return data;
}


function displayCharacterList(characters) {
  characters.forEach( displayCharacter );
}

function displayDetails(character) {
  // name, image, actor
  document.querySelector("#details-character-name").textContent = character.name;
  document.querySelector("#details-image img").src = character.image;
  document.querySelector("#details-image img").alt = `portrait of ${character.name}`;
  document.querySelector("#details-image figcaption").textContent = `portrayed by actor ${character.actor}`;

  // house
  document.querySelector("#details-house-name").textContent = character.house;
  document.querySelector("#details-house-crest").src = `images/housecrest-${character.house.toLowerCase()}.png`;
  document.querySelector("#details-house-crest").alt = `${character.house} house crest`;

  // hogwarts-status
  if (!character.hogwartsStudent && !character.hogwartsStaff) {
    document.querySelector("#details-hogwarts-status .not").classList.remove("hide");
    document.querySelector("#details-hogwarts-status .teacher").classList.add("hide");
    document.querySelector("#details-hogwarts-status .student").classList.remove("hide");
  } else if (character.hogwartsStudent) {
    document.querySelector("#details-hogwarts-status .not").classList.add("hide");
    document.querySelector("#details-hogwarts-status .teacher").classList.add("hide");
    document.querySelector("#details-hogwarts-status .student").classList.remove("hide");
  } else if (character.hogwartsStaff) {
    document.querySelector("#details-hogwarts-status .not").classList.add("hide");
    document.querySelector("#details-hogwarts-status .teacher").classList.remove("hide");
    document.querySelector("#details-hogwarts-status .student").classList.add("hide");
  }

  // species
  document.querySelector("#details-species").textContent = `${character.species} | ${character.gender} | ${character.ancestry}`;

  // wand
  const wand = character.wand;
  const wandType = wand.substring(0, wand.indexOf(","));
  const wandCore = wand.substring(wand.indexOf(",") + 1, wand.lastIndexOf(","));
  const wandLength = wand.substring(wand.lastIndexOf(",") + 1);

  document.querySelector("#details-wand-type").textContent = wandType;
  document.querySelector("#details-wand-core").textContent = wandCore;
  document.querySelector("#details-wand-length").textContent = wandLength + '"';

  // birthday
  const now = new Date();
  const bday = new Date();
  if (character.dateOfBirth) {
    // set bday to date
    const day = Number(character.dateOfBirth.substring(0,2));
    const month = Number(character.dateOfBirth.substring(3,5));
    const year = Number(character.dateOfBirth.substring(6));
    bday.setDate(day);
    bday.setMonth(month-1);
    bday.setFullYear(year);
    document.querySelector("#details-birthday .bday").textContent = character.dateOfBirth;
    document.querySelector("#details-birthday .approx").classList.add("hide");
  } else {
    // set bday to year
    document.querySelector("#details-birthday .bday").textContent = character.yearOfBirth;
    document.querySelector("#details-birthday .approx").classList.remove("hide");
    bday.setFullYear(character.yearOfBirth);
  }

  // calculate age
  let age = now.getFullYear() - bday.getFullYear();
  if(bday.getMonth() > now.getMonth() ||
    (bday.getMonth() == now.getMonth() && bday.getDate() > now.getDate())) {
    age--;
  }
  document.querySelector("#details-birthday .age").textContent = age;
}

function displayCharacter(character) {
  const grid = document.querySelector("#character-grid");
  grid.insertAdjacentHTML("beforeend", getCharacterHTML(character));
}

function getCharacterHTML(character) {
  const html = `<article class="character" data-theme="${character.house.toLowerCase()}">
        <img src="${character.image}" alt="portrait of ${character.name}">
        <h2>${character.name}</h2>
        <p>${character.house}</p>
    </article>`;

  return html;
}