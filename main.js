//PRACTICANDO FUNCIONES--CONVERSOR  
 
alert('Bienvenido! En el trabjo de hoy tenemos un conversor de unidades.')

//longitud,distancia,ancho,etc
//aquí defini  funcion tras funcion intenté con swich, pero no me anduvo y termine haciendolo así
function kilometros(metros){
    let resultado= parseFloat(metros * 0.01) + ' Km'
    return resultado
}

function pulgadas(metros) {
  let resultado = parseFloat( metros * 39.37) + ' pulgadas'
  return resultado
}

function pies(metros) {
  let resultado = parseFloat(metros * 3,28) + ' pies'
  return resultado
}

function milimetros(metros) {
  let resultado = parseFloat( metros * 1000) + ' milimetros'
  return resultado
}

function mostrar(metros) {
    console.log(`Estos ${metros} metros equivalen a:`)
    console.log(kilometros(metros));
    console.log(pulgadas(metros));
    console.log(pies(metros));
    console.log(milimetros(metros));
}

//PIDO DATOS EN METROS
let metros=Number(prompt('Coloca la medida en metros'))

mostrar(metros);


