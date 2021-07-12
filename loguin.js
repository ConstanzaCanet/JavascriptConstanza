

//PRESENTO TAREA DE EVENTOS
//RETO DE LA CLASE(LO DEJO PARA CORRECCION):

function Saluda() {
  
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let email = document.getElementById("email").value
    let pasword = document.getElementById("pasword").value
    if (nombre == 0 || email == 0) {
      let conte2 = document.getElementsByClassName('Salud');
      let saludando= document.createElement('p');
      saludando.textContent = `No se pudo registrar! Faltan datos`
      return conte2[0].appendChild(saludando)
    } else if (apellido == 0 || pasword ==0) {
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
      saludando.textContent = `Exelente! Ya te encuentras logueado, tu nombre es ${nombre} ${apellido} y registraste tu email: ${email}`
      conte2[0].appendChild(saludando)
    }
  }
  
  
  
  let boton= document.getElementById("bot")
  boton.addEventListener("click", Saluda)
