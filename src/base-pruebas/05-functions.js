// function 

// type 1
function saludar(nombre){
    return `hola,  ${nombre}`;
}

console.log(saludar('Goku'));

// type 2 function with const 

const saludar1 =  function(nombre){
    return `hola,  ${nombre}`;
}

console.log(saludar1('Vegeta'));

// type 3 arrow function 

const saludar3 = (nombre) =>{
    return `hola,  ${nombre}`;
}

console.log(saludar3('Picoro'));

// type 4 simplify 

const saludar4 = (nombre) =>  `hola,  ${nombre}`;

console.log(saludar4('Krilin'));

// back an object but don't use a return 

const getUser = () =>({
    uid:'12345',
    nameUser:'dave'
})

console.log(getUser());


function getActiveUser (name){
    return {
        uid:'1234567',
        username:name
    }
}

const activeUser = getActiveUser('David')
console.log(activeUser);


const  activeUser1 = (name)=>(
    {uid:'1234567',
    name:name
    }
) 

console.log(activeUser1('diego'));