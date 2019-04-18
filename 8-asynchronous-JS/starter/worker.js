function setID_Assync(){
    return new Promise( (resolve, reject) =>{
        const id = setID();
        id === 1 ? resolve(id) : reject(-1);
    })
}

function promisesTest(){
    let user, name;
    setID_Assync()
        .then(p_id => getAllData(p_id, user, name));

        return "promisesTest exit"
};