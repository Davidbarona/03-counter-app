    import heroes   from '../data/hero'

// console.log(owners);

// const getHeoreById = (id) => {
//     return heroes.find((hero)=>{
//          if (id===hero.id) {
//             return hero.id
//          }
//          else {
//              return null 
//          }
        
//     })
// }


    export const getHeoreById = (id) =>{
        return heroes.find((heroe)=> heroe.id === id)
    }

// console.log(getHeoreById(4));

 export const getHeroesByOwner = (owner) => {
     return heroes.filter((heroe)=> heroe.owner === owner)
    }

// console.log(getHeroesByOwner('DC'));

//When you realice an export by default you can choise the name what do you want, only you  must write 
// the name and into the field to export, 'export default' if anoyone name  
