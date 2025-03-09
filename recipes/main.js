import recipes from './recipes.mjs';

document.addEventListener("DOMContentLoaded", () => {

    function displayRecipe(recipe) {
        const container = document.getElementById('recipe-container');
        container.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">
            <div id="content">
            <p id="recipe-tag">${recipe.tags}</p>
            <h2>${recipe.name}</h2>
            ${displayStars(recipe.rating)}
            <p id="description" class="hide-on-small">${recipe.description}</p>
            </div>
        `;
    }

    const appleCrisp = recipes.find(recipe => recipe.author === 'AllRecipes');
    if (appleCrisp) {
        displayRecipe(appleCrisp);
    }

    function displayStars(rating, maxStars = 5) {
        let starsHTML = '<span class="rating" role="img" aria-label="Rating: ' + rating + ' out of ' + maxStars + ' stars">';
        
        for (let i = 1; i <= maxStars; i++) {
            if (i <= rating) {
                starsHTML += '<span aria-hidden="true" class="icon-star">⭐</span>';
            } else {
                starsHTML += '<span aria-hidden="true" class="icon-star-empty">☆</span>';
            }
        }
        starsHTML += '</span>';
        return starsHTML;
    }
});
