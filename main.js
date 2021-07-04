class Person{
  constructor(namePerson, lastName, age, nationality, email){
      this.namePerson = namePerson;
      this.lastName = lastName;
      this.age = age;
      this.nationality = nationality;
      this.email = email;
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
    if (lastName == 0) {
     return ('Necisto tu apellido para el registro');
    }
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

console.log(logIn()); 
console.log(community);
//PRUEBO COMO SE VAN AGREGANDO LOS USUARIOS
console.log(logIn()); 
console.log(community);