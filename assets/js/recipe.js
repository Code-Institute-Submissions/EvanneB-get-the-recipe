const searchBtn = document.querySelector("#searchBtn");
const recipes = document.querySelector("#content");
const search = document.querySelector("#search_recipes");

searchBtn.addEventListener("click", () => {
    enquireTheRecipeAPI();
});

const appId = '187461a3';
const apiKey = '40fec7274b46ff61bd3cfad60ed50534';
async function enquireTheRecipeAPI() {
    let entered_search = document.querySelector("#search_recipes").value;
    let response = await fetch(`https://api.edamam.com/search?app_id=${appId}&app_key=${apiKey}&q=${entered_search}`)
        .then(response => response.json())
        .then(data => {
            enquireTheRecipeAPi(data);
        });

    function enquireTheRecipeAPi(data) {
        getTheRecipeDetails(data);
    }
}

function enquireTheRecipeAPi(data) {
    recipes.innerHTML = "";
    for (let counter = 0; counter < 12; counter++) {
        recipes.innerHTML += `
    <div class="col-12 col-md-6 col-xl-3 col-lg-3">
        <div class="card">
        <img src="${data.hits[counter].recipe.image}"
            class="card-img-top" alt="Recipe image">
        <div class="card-body">
            <h5 class="card-title" id="card-title">${data.hits[counter].recipe.label}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Ingredients used: ${data.hits[counter].recipe.ingredients.length}</li>
            <li class="list-group-item">Calories: ${parseInt(data.hits[counter].recipe.calories)}</li>        
        </ul>
        <a href="${data.hits[counter].recipe.url}" target="_blank" class="btn btn-success">See Recipe</a>
        </div>
        <hr />
    </div>
        `;
    }

}