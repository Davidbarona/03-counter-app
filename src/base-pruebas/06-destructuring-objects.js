//  Destructuring

const persona = {
    name:'Tony',
    age:45,
    password:'Ironman'
}

//

// console.log(name);
// console.log(age);
// console.log(password);

// destructuring into of the function

// const returnPerson  =  (usuario) => {
//     const {name,age,password} = usuario;
//     console.log(name,age,password);
// }

// returnPerson(persona)

// destructring the properties in the argument


// const returnPerson  =  ({name,age,password}) => {

//     console.log(name,age,password);
// }

// returnPerson(persona)

//  destructuring with asigment properties in the argument

// const returnPerson  =  ({name,age,password,range='Captain'}) => {

//     console.log(name,age,password,range);
// }

// returnPerson(persona)


// desesctructuring with an object into to the function

const  form =  ({name,age,password,range='Captain'}) => {

   return {
       passwordName:password,
       age:age,
       latlong:{
           lat:14.23334,
           long:-74.77433
        }
   }

 }

const {passwordName,age,latlong:{lat,long}}= form(persona);


console.log(passwordName,age);
console.log(lat,long);

