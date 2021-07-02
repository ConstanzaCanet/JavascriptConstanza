//SEGUIRE TRABAJANDO SOBRE LAS FUNCIONES Y OBJETOS ANTERIORMENTE ENTREGADOS-- AGREGO Y PRACTICO ARRAYS
class Movie{
  constructor(title ,gender, duration, year, fullprice){
    this.title = title;
    this.gender= gender;
    this.duration= duration;
    this.year= year;
    this.fullprice= fullprice;
  }
  
  rentDay(){
    let priceRent = this.fullprice * 0.02
    return ('Esta peli se renta por $' + priceRent + ' al día.')
  }

  youWant(){
    let a = confirm(`¿Querés alquilar "${this.title}"?`)
    if (a == true) {
      let dias =Number( prompt('¿Cuántos días?'));
        if (dias != 0) {
             return ('A pagar $'+ dias * (this.fullprice * 0.02) + ' .Disfruta la película!')
         }else{
          return console.log('Para otro momento entones :)')
      }
    }else{
      return console.log('Para otro momento entones :)')
    }
  }
  showprice(){
    let result= this.fullprice * 0.45
    return ('El precio de venta de esta peli es de $' + result)
  }

  buy(){
    let quiere = confirm(`¿Quieres comprar ${this.title}?`)
      if (quiere == true) {
           return ('Te la llevas por $' + this.fullprice * 0.45)
       }else{
            let a = confirm(`En ese caso ¿Querés alquilar "${this.title}"?`)
            if (a == true) {
                 let dias =Number( prompt('¿Cuántos días?'));
            if (dias != 0) {
                 let priceRent = this.fullprice * 0.02
                 return ('La renta diaria de esta peli es de $'+ priceRent + '. A pagar $'+ dias * (this.fullprice * 0.02) + ' .Disfruta la película!')
            }else{
                 return console.log('Para otro momento entones :)')
           }
      }else{
        return console.log('Para otro momento entones :)')
       }
      }
    }
  }

const MovieOne = new Movie('El señor de los anillos', 'fantasía,aventura', '3:21 horas', 2003, 3000)
const MovieTwo = new Movie('El castillo en el cielo','fantasía, aventura','2:04 horas', 1989, 2800)
const MovieThree = new Movie('Actividad Paranormal', 'terror', '1:20 horas', 2007, 2500)

//CONTINUO TRABAJANDO CON ARRAYS, practica
//EXTIENDO MI CANTIDAD DE OBJETOS
const MovieFour = new Movie('Pulp Fiction', 'thriller, comedia negra','2:58horas', 1994, 2500)
const MovieFive = new Movie('La lista de Schindler','drama','3:17 horas', 1993, 3000)
const MovieSix = new Movie('El club de la pelea','drama, comedia', '2:31 horas', 1999, 2500)
const MovieSeven = new Movie('Forrest Gump', 'drama,romance', '2:22 horas', 1994, 2300)
const MovieEight = new Movie('Inglourious Basterds','bélico, accion', '2:33 horas', 2009, 3000)
const MovieNine = new Movie('El padrino','crime,drama', '2:58 horas', 1972, 3000)
const MovieTen = new Movie('Origen', 'ciencia ficcion', '2:42 horas', 2010,2800)

let Movies = [MovieOne,MovieTwo,MovieThree,MovieFour,MovieFive,MovieSix,MovieSeven,MovieEight,MovieNine,MovieTen]
console.log('Las peliculas que tenemos son: '); 
for(const Movie of Movies){console.log(Movie.title)}
console.log(`Dando un total de  ${Movies.length} peliculas en total `)

//coloco esto solo para claridad
console.log("----------------------------");

//CREO UNA FUNCION DE BUSQUEDA Y OFRECIMIENTO--
function searchName() {
  let what = prompt('¿Que peli quieres?')
  if (Movies.find(Movie => Movie.title == what)) {
    let thisMovie = (Movies.find(Movie => Movie.title == what))
    console.log(`Tenemos esa peli! ${thisMovie.buy()}`); 

  } else if (what == 0) {
    console.log(('No has colocado datos'))
    return searchName()

  }else{
    return(`Lo sentimos no tenemos esa peli!`);
  }
}

console.log(searchName()); 



console.log("----------------------------");
//EN LA PARTE DE LA VENTA IMPRIMO LA LISTA POR UNA CUESTION DE PRACTICIDAD, PARA HACER INCAPIE EN EL PUSH Y MOSTRAR QUE SE CAMBIO
function sale() {
  let give = confirm('¿Quieres vender alguna película?')
if (give == true) {
   let titleOb = prompt('Titulo:');
   let genderOb= prompt('Genero/s:');
   let durationOb= prompt('Duración:');
   let yearOb= Number(prompt('Año de estreno:'));
   let fullpriceOb= Number(prompt('Precio(sin unidad, manejamos $):')) ;

   let MovieObtained = new Movie(titleOb ,genderOb, durationOb, yearOb, fullpriceOb)
   if ((titleOb == 0) && (fullpriceOb == 0)) {
     console.log('Los datos están, incompletos!');
     sale();
   }else{
    if (fullpriceOb >= 3000) {
      console.log('Lo siento no puedo pagar tanto! Vuelve más adelante.')
    }else{
      Movies.push(MovieObtained);
      for(const Movie of Movies){console.log(Movie.title)}
      console.log('Exelente! Te pago $' + MovieObtained.fullpriceOb + ' por la película ' + titleOb + ' .Gracias por visitarnos');
      //Si se ingresa alguna peli nueva se muestra el cambio:
      console.log(`Dando un total de  ${Movies.length} peliculas en total `)
    }
   }
   
}else{
  (`Entonces otra ocación nos vemos! Gracias por visitarnos`)
}
}
//Llamo función
sale();

console.log("----------------------------");
// FUNCIÓN FILTER, PARA BUSCAR POR GÉNERO


function searchGender() {
  let preference = prompt('¿Qué genero buscas?')
  preference = preference.toLowerCase()
  let filter = Movies.filter(Movie => Movie.gender.includes(preference))
  return filter;
}

console.log(searchGender());