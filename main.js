//PARA LA ENTREGA DEL PRIMER PROYECTO FINAL, CONTINUARE TRABAJNDO CON LAS IDEAS DE LOS PROYECTOS ANTERIORES
// DE MODO QUE PUEDO PRESENTAR FUNCIONES O METODOS JUNTO CON SUS RESPECTIVOS OBJETOS, LA IDEA ES HACER UN CATALOGO DE PELICULAS.

//defino objeto pelicula:

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
//-------------------------------------------------------------------------------------
//DEFINO UN ARRAY DE PERSONAS O USUARIOS:
const community = [];
//defino objeto usuario o persona:
class Person{
  constructor(namePerson, lastName, age, nationality, email, cart){
      this.namePerson = namePerson;
      this.lastName = lastName;
      this.age = age;
      this.nationality = nationality;
      this.email = email;
      this.cart = cart;
  }
  

  showprice(){
    let result= this.fullprice * 0.45
    return ('El precio de venta de esta peli es de $' + result)
  }
  //DEJO LA FUNCION DE ALQUILAR PARA COLOCARLA LUEGO COMO UNA ACCION OPCIONAL Y MÁS DIRECTA PARA EL USUARIO
  youWant(movie){
    let a = confirm(`¿Querés alquilar "${movie.title}"?`)
    if (a == true) {
      let dias =Number( prompt('¿Cuántos días?'));
        if (dias != 0) {
             this.cart.push(movie);
             return ('A pagar $'+ dias * (movie.fullprice * 0.02) + ' .Disfruta la película!')
         }else{
          return console.log('Para otro momento entones :)')
      }
    }else{
      return console.log('Para otro momento entones :)')
    }
  }

  //lA OPCION DE COMPRA FUNCIONARÁ PARA LA ELECCION DEL USUARIO Y PARA EL OFRECIMIENTO COMERCIAL
  buy(movie){
    this.cart=[];
    let quiere = confirm(`¿Quieres comprar ${movie.title}?`)
      if (quiere == true) {
           this.cart.push(movie);
           console.log(`${movie.title} agregado en tu carrito!`)
           return ('Te la llevas por $' + movie.fullprice * 0.45)
       }else{
            let a = confirm(`En ese caso ¿Querés alquilar "${movie.title}"?`)
            if (a == true) {
                 this.cart.push(movie);
                 let dias =Number( prompt('¿Cuántos días?'));
            if (dias != 0) {
                 let priceRent = movie.fullprice * 0.02
                 return ('La renta diaria de esta peli es de $'+ priceRent + '. A pagar $'+ dias * (movie.fullprice * 0.02) + ' .Disfruta la película!')
            }else{
                 return console.log('Para otro momento entones :)')
           }
      }else{
        return console.log('Para otro momento entones :)')
       }
      }
    }
    //Quiero poder tener un metodo que me muestre el carrito de compras
    show() {
      for(let i=0; i <= this.cart.length; i++)
      console.log (this.cart[i]);
  }
    
}
//muestro carrito de compras
//console.log(community[0].cart[0].title)

//Funcion de venta/compra
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
//DE LOGUEO
function logIn() {
  let enter = confirm('Registrate')
  if (enter == true) {
    let name1 = prompt('Nombre');
    if (name1 == 0) {
      return('Nesecito tu nombre para el regitro')
    }
    let lastName1 = prompt('Apellido');
    let age1 = Number(prompt('Edad'));
    let nationality1 = prompt('Nacionalidad');
    let email1 = prompt('email');
    if (email1 == 0) {
      return ('Necisto tu email para el registro');
     }
    const newUser = new Person(name1, lastName1, age1,nationality1,email1)
    community.push(newUser);
    return (`Bienvenido ${newUser.namePerson}! Gracias por unirte!`)
  }else{
    return'Usuario sin registrar'
  }
}

//DE BUSQUEDA:
function searchGender() {
  let preference = prompt('¿Qué genero buscas?')
  preference = preference.toLowerCase()
  let filter = Movies.filter(Movie => Movie.gender.includes(preference))
  return filter;
}

//PROBANDO
console.log(logIn());
console.log(community[0].buy(MovieOne));
console.log(community);


//muestro carrito de compras
//dejo en claro como puedo ir a ver el carrito:
console.log(community[0].cart[0].title)

//llamo la funcion:
community[0].show()
