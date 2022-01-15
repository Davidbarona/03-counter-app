// function 

// // type 1
// function regards(nombre){
//     return `hello,  ${nombre}`;
// }

// console.log(regards('Goku'));

// // type 2 function with const 

// const regards1 =  function(nombre){
//     return `hello,  ${nombre}`;
// }

// console.log(regards1('Vegeta'));

// type 3 arrow function 

// const regards3 = (nombre) =>{
//     return `hello,  ${nombre}`;
// }

// // console.log(saludar3('Picoro'));

// // type 4 simplify 

// const regards4 = (nombre) =>  `hello,  ${nombre}`;

// console.log(regards4('Krilin'));

// back an object but don't use a return 

export const getUser = () =>({
    uid:'12345',
    nameUser:'dave'
})

// console.log(getUser());


export function getActiveUser (name){
    return {
        uid:'1234567',
        username:name
    }
}

// const activeUser = getActiveUser('David')
// console.log(activeUser);


// const  activeUser1 = (name)=>(
//     {uid:'1234567',
//     name:name
//     }
// ) 

// console.log(activeUser1('diego'));