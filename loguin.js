

//PRESENTO TAREA DE EVENTOS
//RETO DE LA CLASE(LO DEJO PARA CORRECCION):
class Person{
    constructor(namePerson, lastName, pasword, email, cart){
        this.namePerson = namePerson;
        this.lastName = lastName;
        this.pasword = pasword;
        this.email = email;
        this.cart = cart;
    }
}  

let personas=[];

function Saluda() {
  
    let namePerson = document.getElementById("nombre").value
    let lastName= document.getElementById("apellido").value
    let email = document.getElementById("email").value
    let pasword = document.getElementById("pasword").value
    let usuario = new Person;
    personas.push(usuario)


    if (namePerson == 0 || email == 0) {
      let conte2 = document.getElementsByClassName('Salud');
      let saludando= document.createElement('p');
      saludando.textContent = `No se pudo registrar! Faltan datos`
      return conte2[0].appendChild(saludando)
    } else if (lastName == 0 || pasword ==0) {
      let conte2 = document.getElementsByClassName('Salud');
      let saludando= document.createElement('p');
      saludando.textContent = `No se pudo registrar! Faltan datos`
      return conte2[0].appendChild(saludando)
    }else if (pasword.length < 6) {
      let conte2 = document.getElementsByClassName('Salud');
      let saludando= document.createElement('p');
      saludando.textContent = `No se pudo registrar! La contraseña es insuficiente`
      return conte2[0].appendChild(saludando)
    }{
      let conte2 = document.getElementsByClassName('Salud');
      let saludando= document.createElement('p');
      saludando.textContent = `Exelente! Ya te encuentras logueado, tu nombre es ${namePerson} ${lastName} y registraste tu email: ${email}`
      conte2[0].appendChild(saludando)
    }

    
  console.log(personas)
  }
  
  
  
  let boton= document.getElementById("bot")
  boton.addEventListener("click", Saluda)
