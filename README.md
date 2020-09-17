# Get the Recipe

Get the Recipe is a website aimed at providing easy access to thousands of recipes to suit every users needs. I will also use this site as a space to keep my favouite recipes and provide inspiration for users. 
The website will take a user centric approach with a clear and easily navigated design. 
 
## UX

## The Strategy Plane
This website aims to;
- provide recipes for users looking to bake or cook someting specific with the use of the search function
- inspire users by hosting some recipes on the site
- increase social media presence 

## The Scope Plane
Users will be able to achieve the above goals through the use of the following;
- The edamam API function which allows us to search thousands of recipes as well as giving nutritional value and details on each..
- The recipes page will feature a range of different recipes to inspire users.
- The contact form will allow users to get in contact with me regarding any questions/ feedback they have.
- The social media links at the bottom of the page allow users to contact us on Facebook, Twitter, Instagram and Pinterest.

## The Structure Plane
The webiste will consist of three pages, a home page, recipes page and contact page.
The navigation bar at the top of the page will allow the user to switch between the pages. 
The social media links at the bottom of each page will take the user directly to the respective media pages.
The contact form allows the user to send messages directly to myslef.

## The Skeletal Plane
![mobile-wireframe](https://evanneb.github.io/get-the-recipe/assets/images/mobile-wireframe.png)
![desktop-wireframe](https://evanneb.github.io/get-the-recipe/assets/images/desktop-wireframe.png)

## The Surface Place
The website will host a range of images of food to tempt uses and encourage them to bake. The recipes will display an image with a brief description of the recipe including ingredients used and calories and there will be a 'see recipe' button below when if clicked will take the user directly to the recipe.
The background will be a light blue colur as it is a colour which represent peace and calm. I find this suits thereputic act of baking very well. 
I will use cursive text as it gives a more personal feel to the page. The text colour will be grey in contrast to the light coloured background.
When a search is carried out, the recipies will appear with an image and brief description. The full recipe will not be displayed until the user clicks 'see recipe' at which point the recipe will open in a new tab. This is to ensure there is no clutter on the page.


## Features
 
### Existing Features
- Navbar - allows users to easily naviagte between the three pages, Home, Recipes and Contact.
- Search function - allows users to find recipes specific to their needs or they can even find recipes by searching the ingredients they have available. Examples of searches "low-fat muffins", "gluten-free brownies", "apples, flour, sugar". 
- Contact form - allows users to submit comments, questions directly to my mailbox by filling in the contact form. 
- Recipe preview - users can view pictures of the recipes and have the option of viewing the whole recipe when the click the 'see recipe' button.  

### Features Left to Implement
In future I would like to include:
- a profile section where users can save there favourite recipes and basically create their very own online cookbook.
- a healthy eating section where users can learn more about different foods and their benefits.

## Technologies Used
I used the following technologies in this project: 

- [GitHub](https://github.com/)
    - The project uses **GitHub** for version control.
- [GitPod](https://gitpod.io/)
    - The project uses **Gitpod** for the working environment.
- HTML
    - The project is written using **HTML**.
- CSS
    - **CSS** is used to style the project.
- [Bootstrap 3](https://getbootstrap.com/)
    - The  **Bootstrap 3** library is used to assist with CSS styling. 
- [Javascript](https://javascript.com)
    - The project uses **Javascript** to implement the carousel feature, the edamam api, maps api and read more buttons.
- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.
- [Edamam API](https://www.edamam.com/)
    - The project uses the **Edamam recipe search API** to access the thousands of recipes they have available.
- Chrome Develper Tools
    - I used **Chrome Developer Tools** to help identify problems in the code.


## Testing

1. Navbar:
    1. Go to 'home" page 
    2. Try to access "recipe" page via home page.
    3. Go back to "home" page and try access "contact" page
    4. Go to "recipe" page.
    5. Try to access "home" page from "recipe" page
    6. Return to "recipe" page and try to access "contact" page
    7. Go to "contact" page
    8. Try to access "home" page from "contact" page
    9. Return to "contact" page and try to access "recipe" page

2. Recipe search:
    1. Go to "recipe" page
    2. Try to search for a recipe and verify that it works
    3. Try to search for another recipe and verify that a new search has completed

3. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

4. Social media links:
    1. Go to facebook icon on 'home' page, click and ensure facebook opens in new tab
    2. Go to instagram icon on 'home' page, click and ensure instagram opens in new tab
    3. Go to twitter icon on 'home' page, click and ensure twitter opens in new tab
    4. Go to pinterest icon on 'home' page, click and ensure pinterest opens in new tab
    5. Go to facebook icon on 'recipe' page, click and ensure facebook opens in new tab
    6. Go to instagram icon on 'recipe' page, click and ensure instagram opens in new tab
    7. Go to twitter icon on 'recipe' page, click and ensure twitter opens in new tab
    8. Go to pinterest icon on 'recipe' page, click and ensure pinterest opens in new tab
    9. Go to facebook icon on 'contact' page, click and ensure facebook opens in new tab
    10. Go to instagram icon on 'contact' page, click and ensure instagram opens in new tab
    11. Go to twitter icon on 'contact' page, click and ensure twitter opens in new tab
    12. Go to pinterest icon on 'contact' page, click and ensure pinterest opens in new tab
 
 5. HTML validation

I ran the html pages through a html5 validator.

Index.html
![HTML-validation](https://evanneb.github.io/get-the-recipe/assets/images/index.html-validation.png)
Recipe.html 
![HTML-validation](https://evanneb.github.io/get-the-recipe/assets/images/recipe.html-validation.png)
Contact.html
![HTML-validation](https://evanneb.github.io/get-the-recipe/assets/images/contact.html-validation.png)

 6. CSS Validation
  I ran the the CSS stylesheet through the CSS validator. 
![CSS-validation](https://evanneb.github.io/get-the-recipe/assets/images/style.css-validation.png)

## Deployment

- I started creating this website in a local git. I used 'git init' to create a new repository.
- At various stages I used 'git add .' to add changes to the repository.
- I used 'git commit -m "..."' to commit these changes with a message identifying what has been changed.
- I used 'git push' to push up the local git repository. 
- The GitHub repository was made live via GitHub pages
- The websie can be found at https://evanneb.github.io/get-the-recipe/.


## Credits

### Content
- The **Chocolate Cake** recipe is from [Nora Cooks](https://www.noracooks.com/vegan-chocolate-cake/)
- The **Cupcakes** recipe is from [BBC Good Food](https://www.bbcgoodfood.com/recipes/vegan-cupcakes)
- The **Lemon Drizzle Cake** recipe is from [Kitchen Sanctuary](https://www.kitchensanctuary.com/vegan-lemon-drizzle-cake/)
- The **Carrot Cake** recipe is from [BBC Good Food](https://www.bbcgoodfood.com/recipes/vegan-carrot-cake)

### Media
- The photos used in this site were obtained from ...
- The **Chocolate Cake** image is from [Unsplash](https://unsplash.com/photos/Id8BO472TbY)
- The **Cupcakes** image is from [Unsplash](https://unsplash.com/photos/MKBoRZEGeiM)
- The **Lemon Drizzle Cake** image is from [Unsplash](https://unsplash.com/photos/-Qe0rpF2ThY)
- The **Carrot Cake** image is from [Unsplash](https://unsplash.com/photos/79bdGHMW_O0)

### Acknowledgements

- I received inspiration for this project from The BBC Good Food website https://www.bbcgoodfood.com/
