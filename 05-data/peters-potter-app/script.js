"use strict";

// data:
const lucius = {
    name: "Lucius Malfoy",
    species: "human",
    gender: "male",
    house: "Slytherin",
    dateOfBirth: "",
    yearOfBirth: 1954,
    ancestry: "pure-blood",
    eyeColour: "grey",
    hairColour: "blonde",
    wand: "elm,dragon heartstring,18",
    patronus: "",
    hogwartsStudent: false,
    hogwartsStaff: false,
    actor: "Jason Isaacs",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/lucius.jpg"
  }

  function displayDetails( character ) {
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
    if(!character.hogwartsStudent && !character.hogwartsStaff)  {
        document.querySelector("#details-hogwarts-status .not").classList.remove("hide");
        document.querySelector("#details-hogwarts-status .teacher").classList.add("hide");
        document.querySelector("#details-hogwarts-status .student").classList.remove("hide");
    } else if(character.hogwartsStudent) {
        document.querySelector("#details-hogwarts-status .not").classList.add("hide");
        document.querySelector("#details-hogwarts-status .teacher").classList.add("hide");
        document.querySelector("#details-hogwarts-status .student").classList.remove("hide");
    } else if(character.hogwartsStaff) {
        document.querySelector("#details-hogwarts-status .not").classList.add("hide");
        document.querySelector("#details-hogwarts-status .teacher").classList.remove("hide");
        document.querySelector("#details-hogwarts-status .student").classList.add("hide");
    }

    // species
    document.querySelector("#details-species").textContent = `${character.species} | ${character.gender} | ${character.ancestry}`;

    // wand
    const wand = character.wand;
    const wandType = wand.substring(0,wand.indexOf(","));
    const wandCore = wand.substring(wand.indexOf(",")+1, wand.lastIndexOf(","));
    const wandLength = wand.substring(wand.lastIndexOf(",")+1);

    document.querySelector("#details-wand-type").textContent = wandType;
    document.querySelector("#details-wand-core").textContent = wandCore;
    document.querySelector("#details-wand-length").textContent = wandLength + '"';

    // birthday 
    const now = new Date();
    const bday = new Date();
    if(character.dateOfBirth) {
        // set bday to date
        bday.parse(character.dateOfBirth);
        document.querySelector("#details-birthday .bday").textContent = character.dateOfBirth;
        document.querySelector("#details-birthday .approx").classList.remove("hide");
    } else {
        // set bday to year
        document.querySelector("#details-birthday .bday").textContent = character.yearOfBirth;
        document.querySelector("#details-birthday .approx").classList.add("hide");
        bday.setFullYear(character.yearOfBirth);
    }

    // calculate age
    const age = now.getFullYear() - bday.getFullYear();
    // TODO: Handle bday after or before today
    document.querySelector("#details-birthday .age").textContent = age;

  }

  displayDetails(lucius);