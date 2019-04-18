/*
const second = () => {
            
    setTimeout(() => {
        console.log("Async second")
    }, 10)
    // console.log("Second");
}

const first = () => {
    console.log("Hi - first!");
    second();    
    console.log("The end");
}

first();
*/

// Callback hell

/*
function getRecipe(){
    // Получить перечень ID
    setTimeout(()=>{
        const recipeID = [523, 883, 432, 974];
        console.log(recipeID);

        //Выбрать рецепт с выбранным ID
        setTimeout(id => {
            const recipe = {title:"Pasta", publisher: "Jonas"};
            console.log(`${id}: ${recipe.title}`);

            //Выбрать рецепт того же автора
            setTimeout( publisher => {
                const recipe2 = {title: "Pizza", publisher: "Jonas"}
                console.log(recipe2);                
            }, 1500, recipe.publisher);

        }, 1000, recipeID[2]);

 
    },1500);
}
// getRecipe();


const getIDs = new Promise( (resolve, reject) => {    
    setTimeout(() => {
        resolve([523, 883, 432, 974])
        //reject([523, 883, 432, 974])
    }, 15);
});


const getRecipe_Promise = recID =>{
    return new Promise( (resolve, reject)  => {
        setTimeout(ID => {
            const recipe = {title:"Pasta", publisher: "Jonas"};
            resolve(`${ID}: ${recipe.title}`);
        }, 15, recID);

    });
}

const getRelated_Promise = publisher => {
    return new Promise( (resolve,reject) => {
        setTimeout(pub => {
            const recipe2 = {title: "Pizza", publisher: "Jonas"};
            resolve(`${pub}: ${recipe2.title}`);
        },15, publisher);
    });
};

getIDs
.then( IDs => {
    console.log(IDs);
    return getRecipe_Promise(IDs[2]);
})

.then(recipe => {
    console.log(recipe)
    return getRelated_Promise("Jonas");
})

.then(recipe => {
    console.log(recipe);
    console.log("***************************") 
})

.catch( error => {
    console.log("Error!");
});


 async function getRecipesAW() {
            const IDs = await getIDs;
            console.log(IDs);
            const recipe = await getRecipe(IDs[2]);
            console.log(recipe);
            const related = await getRelated('Jonas Schmedtmann');
            console.log(related);

            return recipe;
        }
        getRecipesAW().then(result => console.log(`${result} is the best ever!`));
*/

fetch("http://crossorigin.me/https://www.metaweather.com/api/location/2487956/")
.then(result =>{
    console.log(result)
})
.catch(error => console.log(error));

