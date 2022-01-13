const nombre = "David"
const apellido ="Barona"

const nombreCompleto = `${nombre} ${apellido}`
console.log(nombreCompleto)

function saludo (nombreCompleto){
    return 'señor'   + nombreCompleto
}

console.log(`un placer tenerlo aquí  ${saludo(nombreCompleto)} y bienvenido al 2022 `)