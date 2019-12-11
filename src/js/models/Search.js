import axios from 'axios';

export default class Search {
    constructor(query){
        this.query = query;
    }

    async getResults() {
        const key = '14712b250f324aa08d874096a51ffdac';
        try {
            const res = await axios(`https://api.spoonacular.com/recipes/search?apiKey=${key}&query=${this.query}`);
            this.recipes = res.data.results;
            // console.log(this.recipes);
        } catch (error) {
            alert(error);
        }
    }
}