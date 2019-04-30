/*
export default "I am an exported string.";
*/

import axios from "axios";

export default class Search {
    constructor(query){
        this.query = query;
    }

    async getResults(){
        const key = "75f0283cda48c498b1d16fcad52fed79";       
        try{
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            //console.log(this.result);        
         } catch (error){
             alert(error);
         }        
    }

}
