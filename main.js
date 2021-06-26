//TRABAJO COMPLEMENTARIO, FUNCIONES!
//Defino funciones:
const Saludar =(nombre) => alert(`¡Hola ${nombre}! En este apartado veremos alguna funciones basicas de física`)
//calcula velocidad en mt/min:
const velMetMin = (distancia, tiempo) => (distancia/tiempo).toFixed(2) + ' metros/minuto';
//En la siguiente funcion calculo los metros que hago en 60 minutos, y luego los paso como Km/h
function pasarKmxHora(distancia,tiempo) {
    let calcudist = ((60 * distancia) / tiempo) * 0.01;
    return `${calcudist} Km/hora`
}

//Aplico funciones:
let nombre =prompt('Bienvenido,¿como te llamas?')
Saludar(nombre)

alert('Vamos a ver la velocidad! Es una medida de tiempo sobre espacio, a continuación tendrás un cálculador de velocidad')

let distancia1= Number(prompt('Dime distancia en metros'))
let tiempo1= Number(prompt('Dime tiempo en minutos'))

console.log(velMetMin(distancia1,tiempo1));
console.log(`lo mismo que ` + pasarKmxHora(distancia1, tiempo1));















