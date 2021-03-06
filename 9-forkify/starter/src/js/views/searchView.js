/*
export const add = (a,b) => a + b;
export const multiply = (a,b) => a * b;
export const ID = 42;
*/

import { elements } from './base';

const limitRecipeTitle = (title, limit = 17) => {
    const newTitle = [];
    if (title.length > limit){
        title.split(' ').reduce((acc, cur) =>{
            if (acc + cur.length <= limit){
                newTitle.push(cur);                
            }
            return acc + cur.length;
        },0);
        return `${newTitle.join(" ")} ...`
    }
    return title;
}

const redredRecipe = recipe => {

    const markup = `
        <li>
            <a class="results__link" href="#${recipe.recipe_id}">
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="${recipe.title}">
                </figure>
                <div class="results__data" title="${recipe.title}" >
                    <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                    <p class="results__author">${recipe.publisher}</p>
                </div>
            </a>
        </li>
    `;

    elements.searchResList.insertAdjacentHTML('beforeend',markup);

}



export const getIntput = () => elements.searchInput.value;

export const renderResults = recipes => {
   //recipes.forEach(recipe => redredRecipe(recipe));
   recipes.forEach(redredRecipe);
};

export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResults = () =>{
    elements.searchResList.innerHTML = '';
}