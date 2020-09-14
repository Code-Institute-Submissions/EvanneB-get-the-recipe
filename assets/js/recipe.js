// -----------------------------------------------  Selectors
const searchButton = document.querySelector("#search");
const recipeCards = document.querySelector("#content");
const clearIcon = document.querySelector("#recipe-form__clear-icon");
const searchBar = document.querySelector("#recipe-form__search-bar");
// ----------------------------------------------- Event Listeners
searchButton.addEventListener("click", () => {
    recipeAPI();
});
//Event listeners taken from https://www.mikedane.com/web-development/css/styling-search-bar/
searchBar.addEventListener("keyup", () => {
    if(searchBar.value && clearIcon.style.visibility != "visible"){
        clearIcon.style.visibility = "visible";
    } else if(!searchBar.value) {
        clearIcon.style.visibility = "hidden";
    }
});
clearIcon.addEventListener("click", () => {
    searchBar.value = "";
    clearIcon.style.visibility = "hidden";
});
// ----------------------------------------------- Recipe API
let appId = 'ba2e62ae2c',
    apiKey = 'd7502b2c57daa857f409d28f913314a60';
// ^^ get your own keys! from edamam.com

// Get data from Recipe API
async function recipeAPI() {
    let searchValue = document.querySelector("#recipe-form__search-bar").value;
    let response = await fetch(`https://api.edamam.com/search?app_id=${appId}&app_key=${apiKey}&q=${searchValue}`)
        .then(response => response.json())
        .then(data => {
            recipeAPIData(data);
        })
}​
// Use data from Recipe API 
function recipeAPIData(data) {
    for (let i = 0; i < 8; i++) {
        recipeCards.innerHTML += `
    <div class="col-12 col-md-6 col-xl-3 col-lg-3">
        <div class="card">
        <img src="${data.hits[i].recipe.image}"
            class="card-img-top" alt="Recipe image">
        <div class="card-body">
            <h5 class="card-title" id="card-title">${data.hits[i].recipe.label}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Calories: ${parseInt(data.hits[i].recipe.calories)}</li>
            <li class="list-group-item">Ingredients used: ${data.hits[i].recipe.ingredients.length}</li>
            <li class="list-group-item">Health labels: ${data.hits[i].recipe.healthLabels}</li>
            <li class="list-group-item">Diet labels: ${data.hits[i].recipe.dietLabels}</li>
        </ul>
        <a href="${data.hits[i].recipe.url}" target="_blank" class="btn btn-primary">See Recipe</a>
        </div>
    </div>
        `
    }
​
}