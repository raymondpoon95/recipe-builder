import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = '';
}

export const clearResults = () => {
    elements.searchResultList.innerHTML = '';
}

const renderRecipe = (recipe) => {
    const markup = `
        <li>
            <a class="results__link" href="${recipe.id}">
                <figure class="results__fig">
                    <img src="${elements.searchRecipeImage}${recipe.id}-90x90.jpg" alt="${recipe.title}">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${recipe.title}</h4>
                    <p class="results__author">The Pioneer Woman</p>
                </div>
            </a>
        </li>
    `;
    elements.searchResultList.insertAdjacentHTML('beforeend', markup);
}

export const renderResults = (recipes) => {
    // loops through renderResults and calls renderRecipe on each element of renderResults
    recipes.forEach(renderRecipe);
}