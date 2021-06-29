//PRACTICANDO OBJETOS
/*class Vehicle{
  constructor(color, year, trademark, price){
        this.color=color;
        this.year=year;
        this.trademark=trademark;
        this.price=price;
  }
  iva(){
    let result = this.price * 0.21
    return result
  }
  priceIva(){
    let total = this.price + this.iva()
    return total;
  }


}

//Objeto de ejemplo
const CarOne= new Vehicle ('negro', '2005', 'BMW', 56.400 );

console.log(CarOne)
console.log(CarOne.priceIva())
*/
//Me dio lastima borrar lo anterior, después me emocione mucho con la idea de las pelis, entrega definitiva de esta clase:

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

const MovieOne = new Movie('El señor de los anillos', 'Fantasía,Aventura', '3:21 horas', 2003, 3000)
const MovieTwo = new Movie('El castillo en el cielo','Fantasía, Aventura','2:04 horas', 1989, 2800)
const MovieThree = new Movie('Actividad Paranormal', 'Terror', '1:20 horas', 2007, 2500)

console.log(MovieOne)
console.log(MovieOne.youWant())
console.log(MovieOne.rentDay())
//coloco esto solo para claridad
console.log("----------------------------");

console.log(MovieTwo.title)
console.log(MovieTwo.showprice())
console.log(MovieTwo.buy())

//coloco esto solo para claridad
console.log("----------------------------");

console.log(MovieThree.youWant())
console.log(MovieThree.rentDay())

//coloco esto solo para claridad
console.log("----------------------------");

let give = confirm('¿Quieres vender alguna película?')
if (give == true) {
   let titleOb = prompt('Titulo:');
   let genderOb= prompt('Genero/s:');
   let durationOb= prompt('Duración:');
   let yearOb= Number(prompt('Año de estreno:'));
   let fullpriceOb= Number(prompt('Precio(sin unidad, manejamos $):')) ;

   let MovieObtained = new Movie(titleOb ,genderOb, durationOb, yearOb, fullpriceOb)
   console.log(MovieObtained);
}else{
  console.log(`Entonces otra ocación nos vemos! Gracias por visitarnos`)
}
