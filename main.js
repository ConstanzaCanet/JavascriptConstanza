//TRABAJO COMPLEMENTARIO, FUNCIONES!
//Defino funciones:
const Saludar =(nombre) => alert(`¡Hola ${nombre}! En este apartado veremos alguna funciones basicas de física`)
//calcula velocidad en mt/min:
const velMetMin = (distancia, tiempo) => (distancia/tiempo).toFixed(2) + ' metros/minuto';
//En la siguiente funcion calculo los metros que hago en 60 minutos, y luego los paso como Km/h
function pasarKmxHora(distancia,tiempo) {
    let calcudist = (((60 * distancia) / tiempo) * 0.01).toFixed(2);
    return `${calcudist} Km/hora`
}
//calculador de aceleracion:
//Aclaracion, dividi por 3600 porque tenía que hacer una conversion de horas a egundos, respetando las unidades de la aceleracion
function aceleracion(v1, v2, v3, v4) {
    let vel1 = v1/3600
    let vel2 = v2/3600
    let vel3 = v3/3600
    let vel4 = v4/3600
    return 'Tienes una aceleración de ' ((vel1 + vel2 + vel3 + vel4 ) / 4).toFixed(2) + ' metros/seg2'
}




//Aplico funciones:
let nombre =prompt('Bienvenido,¿como te llamas?')
Saludar(nombre)

alert('Vamos a ver la velocidad! Es una medida de tiempo sobre espacio, a continuación tendrás un cálculador de velocidad')

let distancia1= Number(prompt('Dime distancia en metros'))
let tiempo1= Number(prompt('Dime tiempo en minutos'))

console.log(velMetMin(distancia1,tiempo1));
console.log(`lo mismo que ` + pasarKmxHora(distancia1, tiempo1));
//AGREGAR WHILE! a = Δv/t
alert(`Ahora podemos ver la aceleración(a), que básicamente podría verse como un promedio de velocidad en X tiempo. A continuación calcularemos a. Toma como ejemplo una situacion en la cual sales de paseo en auto.`)

let v1 = Number(prompt('Arrancas el auto, en este momento que velocidad tienes? (coloca solo el numero, tomamos como unidad los Km/hora)'))
let v2 = Number(prompt('Estas por plena ruta, que velocidad crees tener ahora?'))
let v3 = Number(prompt('Doblas en U para regrear, que velocidad tienes?'))
let v4 = Number(prompt('Estas a punto de frenar el auto, que velocidad crees tener?'))

console.log(aceleracion(v1,v2,v2,v3,v4));





