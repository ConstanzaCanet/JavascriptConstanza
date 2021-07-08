let greet = prompt('Hola! ¿Còmo te llamas?')

let conte1 = document.getElementsByClassName('contenedor');
console.log(conte1)
let greetDom= document.createElement('p');
greetDom.textContent = `Hola ${greet}! Bienvenido a nuestra tienda de pelis!`;
conte1[0].appendChild(greetDom);
//MUSTRO PARRAFO NUEVO!
console.log(conte1)
//CREO OJETOS NUEVOS PARA MOSTRAR

class Movie{
  constructor(title ,gender, duration, year, fullprice){
    this.title = title;
    this.gender= gender;
    this.duration= duration;
    this.year= year;
    this.fullprice= fullprice;
  }
}

//DEFINO PELICULAS DISPONIBLES:
const MovieOne = new Movie('El señor de los anillos', 'Fantasía,Aventura', '3:21 horas', 2003, 3000)
const MovieTwo = new Movie('El castillo en el cielo','Fantasía, Aventura','2:04 horas', 1989, 2800)
const MovieThree = new Movie('Actividad Paranormal', 'Terror', '1:20 horas', 2007, 2500)
const MovieFour = new Movie('Pulp Fiction', 'thriller, comedia negra','2:58horas', 1994, 2500)
const MovieFive = new Movie('La lista de Schindler','drama','3:17 horas', 1993, 3000)
const MovieSix = new Movie('El club de la pelea','drama, comedia', '2:31 horas', 1999, 2500)
const MovieSeven = new Movie('Forrest Gump', 'drama,romance', '2:22 horas', 1994, 2300)
const MovieEight = new Movie('Inglourious Basterds','bélico, accion', '2:33 horas', 2009, 3000)
const MovieNine = new Movie('El padrino','crime,drama', '2:58 horas', 1972, 3000)
const MovieTen = new Movie('Origen', 'ciencia ficcion', '2:42 horas', 2010,2800)
//defino arrays de pelis:
const Movies = [MovieOne, MovieTwo, MovieThree, MovieFour, MovieFive,MovieSix,MovieSeven, MovieEight,MovieNine, MovieTen]
//MUESTRO PROCUCTOS

for (const movie of Movies) {
  let namesMov = movie.title;
  let ar =document.getElementById('productos')
  let product = document.createElement('article')
  product.textContent = `${namesMov}`
  ar.appendChild(product)
}

//Practico creacion de nodos:
let frase = document.createElement('h2')
frase.innerHTML= '<h2>Puedes buscar pelicular y alquilarlas e incluso comprarlas!</h2>'

document.body.appendChild(frase)




let frase2 = document.createElement('p')
frase2.innerHTML= '<p>Aqui se desplegará la búsqueda y su resultado</p>'
frase.appendChild(frase2)