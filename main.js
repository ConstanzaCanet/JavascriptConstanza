class Movie{
  constructor(title ,gender, duration, year, fullprice){
    this.title = title;
    this.gender= gender;
    this.duration= duration;
    this.year= year;
    this.fullprice= fullprice;
  }
}

class Person{
  constructor(namePerson, lastName, age, nationality, email, cart){
      this.namePerson = namePerson;
      this.lastName = lastName;
      this.age = age;
      this.nationality = nationality;
      this.email = email;
      this.cart = cart;
  }
  //ESTA FUNCIÓN ESTABA DE ANTES, LA COLOCO AHORA EN OBJETO PERSONA
  //SOLO PARA REGISTRADOS ESTARA DISPONIBLE LA FUNCION COMPRAR- 
  //REALIZO UNOS CAMBIOS EN LA FUNCION(SIMULO CARRITO)
  buy(movie){
    let cart = [];
    let quiere = confirm(`¿Quieres comprar ${movie.title}?`)
      if (quiere == true) {
           cart.push(movie.title);
           console.log(`${movie.title} agregado en tu carrito!`)
           return ('Te la llevas por $' + movie.fullprice * 0.45)
       }else{
            let a = confirm(`En ese caso ¿Querés alquilar "${movie.title}"?`)
            if (a == true) {
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
}

//DEFINO UN ARRAY DE PERSONAS O USUARIOS:
const community = [];

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
const MovieOne = new Movie('El señor de los anillos', 'fantasía,aventura', '3:21 horas', 2003, 3000)
console.log(logIn()); 
console.log(community);
//PRUEBO COMO SE VAN AGREGANDO LOS USUARIOS
console.log(logIn()); 
console.log(community)
//Pruebo función
console.log(community[0].buy(MovieOne));





