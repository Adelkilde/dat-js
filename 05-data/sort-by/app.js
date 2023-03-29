console.log("app.js is running 🎉");

window.addEventListener("load", initApp);

async function initApp() {
    const pokemons = await getPokemons();
    // sort elements (objects) in the array by dexindex
    // .sort is a method on arrays: https://www.w3schools.com/js/js_array_sort.asp
    // .sort uses a compare function, see compareDexindex
    pokemons.sort(compareDexindex);
    console.log(pokemons);
    // You can define as many compare functions, fx compareNames
    pokemons.sort(compareNames);
    console.log(pokemons);
}

async function getPokemons() {
    const response = await fetch(
        "https://cederdorff.github.io/dat-js/05-data/pokemons.json"
    );
    const data = await response.json();
    return data;
}

// compareDexindex defines how to sort on dexindex
// The sort() function compares two values,
// it sends the values to the compare function (compareDexindex),
// and sorts the values according to the returned
function compareDexindex(pokemonA, pokemonB) {
    // If the result is negative, pokemonA is sorted before pokemonB.
    // If the result is positive, pokemonB is sorted before pokemonA.
    // If the result is 0, no changes are done with the sort order of the two values.
    return pokemonA.dexindex - pokemonB.dexindex;
}

// compareNames defines how to sort on names
function compareNames(pokemonA, pokemonB) {
    // localeCompare() method compares two strings in the current locale
    return pokemonA.name.localeCompare(pokemonB.name);
}
