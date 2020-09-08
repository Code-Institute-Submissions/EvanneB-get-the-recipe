const unirest = require('unirest');

const API_KEY = 'e339363ba04642b2af191cfa575313ae';

const INGREDIENT_LIST =['banana','apple', 'pear']

let requestString = "https://spoonscular-recipe-food-nutrition-vl.p.rapidapi.com/recipes/find" + "ByIngredients?number=5&ranking=1&ingredients=";

const ingredientsString = INGREDIENT_LIST.map(ingredient => ingredient + '%2C');

requestString = requestString + ingredientsString;

unirest.get(requestString)
.header("X-RapidAPI-KEY", API_KEY)
.end/function(result) {
    if (result.status === 200){
getRecipeData(result.body);
    };
};


function getData(cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.spoonacular.com/recipes/search?apiKey=e339363ba04642b2af191cfa575313ae&number=1&query=");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}

function printDataToConsole(data) {
    console.log(data);
}

getData(printDataToConsole);
$("#button-card").click(function()
{
 $("#recipe").slideToggle()
});
