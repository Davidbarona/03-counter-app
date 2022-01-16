

const personajes = ["goku","vegeta","trunks"]

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

const [, ,pososo] = personajes

// console.log(pososo);

export const returnArray = ()  =>{
    return ['ADC',123]
}

// const [letras,numeros] = returnArray()

// console.log(letras,numeros);


const use = (valor) => {
    return  [valor,()=>{console.log('hello world')}]
} 

// const [nombre,setNombre] = use('goku')

// console.log(nombre)
// setNombre()