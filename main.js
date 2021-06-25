//TRABAJO COMPLEMENTARIO, FUNCIONES!

function saluda(nombre){
    alert(`¡Hola ${nombre}! En este apartado veremos alguna funciones basicas de física, será genial!`)
}

let nombre =prompt('Bienvenido,¿como te llamas?')
saluda(nombre)

alert('Vamos a ver la velocidad! Es una medida de tiempo sobre espacio, a continuación tendrás un cálculador de velocidad')


/*function velocidad(distancia,tiempo){
    let vel = (distancia / tiempo)
    return vel; 
}
*/
const velMetMin = (distancia, tiempo) => (distancia/tiempo).toFixed(2) + ' metros/minuto';
const velKmHor = (distancia, tiempo) => (distancia/tiempo).toFixed(2) + ' Kilometros/hora';
const velMetHor = (distancia, tiempo) => (distancia/tiempo).toFixed(2) + ' metros/hora';

let distancia1= Number(prompt('Dime distancia en metros'))
let tiempo1= Number(prompt('Dime tiempo en minutos'))

console.log(velMetMin(distancia1,tiempo1));


 
















