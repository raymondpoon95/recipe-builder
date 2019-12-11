import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements } from './views/base';

/*
Global state of the app 
* Search object 
* Current recipe object
* Shopping list object
* Liked recipes
*/
const state = {}

const controlSearch = async () => {
    // 1. Get query from the view
    const query = searchView.getInput();
    console.log(query);

    if(query){
        // 2. new search object and add to state
        state.search = new Search(query);


        // 3. prepare UI for results 
        searchView.clearInput();
        searchView.clearResults();


        // 4. search for recipes 
        // use await because promise is returned from async function getResults()
        // so we await until promise resolves and comes back with data  
        await state.search.getResults(); 


        // 5. render results on UI
        searchView.renderResults(state.search.recipes);
        // console.log(state.search.recipes);
    }
    
}

elements.searchForm.addEventListener('submit', event => {
    event.preventDefault();
    controlSearch();
});
