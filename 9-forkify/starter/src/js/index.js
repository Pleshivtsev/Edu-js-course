// Global app controller
/*
import str from "./models/Search";
//import {add as a, multiply as m, ID } from "./views/searchView";
import * as searchView from "./views/searchView";

//console.log(`Using imported function ${a(ID, 2)} and ${m(3,5)}. ${str}`);
console.log(`Using imported function ${searchView.add(searchView.ID, 2)} and ${searchView.multiply(3,5)}. ${str}`);

*/


/*
food2fork.com
pleshivtsev@gmail.com | apiKey&33
apiKey: 75f0283cda48c498b1d16fcad52fed79
https://www.food2fork.com/api/search
*/

import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';

/*
Global state of the app
* - Search object
* - Current recipe object
* - Shopping list object
* - Liked recipes
*/
const state = {};

const controlSearch = async() => {
    // 1) get query from view
    const query  = searchView.getIntput();

    if (query){
        //2) New search object and add state
        state.search = new Search(query);

        //3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);            

        //4) Search for recipes
        await state.search.getResults();

        //5) Render results on UI
        clearLoader();
        searchView.renderResults(state.search.result);
        //console.log(state.search.result);
    }

}

elements.searchForm.addEventListener("submit", e =>{
    e.preventDefault();
    controlSearch();
})