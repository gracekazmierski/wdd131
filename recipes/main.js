import recipes from './recipes.mjs';

function random(num) {
	return Math.floor(Math.random() * num);
}

function getRandomEntry(list) {
	const listLength = list.length;
	const randomNum = random(listLength);
	return list[randomNum];
}

function recipeTemplate(recipe) {
	return `<figure class="recipe">
		<img src="${recipe.image}" alt="${recipe.name}" />
		<div id="content">
			<figcaption>
				<ul class="recipe__tag">
					${tagsTemplate(recipe.tags)}
				</ul>
				<h2><a href="#">${recipe.name}</a></h2>
				<p class="recipe__ratings">
					${ratingTemplate(recipe.rating)}
				</p>
				<p id="description" class="hide-on-small">
					${recipe.description}
				</p>
			</figcaption>
		</div>
	</figure>`;
}

function tagsTemplate(tags) {
	return tags.map(tag => `<li>${tag}</li>`).join('');
}

function ratingTemplate(rating) {
	let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
	for (let i = 1; i <= 5; i++) {
		html += i <= rating
			? `<span aria-hidden="true" class="icon-star">⭐</span>`
			: `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
	}
	html += `</span>`;
	return html;
}

function renderRecipes(recipeList) {
	const output = document.getElementById("recipe-container");
	if (!output) {
		console.error("Error: #recipe-container not found.");
		return;
	}
	const recipeHtml = recipeList.map(recipe => recipeTemplate(recipe)).join('');
	output.innerHTML = recipeHtml;
}

function init() {
	if (!recipes || recipes.length === 0) {
		console.error("Error: No recipes found in recipes.mjs.");
		return;
	}
	const recipe = getRandomEntry(recipes);
	renderRecipes([recipe]);
}

document.getElementById("search-button").addEventListener("click", searchHandler);


function filterRecipes(query) {
	const filteredRecipes = recipes.filter(recipe => {
		const name = recipe.name.toLowerCase();
		const description = recipe.description.toLowerCase();
		const tags = recipe.tags.join(' ').toLowerCase();
		return name.includes(query) || description.includes(query) || tags.includes(query);
	})
	if (filteredRecipes.length === 0) {
		alert("No recipes found.");
	} else {
		renderRecipes(filteredRecipes);
	}
}

function searchHandler(event) {
    event.preventDefault(); 
    const query = document.getElementById("search-input").value.toLowerCase();
    
    filterRecipes(query);
}


document.addEventListener("DOMContentLoaded", init);
